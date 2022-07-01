import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getFormValues, isPristine, SubmissionError } from "redux-form";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EventForm from "../../components/Event/EventForm/EventForm";
import SimpleModalWithDetails from "../../components/helpers/simple-modal-with-details";
import { EVENT_STATUS_ENUM } from "../../constants/eventConstants";
import getСategoriesList from "../../actions/category/category-list-action";
import { editEvent, publishEvent } from "../../actions/event/event-add-action";
import validateEventForm from "../../components/helpers/eventValidateForm";
import { changeEventStatus } from "../../actions/event/event-item-view-action";
import {
  setErrorAllertFromResponse,
  setSuccessAllert,
  handleFormError,
} from "../../actions/alert-action";
import "./EventDraftContainer.scss";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { BUTTON_NAMES } from "../../constants/buttonConsts";
import { EDIT_DRAFT_TITLE } from "../../constants/draftConstants";

// TODO Refactor class component
class EventDraftContainer extends Component {
  onPublish = async values => {
    if (!this.props.pristine) {
      await this.props.editEvent(
        {
          ...validateEventForm(values),
          userId: this.props.userId,
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
    await this.props.editEvent(
      {
        ...validateEventForm(this.props.formValues),
        userId: this.props.userId,
        id: this.props.event.id,
      },
      response => this.props.errorAlertFromResponse(response),
      () => this.props.alert("Your event has been successfully saved!"),
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
                  <h1>{EDIT_DRAFT_TITLE}</h1>
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
            userName={this.props.userName}
            allCategories={this.props.allCategories}
            onSubmit={this.onPublish}
            onError={this.onError}
            initialValues={this.props.event}
            formValues={this.props.formValues}
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
                {BUTTON_NAMES.SAVE}
              </Button>
            </div>
            <div className="col">
              <Button
                className="border"
                fullWidth
                color="primary"
                type="submit"
              >
                {BUTTON_NAMES.PUBLISH}
              </Button>
            </div>
            <div className="col">
              <Button
                className="border"
                fullWidth
                color="primary"
                onClick={this.props.history.goBack}
              >
                {BUTTON_NAMES.CANCEL}
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
  userName: state.user.name,
  addEventStatus: state.add_event,
  allCategories: state.categories,
  formValues: getFormValues("event-form")(state),
  pristine: isPristine("event-form")(state),
  event: state.event.data,
});

const mapDispatchToProps = dispatch => {
  return {
    editEvent: (data, onError, onSuccess) =>
      dispatch(editEvent(data, onError, onSuccess)),
    delete: (eventId, reason) =>
      dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.DELETED)),
    publish: data => dispatch(publishEvent(data)),
    getСategoriesList: () => dispatch(getСategoriesList()),
    alert: msg => dispatch(setSuccessAllert(msg)),
    errorAlertFromResponse: response =>
      dispatch(setErrorAllertFromResponse(response)),
    handleFormError: error => dispatch(handleFormError(error)),
  };
};

EventDraftContainer.propTypes = {
  event: PropTypes.object,
  editEvent: PropTypes.func,
  userId: PropTypes.string,
  userName: PropTypes.string,
  publish: PropTypes.func,
  history: PropTypes.object,
  allCategories: PropTypes.object,
  handleFormError: PropTypes.func,
  delete: PropTypes.func,
  alert: PropTypes.func,
  errorAlertFromResponse: PropTypes.func,
  formValues: PropTypes.object,
  pristine: PropTypes.bool,
};

EventDraftContainer.defaultProps = {
  editEvent: () => {},
  userId: "",
  event: {},
  userName: "",
  publish: () => {},
  history: {},
  allCategories: {},
  handleFormError: () => {},
  delete: () => {},
  alert: () => {},
  errorAlertFromResponse: () => {},
  formValues: {},
  pristine: false,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventDraftContainer),
);
