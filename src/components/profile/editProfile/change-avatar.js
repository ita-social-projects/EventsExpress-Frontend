import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import DropZoneField from "../../helpers/DropZoneField";
import ErrorMessages from "../../shared/errorMessage";
import PhotoService from "../../../services/PhotoService";

const validate = values => {
  const errors = {};
  if (
    values.image != null &&
    values.image.file != null &&
    values.image.file.size < 4096
  ) {
    errors.image = "Image is too small";
  }
  if (values.image === null || values.image === undefined) {
    errors.image = "Image is required";
  }

  return errors;
};

const photoService = new PhotoService();

const ChangeAvatar = ({
  handleSubmit,
  pristine,
  submitting,
  invalid,
  error,
  initialValues,
}) => {
  return (
    <form name="change-avatar" onSubmit={handleSubmit}>
      <Field
        name="image"
        component={DropZoneField}
        type="file"
        crop
        cropShape="round"
        loadImage={() => photoService.getUserPhoto(initialValues.userId)}
      />
      {error && <ErrorMessages error={error} className="text-center" />}
      <div>
        <Button
          color="primary"
          type="submit"
          disabled={pristine || submitting || invalid}
        >
          {" "}
          Submit{" "}
        </Button>
      </div>
    </form>
  );
};

ChangeAvatar.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  error: PropTypes.object,
  initialValues: PropTypes.object,
};

ChangeAvatar.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  submitting: false,
  invalid: false,
  error: {},
  initialValues: {},
};

export default reduxForm({
  form: "change-avatar",
  enableReinitialize: true,
  validate,
})(ChangeAvatar);
