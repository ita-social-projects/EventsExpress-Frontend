import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import DropZoneField from "../../helpers/DropZoneField";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import PhotoService from "../../../services/PhotoService";
import { PROFILE_CONSTANTS } from "../../../constants/profileConstants";

const ChangeAvatar = ({
  handleSubmit,
  pristine,
  submitting,
  invalid,
  error,
  initialValues,
}) => {
  const { SUBMIT } = PROFILE_CONSTANTS;
  return (
    <form name="change-avatar" onSubmit={handleSubmit}>
      <Field
        name="image"
        component={DropZoneField}
        type="file"
        crop
        cropShape="round"
        loadImage={() => new PhotoService().getUserPhoto(initialValues.userId)}
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

export default ChangeAvatar;
