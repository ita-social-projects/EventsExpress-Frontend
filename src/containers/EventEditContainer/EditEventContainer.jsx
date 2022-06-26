import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFormValues, SubmissionError } from "redux-form";
import Button from "@material-ui/core/Button";
import EventForm from "../../components/Event/EventForm/EventForm";
import { editEvent } from "../../actions/event/event-add-action";
import { setSuccessAllert } from "../../actions/alert-action";
import eventEditValidateForm from "../../components/helpers/eventEditValidateForm ";
import validateEventForm from "../../components/helpers/eventValidateForm";
import {
  buildValidationState,
  handleFormError,
} from "../../components/helpers/action-helpers";

// TODO Refactor class component
class EditEventContainer extends Component {
  onSubmit = async values => {
    await this.props.editEvent({
      ...validateEventForm(values),
      userId: this.props.userId,
      id: this.props.event.id,
    });

    this.props.history.goBack();
  };

  onError = error => this.props.handleFormError(error);

  render() {
    return (
      <>
        <div className="pl-md-4">
          <EventForm
            validate={eventEditValidateForm}
            allCategories={this.props.allCategories}
            onSubmit={this.onSubmit}
            onError={this.onError}
            initialValues={this.props.event}
            formValues={this.props.formValues}
            haveReccurentCheckBox={false}
            eventId={this.props.event.id}
          >
            <div className="col">
              <Button
                className="border"
                fullWidth
                color="primary"
                type="submit"
              >
                Save
              </Button>
            </div>
            <div className="col">
              <Button
                className="border"
                fullWidth
                color="primary"
                onClick={this.props.history.goBack}
              >
                Cancel
              </Button>
            </div>
          </EventForm>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  addEventStatus: state.add_event,
  allCategories: state.categories,
  formValues: getFormValues("event-form")(state),
  event: state.event.data,
});

const mapDispatchToProps = dispatch => {
  return {
    editEvent: data =>
      dispatch(
        editEvent(
          data,
          async response => {
            throw new SubmissionError(await buildValidationState(response));
          },
          dispatch(setSuccessAllert("Your event has been successfully saved!")),
        ),
      ),
    alert: msg => dispatch(setSuccessAllert(msg)),
    handleFormError: error => dispatch(handleFormError(error)),
  };
};

EditEventContainer.propTypes = {
  editEvent: PropTypes.func,
  event: PropTypes.object,
  userId: PropTypes.string,
  history: PropTypes.object,
  handleFormError: PropTypes.func,
  allCategories: PropTypes.object,
  formValues: PropTypes.object,
};

EditEventContainer.defaultProps = {
  editEvent: () => {},
  userId: "",
  event: {},
  history: {},
  handleFormError: () => {},
  allCategories: {},
  formValues: {},
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditEventContainer),
);
