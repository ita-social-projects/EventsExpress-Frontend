import { PROFILE_CONSTANTS } from "../../constants/profileConstants";

const validateAvatarForProfile = values => {
  const { MIN_SIZE_OF_AVATAR, SMALL_IMAGE, REQUIRED_IMAGE } = PROFILE_CONSTANTS;
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

export default validateAvatarForProfile;
