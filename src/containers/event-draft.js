import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getFormValues, isPristine, SubmissionError } from "redux-form";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EventForm from "../components/event/EventForm/Event-form";
import SimpleModalWithDetails from "../components/helpers/simple-modal-with-details";
import eventStatusEnum from "../constants/eventStatusEnum";
import { edit_event, publish_event } from "../actions/event/event-add-action";
import { validateEventForm } from "./event-validate-form";
import { change_event_status } from "../actions/event/event-item-view-action";
import {
  setErrorAllertFromResponse,
  setSuccessAllert,
} from "../actions/alert-action";
import "./css/Draft.css";
import {
  buildValidationState,
  handleFormError,
} from "../components/helpers/action-helpers";

class EventDraftWrapper extends Component {
  onPublish = async values => {
    if (!this.props.pristine) {
      await this.props.edit_event(
        {
          ...validateEventForm(values),
          user_id: this.props.user_id,
          id: this.props.event.id,
        },
        async response => {
          throw new SubmissionError(await buildValidationState(response));
        },
      );
    }
    return this.props.publish(this.props.event.id);
  };

  onSave = async () => {
    await this.props.edit_event(
      {
        ...validateEventForm(this.props.form_values),
        user_id: this.props.user_id,
        id: this.props.event.id,
      },
      response => this.props.errorAlertFromResponse(response),
      _ => this.props.alert("Your event has been successfully saved!"),
    );
  };

  onDelete = async reason => {
    await this.props.delete(this.props.event.id, reason);
    this.props.alert("Your event has been successfully deleted!");
    this.props.history.goBack();
  };

  onError = error => this.props.handleFormError(error);

  render() {
    return (
      <>
        <div className="pl-md-4">
          <header>
            <div className="row">
              <div className="col-12 py-3">
                <div className="float-left">
                  <h1>Edit event draft</h1>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center float-right">
                  <SimpleModalWithDetails
                    submitCallback={this.onDelete}
                    data="Are you sure?"
                    button={
                      <IconButton className="text-danger" size="medium">
                        <i className="fas fa-trash" />
                      </IconButton>
                    }
                  />
                </div>
              </div>
            </div>
            <hr className="gradient mt-0 mb-3" />
          </header>
          <EventForm
            userName={this.props.user_name}
            allCategories={this.props.all_categories}
            onSubmit={this.onPublish}
            onError={this.onError}
            initialValues={this.props.event}
            formValues={this.props.form_values}
            haveReccurentCheckBox
            eventId={this.props.event.id}
          >
            <div className="col">
              <Button
                className="border"
                fullWidth
                color="primary"
                onClick={this.onSave}
              >
                Save
              </Button>
            </div>
            <div className="col">
              <Button
                className="border"
                fullWidth
                color="primary"
                type="submit"
              >
                Publish
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
  user_name: state.user.name,
  add_event_status: state.add_event,
  all_categories: state.categories,
  form_values: getFormValues("event-form")(state),
  pristine: isPristine("event-form")(state),
  event: state.event.data,
});

const mapDispatchToProps = dispatch => {
  return {
    edit_event: (data, onError, onSuccess) =>
      dispatch(edit_event(data, onError, onSuccess)),
    delete: (eventId, reason) =>
      dispatch(change_event_status(eventId, reason, eventStatusEnum.Deleted)),
    publish: data => dispatch(publish_event(data)),
    get_categories: () => dispatch(get_categories()),
    alert: msg => dispatch(setSuccessAllert(msg)),
    errorAlertFromResponse: response =>
      dispatch(setErrorAllertFromResponse(response)),
    handleFormError: error => dispatch(handleFormError(error)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventDraftWrapper),
);
