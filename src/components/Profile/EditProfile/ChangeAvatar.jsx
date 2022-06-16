import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import DropZoneField from "../../helpers/DropZoneField";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import PhotoService from "../../../services/PhotoService";
import profileConstants from "../../../constants/profileConstants";

const validate = values => {
  const { MIN_SIZE_OF_AVATAR, SMALL_IMAGE, REQUIRED_IMAGE } = profileConstants;
  const errors = {
    image: " ",
  };
  if (
    values.image &&
    values.image.file &&
    values.image.file.size < MIN_SIZE_OF_AVATAR
  ) {
    errors.image = SMALL_IMAGE;
  }
  if (!values.image) {
    errors.image = REQUIRED_IMAGE;
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
  const { SUBMIT } = profileConstants;
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
      <Button
        color="primary"
        type="submit"
        disabled={pristine || submitting || invalid}
      >
        {SUBMIT}
      </Button>
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
