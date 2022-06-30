import { reduxForm } from "redux-form";
import EditGender from "../../components/Profile/EditProfile/EditGender";

export default reduxForm({
  form: "EditGender",
})(EditGender);
