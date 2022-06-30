import { STEPPER_HELPER_STEP } from "../../constants/authConstants";

const updateStep = (stepNumber, steps) => {
  const newSteps = [...steps];
  let stepCounter = 0;

  while (stepCounter < newSteps.length) {
    // Current step
    if (stepCounter === stepNumber) {
      newSteps[stepCounter] = {
        ...newSteps[stepCounter],
        highlighted: true,
        selected: true,
        completed: false,
      };
      stepCounter += STEPPER_HELPER_STEP;
    }
    // Prev step
    else if (stepCounter < stepNumber) {
      newSteps[stepCounter] = {
        ...newSteps[stepCounter],
        highlighted: false,
        selected: true,
        completed: true,
      };
      stepCounter += STEPPER_HELPER_STEP;
    }
    // Next steps
    else {
      newSteps[stepCounter] = {
        ...newSteps[stepCounter],
        highlighted: false,
        selected: false,
        completed: false,
      };
      stepCounter += STEPPER_HELPER_STEP;
    }
  }
  return newSteps;
};

export default updateStep;
