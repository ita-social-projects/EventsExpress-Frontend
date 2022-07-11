import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import RenderTextField from "../helpers/form-helpers/render-text-field";
import "./Comment.scss";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";

const Comment = ({ handleSubmit, error }) => {
  return (
    <>
      <form name="addComment" onSubmit={handleSubmit}>
        <Field name="text" component={RenderTextField} label="Comment:" />
        <DialogActions>
          <Button type="submit" value="Add" color="primary">
            {" "}
            {"Add"}{" "}
          </Button>
        </DialogActions>
      </form>
      {error && <ErrorMessages error={error} className="text-center" />}
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
