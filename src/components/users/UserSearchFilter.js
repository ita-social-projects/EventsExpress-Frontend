import React from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { renderTextField } from "../helpers/form-helpers";

const UserSearchFilter = ({ handleSubmit, pristine, submitting, onReset }) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="shadow bg-white rounded mt-2 p-2"
      >
        <Field
          name="keyWord"
          component={renderTextField}
          type="input"
          label="Search:"
        />

        <DialogActions>
          <Button
            fullWidth
            type="button"
            color="primary"
            disabled={pristine || submitting}
            onClick={onReset}
          >
            CLEAR
          </Button>
          <Button
            fullWidth
            type="submit"
            color="primary"
            disabled={pristine || submitting}
          >
            Search
          </Button>
        </DialogActions>
      </form>
    </>
  );
};

UserSearchFilter.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  onReset: () => {},
  submitting: false,
};

UserSearchFilter.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  onReset: PropTypes.func,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: "user-search-filter-form",
})(UserSearchFilter);
