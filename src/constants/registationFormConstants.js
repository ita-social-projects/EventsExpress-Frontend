/* eslint-disable import/prefer-default-export */
// export default {
//   REGISTER: "Register",
//   COMPLETE: "Complete Profile",
//   STEP_3: "Step 3",
//   STEP_4: "Step 4",
//   CONFIRM: "Confirm",
//   STEP_COMPLETE: 2,
//   STEP_CHOOSE_ACTIVITIES: 3,
//   STEP_PLACE_HOLDER: 4,
//   STEP_CONFIRM: 5,
//   STEP_SUCCESS: 6,
// };

import ChooseActivities from "../components/RegistrationForm/ChooseActivities";
import CompleteProfileForm from "../components/RegistrationForm/CompleteProfileForm/CompleteProfileForm";
import ConfirmForm from "../components/RegistrationForm/ConfirmForm";
import PlaceHolder from "../components/RegistrationForm/PlaceHolder";
import Success from "../components/RegistrationForm/Success";

export const STEPPER_STEPS = [
  { title: "Register", component: null },
  { title: "Complete Profile", component: CompleteProfileForm },
  { title: "Step 3", component: ChooseActivities },
  { title: "Step 4", component: PlaceHolder },
  { title: "Confirm", component: ConfirmForm },
  { title: "Step Complete", component: Success },
];
