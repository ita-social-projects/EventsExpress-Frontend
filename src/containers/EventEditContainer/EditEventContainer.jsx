import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFormValues, SubmissionError } from "redux-form";
import Button from "@material-ui/core/Button";
import EventForm from "../../components/Event/EventForm/EventForm";
import { editEvent } from "../../actions/event/event-add-action";
import { setSuccessAllert, handleFormError } from "../../actions/alert-action";
import eventEditValidateForm from "../../components/helpers/eventEditValidateForm ";
import validateEventForm from "../../components/helpers/eventValidateForm";
import { buildValidationState } from "../../components/helpers/action-helpers";
import { BUTTON_NAMES } from "../../constants/buttonConsts";

const EditEventContainer = ({
  event,
  editEventForm,
  userId,
  userName,
  history,
  allCategories,
  formValues,
  handleEventFormError,
}) => {
  const { SAVE, CANCEL } = BUTTON_NAMES;
  const onSubmit = async values => {
    await editEventForm({
      ...validateEventForm(values),
      userId,
      id: event.id,
    });

    history.goBack();
  };

  const onError = error => handleEventFormError(error);

  return (
    <>
      <div className="pl-md-4">
        <EventForm
          validate={eventEditValidateForm}
          allCategories={allCategories}
          onSubmit={onSubmit}
          onError={onError}
          initialValues={event}
          userName={userName}
          formValues={formValues}
          haveReccurentCheckBox
          eventId={event.id}
        >
          <div className="col">
            <Button className="border" fullWidth color="primary" type="submit">
              {SAVE}
            </Button>
          </div>
          <div className="col">
            <Button
              className="border"
              fullWidth
              color="primary"
              onClick={history.goBack}
            >
              {CANCEL}
            </Button>
          </div>
        </EventForm>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  userId: state.user.id,
  userName: state.user.name,
  allCategories: state.categories,
  formValues: getFormValues("event-form")(state),
  event: state.event.data,
});

const mapDispatchToProps = dispatch => {
  return {
    editEventForm: data =>
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
    handleEventFormError: error => dispatch(handleFormError(error)),
  };
};

EditEventContainer.propTypes = {
  editEventForm: PropTypes.func,
  event: PropTypes.object,
  userId: PropTypes.string,
  userName: PropTypes.string,
  history: PropTypes.object,
  handleEventFormError: PropTypes.func,
  allCategories: PropTypes.object,
  formValues: PropTypes.object,
};

EditEventContainer.defaultProps = {
  editEventForm: () => {},
  userId: "",
  userName: "",
  event: {},
  history: {},
  handleEventFormError: () => {},
  allCategories: {},
  formValues: {},
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditEventContainer),
);
