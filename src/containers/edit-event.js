import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFormValues, SubmissionError } from "redux-form";
import Button from "@material-ui/core/Button";
import EventForm from "../components/event/EventForm/Event-form";
import { editEvent } from "../actions/event/event-add-action";
import { setSuccessAllert } from "../actions/alert-action";
import validate from "./event-edit-validate-form ";
import validateEventForm from "./event-validate-form";
import {
  buildValidationState,
  handleFormError,
} from "../components/helpers/action-helpers";

class EditEventWrapper extends Component {
  onSubmit = async values => {
    await this.props.editEvent({
      ...validateEventForm(values),
      user_id: this.props.user_id,
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
            validate={validate}
            allCategories={this.props.all_categories}
            onSubmit={this.onSubmit}
            onError={this.onError}
            initialValues={this.props.event}
            formValues={this.props.form_values}
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
  user_id: state.user.id,
  add_event_status: state.add_event,
  all_categories: state.categories,
  form_values: getFormValues("event-form")(state),
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

EditEventWrapper.propTypes = {
  editEvent: PropTypes.func,
  event: PropTypes.object,
  user_id: PropTypes.string,
  history: PropTypes.object,
  handleFormError: PropTypes.func,
  all_categories: PropTypes.object,
  form_values: PropTypes.object,
};

EditEventWrapper.defaultProps = {
  editEvent: () => {},
  user_id: "",
  event: {},
  history: {},
  handleFormError: () => {},
  all_categories: {},
  form_values: {},
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditEventWrapper),
);
