import { INCREMENT } from "../../constants/numberConstants";

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
      stepCounter += INCREMENT;
    }
    // Prev step
    else if (stepCounter < stepNumber) {
      newSteps[stepCounter] = {
        ...newSteps[stepCounter],
        highlighted: false,
        selected: true,
        completed: true,
      };
      stepCounter += INCREMENT;
    }
    // Next steps
    else {
      newSteps[stepCounter] = {
        ...newSteps[stepCounter],
        highlighted: false,
        selected: false,
        completed: false,
      };
      stepCounter += INCREMENT;
    }
  }
  return newSteps;
};

export default updateStep;
