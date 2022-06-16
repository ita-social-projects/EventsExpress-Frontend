import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import DropZoneField from "../../helpers/DropZoneField";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import PhotoService from "../../../services/PhotoService";
import AuthComponent from "../../../security/authComponent";

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
  pristine,
  submitting,
  invalid,
  error,
  changeAvatar,
  userId,
}) => {
  const handleImageChangeSubmit = values => {
    changeAvatar(values);
  };

  return (
    <AuthComponent>
      <form name="change-avatar" onSubmit={handleImageChangeSubmit}>
        <Field
          name="image"
          component={DropZoneField}
          type="file"
          crop
          cropShape="round"
          loadImage={() => photoService.getUserPhoto(userId)}
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
    </AuthComponent>
  );
};

ChangeAvatar.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  invalid: PropTypes.bool,
  error: PropTypes.object,
  changeAvatar: PropTypes.func,
  userId: PropTypes.string,
};

ChangeAvatar.defaultProps = {
  pristine: false,
  submitting: false,
  invalid: false,
  error: {},
  changeAvatar: () => {},
  userId: "",
};

export default reduxForm({
  form: "change-avatar",
  enableReinitialize: true,
  validate,
})(ChangeAvatar);
