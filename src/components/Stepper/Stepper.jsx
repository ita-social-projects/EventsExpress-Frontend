import React from "react";
import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";
import "./Stepper.scss";

const StepperUpdated = ({ steps, currentStep }) => {
  return (
    <div className="stepper">
      <div className="stepper-title">Your Registration Progress</div>
      <div className="stepper-items">
        {steps.map((step, stepNumber) => (
          <div
            key={step.title}
            className={`stepper-item ${
              currentStep === stepNumber ? "active" : ""
            } ${currentStep > stepNumber ? "done-or-completed" : ""}`}
          >
            <div className="stepper-item__number">
              {currentStep > stepNumber ? (
                <TiTick />
              ) : (
                <span className="inner-text">{stepNumber}</span>
              )}
            </div>
            <div
              className={`stepper-item__title ${
                currentStep === stepNumber ? "active" : ""
              }`}
            >
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

StepperUpdated.defaultProps = {
  steps: [],
  currentStep: 0,
};

StepperUpdated.propTypes = {
  steps: PropTypes.array,
  currentStep: PropTypes.number,
};

export default StepperUpdated;
// export default class Stepper extends Component {
//   constructor() {
//     super();
//     this.state = { steps: [] };
//   }

//   componentDidMount() {
//     const { steps, currentStepNumber } = this.props;
//     const stepsState = steps.map((step, index) => ({
//       description: step,
//       highlighted: index === 0,
//       selected: index === 0,
//       completed: false,
//     }));

//     const currentSteps = updateStep(currentStepNumber, stepsState);
//     this.setState({ steps: currentSteps });
//   }

//   componentDidUpdate(prevProps) {
//     const { steps } = this.state;
//     const currentSteps = updateStep(this.props.currentStepNumber, steps);

//     if (prevProps.currentStepNumber !== this.props.currentStepNumber) {
//       this.setState({ steps: currentSteps });
//     }
//   }

//   render() {
//     const { stepColor } = this.props;
//     const { steps } = this.state;
//     const stepsDisplay = steps.map((step, index) => {
//       return (
//         //! TODO : ARRAY INDEX USE AS A KEY (temporary solution)
//         // eslint-disable-next-line react/no-array-index-key
//         <div className="step-wrapper" key={index}>
//           <div
//             className={`step-number ${
//               step.selected ? "step-number-selected" : "step-number-disabled"
//             }`}
//             style={{
//               background: `${step.selected ? stepColor : "none"}`,
//             }}
//           >
//             {step.completed ? <span>&#10004;</span> : index + 1}
//           </div>

//           <div
//             className={`step-description ${
//               step.highlighted && "step-description-active"
//             }`}
//           >
//             {step.description}
//           </div>
//           {index !== steps.length - 1 && (
//             <div className={`divider-line divider-line-${steps.length}`} />
//           )}
//         </div>
//       );
//     });

//     return <div className="stepper-wrapper-horizontal">{stepsDisplay}</div>;
//   }
// }

// Stepper.propTypes = {
//   currentStepNumber: PropTypes.number.isRequired,
//   steps: PropTypes.array.isRequired,
//   stepColor: PropTypes.string.isRequired,
// };
