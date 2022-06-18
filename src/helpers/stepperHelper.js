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
      stepCounter += 1;
    }
    // Prev step
    else if (stepCounter < stepNumber) {
      newSteps[stepCounter] = {
        ...newSteps[stepCounter],
        highlighted: false,
        selected: true,
        completed: true,
      };
      stepCounter += 1;
    }
    // Next steps
    else {
      newSteps[stepCounter] = {
        ...newSteps[stepCounter],
        highlighted: false,
        selected: false,
        completed: false,
      };
      stepCounter += 1;
    }
  }
  return newSteps;
};

export default updateStep;
