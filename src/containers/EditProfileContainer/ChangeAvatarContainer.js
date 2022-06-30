import { reduxForm } from "redux-form";
import ChangeAvatar from "../../components/Profile/EditProfile/ChangeAvatar";
import validateAvatarForProfile from "../../components/helpers/validateAvatar";

export default reduxForm({
  form: "change-avatar",
  enableReinitialize: true,
  validateAvatarForProfile,
})(ChangeAvatar);
