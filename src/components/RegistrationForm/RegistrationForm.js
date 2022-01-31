import "./RegistrationForm.css";
import React, { Component } from "react";
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
export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      currentStep: 2,
    };
  }

  nextPage() {
    this.setState(prevState => ({ currentStep: prevState.currentStep + 1 }));
  }

  previousPage() {
    this.setState(prevState => ({ currentStep: prevState.currentStep - 1 }));
  }

  render() {
    // TODO: don`t use this props (it`s func)
    // const { onSubmit } = this.props;
    const { currentStep } = this.state;

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
                <CompleteProfileForm onSubmit={this.nextPage} />
              )}
              {currentStep === STEP_CHOOSE_ACTIVITIES && (
                <ChooseActivities
                  previousPage={this.previousPage}
                  onSubmit={this.nextPage}
                />
              )}
              {currentStep === STEP_PLACE_HOLDER && (
                <PlaceHolder
                  previousPage={this.previousPage}
                  onSubmit={this.nextPage}
                />
              )}
              {currentStep === STEP_CONFIRM && (
                <ConfirmForm
                  previousPage={this.previousPage}
                  onSubmit={this.nextPage}
                />
              )}
              {currentStep === STEP_SUCCESS && <SuccessResult />}
            </div>
          </div>
        </div>
      </>
    );
  }
}
