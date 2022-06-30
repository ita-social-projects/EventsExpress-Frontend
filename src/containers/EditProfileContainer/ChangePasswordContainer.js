import { reduxForm } from "redux-form";
import ChangePassword, {
  validate,
} from "../../components/Profile/EditProfile/ChangePassword";

export default reduxForm({
  form: "ChangePassword",
  validate,
})(ChangePassword);
