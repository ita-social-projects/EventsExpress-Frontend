import React from "react";
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
import { BUTTON_NAMES } from "../../constants/buttonConsts";

// TODO Refactor class component
const EditEventContainer = ({
  event,
  userId,
  history,
  allCategories,
  formValues,
}) => {
  const onSubmit = async values => {
    await editEvent({
      ...validateEventForm(values),
      userId,
      id: event.id,
    });

    history.goBack();
  };

  const onError = error => handleFormError(error);

  return (
    <>
      <div className="pl-md-4">
        <EventForm
          validate={eventEditValidateForm}
          allCategories={allCategories}
          onSubmit={onSubmit}
          onError={onError}
          initialValues={event}
          formValues={formValues}
          haveReccurentCheckBox={false}
          eventId={event.id}
        >
          <div className="col">
            <Button className="border" fullWidth color="primary" type="submit">
              {BUTTON_NAMES.SAVE}
            </Button>
          </div>
          <div className="col">
            <Button
              className="border"
              fullWidth
              color="primary"
              onClick={history.goBack}
            >
              {BUTTON_NAMES.CANCEL}
            </Button>
          </div>
        </EventForm>
      </div>
    </>
  );
};

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
  event: PropTypes.object,
  userId: PropTypes.string,
  history: PropTypes.object,
  allCategories: PropTypes.object,
  formValues: PropTypes.object,
};

EditEventContainer.defaultProps = {
  userId: "",
  event: {},
  history: {},
  allCategories: {},
  formValues: {},
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditEventContainer),
);
