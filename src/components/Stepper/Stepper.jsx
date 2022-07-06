import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Stepper.scss";
import updateStep from "../helpers/stepperHelper";

const Stepper = ({ currentStepNumber, steps, stepColor }) => {
  const [setedSteps, setSteps] = useState();

  useEffect(() => {
    const stepsState = steps.map((step, index) => ({
      description: step,
      highlighted: index === 0,
      selected: index === 0,
      completed: false,
    }));

    const currentSteps = updateStep(currentStepNumber, stepsState);
    setSteps(currentSteps);
  }, []);

  useEffect(() => {
    const currentSteps = updateStep(currentStepNumber, setedSteps);
    setSteps(currentSteps);
  }, [currentStepNumber]);

  const stepsDisplay = setedSteps.map((step, index) => {
    return (
      <div className="step-wrapper" key={step}>
        <div
          className={`step-number ${
            step.selected ? "step-number-selected" : "step-number-disabled"
          }`}
          style={{
            background: `${step.selected ? stepColor : "none"}`,
          }}
        >
          {step.completed ? <span>&#10004;</span> : index + 1}
        </div>

        <div
          className={`step-description ${
            step.highlighted && "step-description-active"
          }`}
        >
          {step.description}
        </div>
        {index !== steps.length - 1 && (
          <div className={`divider-line divider-line-${steps.length}`} />
        )}
      </div>
    );
  });

  return <div className="stepper-wrapper-horizontal">{stepsDisplay}</div>;
};

Stepper.propTypes = {
  currentStepNumber: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  stepColor: PropTypes.string.isRequired,
};

export default Stepper;
