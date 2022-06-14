import "./RegistrationForm.css";
import React, { useState } from "react";
import Stepper from "../stepper/Stepper";
import CompleteProfileForm from "./CompleteProfileForm";
import ConfirmForm from "./ConfirmForm";
import ChooseActivities from "./ChooseActivities";
import SuccessResult from "./Success";
import PlaceHolder from "./PlaceHolder";
import steps from "../../constants/ConstantsRegistationForm";

const {
  REGISTER,
  COMPLETE,
  STEP_3,
  STEP_4,
  CONFIRM,
  STEP_COMPLETE,
  STEP_CHOOSE_ACTIVITIES,
  STEP_PLACE_HOLDER,
  STEP_CONFIRM,
  STEP_SUCCESS,
} = steps;

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const nextPage = () => {
    setCurrentStep(currentStep + 1);
  };
  const previousPage = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="stepper-container-horizontal">
        <Stepper
          currentStepNumber={currentStep - 1}
          steps={[REGISTER, COMPLETE, STEP_3, STEP_4, CONFIRM]}
          stepColor="#ff9900"
        />
        <br />
        <div className="buttons-container">
          <div>
            {currentStep === STEP_COMPLETE && (
              <CompleteProfileForm onSubmit={nextPage} />
            )}
            {currentStep === STEP_CHOOSE_ACTIVITIES && (
              <ChooseActivities
                previousPage={previousPage}
                onSubmit={nextPage}
              />
            )}
            {currentStep === STEP_PLACE_HOLDER && (
              <PlaceHolder previousPage={previousPage} onSubmit={nextPage} />
            )}
            {currentStep === STEP_CONFIRM && (
              <ConfirmForm previousPage={previousPage} onSubmit={nextPage} />
            )}
            {currentStep === STEP_SUCCESS && <SuccessResult />}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
