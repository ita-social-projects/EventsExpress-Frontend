import React from "react";
import PropTypes from "prop-types";
// import { Grid, Button } from "@material-ui/core";
import { reduxForm, Field } from "redux-form";
import FormInput from "../../shared/FormInput/FormInput";
import FormSelect from "../../shared/FormSelect/FormSelect";
// import moment from "moment";
import { renderDatePicker, parseEuDate } from "../../helpers/form-helpers";
import ChangeAvatarContainer from "../../../containers/EditProfileContainers/ChangeAvatarContainer";
import "./CompleteProfileForm.scss";

const CompleteProfileForm = ({ nextPage }) => (
  <form className="complete-profile">
    <div className="user-avatar">
      <ChangeAvatarContainer />
    </div>
    <div className="user-details">
      <Field
        name="firstName"
        component={FormInput}
        className="firstname"
        placeholder="Enter Your Name"
      />
      <Field
        name="lastname"
        component={FormInput}
        className="lastname"
        placeholder="Enter Your Surname"
      />
      <Field
        name="birthDate"
        label="Birth Date"
        component={renderDatePicker}
        parse={parseEuDate}
      />
      <Field
        name="country"
        component={FormInput}
        className="country"
        placeholder="Enter Your Country"
      />
      <Field
        name="city"
        component={FormInput}
        className="city"
        placeholder="Enter Your City"
      />
      <Field name="gender" component={FormSelect}>
        <option selected value="1">
          Male
        </option>
        <option value="2">Female</option>
        <option value="3">Other</option>
      </Field>
      <button
        className="complete-profile__button"
        type="button"
        onClick={nextPage}
      >
        Go next
      </button>
    </div>
  </form>
);
CompleteProfileForm.propTypes = {
  nextPage: PropTypes.func,
};
CompleteProfileForm.defaultProps = {
  nextPage: () => {},
};

export default reduxForm({
  form: "registrationForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(CompleteProfileForm);

// const CompleteProfileForm = ({ handleSubmit }) => {
//   return (
//     <>
//       <div style={{ width: "97%", padding: "10px" }}>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={3}>
//             <Grid item sm={6}>
//               <h1 style={{ fontSize: 20 }}>Step 2: Complete your profile. </h1>
//             </Grid>
//             <Grid item sm={6} />

//             <Grid item sm={3}>
//               Choose your avatar:
//             </Grid>
//             <Grid item sm={9}>
//               <ChangeAvatarWrapper />
//             </Grid>
//             <Grid item sm={1} />

//             <Grid item sm={12} />

//             <Grid item sm={3}>
//               <Field
//                 name="firstName"
//                 variant="outlined"
//                 component={renderTextField}
//                 type="input"
//                 label="First Name"
//               />
//             </Grid>
//             <Grid item sm={3}>
//               <Field
//                 name="lastName"
//                 variant="outlined"
//                 component={renderTextField}
//                 type="input"
//                 label="Last Name"
//               />
//             </Grid>
//             <Grid item sm={2} />
//             <Grid item sm={4}>
//               <Field
//                 name="birthDate"
//                 label="Birth Date"
//                 minValue={moment(new Date()).subtract(115, "years")}
//                 maxValue={moment(new Date()).subtract(14, "years")}
//                 component={renderDatePicker}
//                 parse={parseEuDate}
//               />
//             </Grid>
//             <Grid item xs={3}>
//               <Field
//                 name="country"
//                 variant="outlined"
//                 component={renderTextField}
//                 type="input"
//                 label="County"
//               />
//             </Grid>
//             <Grid item xs={3}>
//               <Field
//                 name="city"
//                 variant="outlined"
//                 component={renderTextField}
//                 type="input"
//                 label="City"
//               />
//             </Grid>

//             <Grid item sm={2}></Grid>
//             <Grid item sm={4}>
//               <Field
//                 minWidth={140}
//                 name="gender"
//                 component={renderSelectField}
//                 label="Gender"
//               >
//                 <option aria-label="None" value="" />
//                 <option value="1">Male</option>
//                 <option value="2">Female</option>
//                 <option value="3">Other</option>
//               </Field>
//             </Grid>

//             <Grid item sm={12} justifyContent="space-around">
//               <Button
//                 type="submit"
//                 className="next"
//                 color="primary"
//                 variant="contained"
//                 size="large"
//               >
//                 Continue
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//     </>
//   );
// };

// CompleteProfileForm.defaultProps = {
//   handleSubmit: () => {},
// };

// CompleteProfileForm.propTypes = {
//   handleSubmit: PropTypes.func,
// };

// // const mapStateToProps = state => {
// //   return {
// //     formValues: getFormValues("registrationForm")(state),
// //   };
// // };

// export default reduxForm({
//   form: "registrationForm",
//   destroyOnUnmount: false,
//   forceUnregisterOnUnmount: true,
// })(CompleteProfileForm);
