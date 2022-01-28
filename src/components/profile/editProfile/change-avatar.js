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

ChangeAvatar.defaultProps = {
  pristine: false,
  invalid: false,
  submitting: false,
  error: "",
  handleSubmit: () => {},
  initialValues: [],
};

ChangeAvatar.propTypes = {
  pristine: PropTypes.bool,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.array,
};

export default reduxForm({
  form: "change-avatar",
  enableReinitialize: true,
  validate,
})(ChangeAvatar);
