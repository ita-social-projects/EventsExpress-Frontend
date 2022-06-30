import { reduxForm } from "redux-form";
import EditBirthday, {
  validate,
} from "../../components/Profile/EditProfile/EditBirthday";

export default reduxForm({
  form: "EditBirthday",
  validate,
})(EditBirthday);
