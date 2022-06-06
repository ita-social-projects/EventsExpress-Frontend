import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import { renderTextField } from "../helpers/form-helpers";
import "./Comment.css";
import ErrorMessages from "../shared/errorMessage";

const Comment = props => {
  return (
    <>
      <form name="addComment" onSubmit={props.handleSubmit}>
        <Field name="text" component={renderTextField} label="Comment:" />
        <DialogActions>
          <Button type="submit" value="Add" color="primary">
            {" "}
            Add{" "}
          </Button>
        </DialogActions>
      </form>
      {props.error && (
        <ErrorMessages error={props.error} className="text-center" />
      )}
    </>
  );
};

Comment.propTypes = {
  handleSubmit: propTypes.func,
  error: propTypes.string,
};

Comment.defaultProps = {
  handleSubmit: () => {},
  error: "",
};

const FormComment = reduxForm({
  form: "add-comment",
})(Comment);

export default FormComment;
