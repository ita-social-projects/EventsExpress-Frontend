import { reduxForm } from "redux-form";
import EditUsername from "../../components/Profile/EditProfile/EditUsername";

export default reduxForm({
  form: "EditUsername",
})(EditUsername);
