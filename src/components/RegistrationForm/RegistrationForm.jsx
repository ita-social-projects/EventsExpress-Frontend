import React, { useState } from "react";
import Stepper from "../Stepper/Stepper";
import { STEPPER_STEPS } from "../../constants/registationFormConstants";
import "./RegistrationForm.scss";

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const CurrentComponent = STEPPER_STEPS[currentStep - 1].component;

  const nextPage = () => {
    setCurrentStep(currentStep + 1);
  };
  const previousPage = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="registration-continuation">
        <Stepper
          currentStep={currentStep - 1}
          steps={STEPPER_STEPS.map(step => ({ title: step.title }))}
        />
        <br />
        <div className="current-form">
          <CurrentComponent
            onSubmit={nextPage}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
