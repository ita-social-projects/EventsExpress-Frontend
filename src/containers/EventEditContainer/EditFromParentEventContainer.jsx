import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFormValues, reset } from "redux-form";
import moment from "moment";
import Button from "@material-ui/core/Button";
import EventForm from "../../components/Event/EventForm/EventForm";
import editEventFromParent, {
  setEventFromParentPending,
  setEventFromParentSuccess,
} from "../../actions/event/event-copy-with-edit-action";
import eventEditValidateForm from "../../components/helpers/eventEditValidateForm ";
import eventValidateForm from "../../components/helpers/eventValidateForm";
import getCategories from "../../actions/category/category-list-action";
import { BUTTON_NAMES } from "../../constants/buttonConsts";

// TODO Refactor class component
class EditFromParentEventContainer extends Component {
  componentWillMount = () => {
    this.props.getCategories();
  };

  componentDidUpdate = () => {
    if (
      !this.props.getEventFromParentStatus.eventFromParentError &&
      this.props.editEventFromParentStatus.isEventFromParentSuccess
    ) {
      this.props.reset();
    }
  };

  componentWillUnmount() {
    this.props.reset();
  }

  onSubmit = values => {
    const valuesCopy = { ...values };
    if (values.isReccurent) {
      valuesCopy.isReccurent = false;
    }
    this.props.editEventFromParent({
      ...eventValidateForm(valuesCopy),
      userId: this.props.userId,
    });
  };

  render() {
    const initialValues = {
      ...this.props.event,
      dateFrom: this.props.eventSchedule.nextRun,
      dateTo: moment(this.props.event.dateTo).add(
        moment(this.props.eventSchedule.nextRun).diff(
          moment(this.props.event.dateFrom),
          "days",
        ),
        "days",
      ),
    };
    return (
      <>
        <EventForm
          validate={eventEditValidateForm}
          allCategories={this.props.allCategories}
          onSubmit={this.onSubmit}
          initialValues={initialValues}
          formValues={this.props.formValues}
          haveReccurentCheckBox={false}
          disabledDate
          eventId={this.props.event.id}
        >
          <div className="col">
            <Button className="border" fullWidth color="primary" type="submit">
              {BUTTON_NAMES.PUBLISH}
            </Button>
          </div>
          <div className="col">
            <Button
              className="border"
              fullWidth
              color="primary"
              onClick={this.props.onCancelEditing}
            >
              {BUTTON_NAMES.CANCEL}
            </Button>
          </div>
        </EventForm>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  editEventFromParentStatus: state.editEventFromParent,
  allCategories: state.categories,
  formValues: getFormValues("event-form")(state),
  eventSchedule: state.eventSchedule.data,
  event: state.event.data,
});

const mapDispatchToProps = dispatch => {
  return {
    editEventFromParent: data => dispatch(editEventFromParent(data)),
    getCategories: () => dispatch(getCategories()),
    reset: () => {
      dispatch(reset("event-form"));
      dispatch(setEventFromParentPending(true));
      dispatch(setEventFromParentSuccess(false));
    },
  };
};
EditFromParentEventContainer.propTypes = {
  getCategories: PropTypes.func,
  getEventFromParentStatus: PropTypes.func,
  reset: PropTypes.func,
  editEventFromParent: PropTypes.func,
  userId: PropTypes.string,
  eventSchedule: PropTypes.object,
  event: PropTypes.object,
  allCategories: PropTypes.object,
  onCancelEditing: PropTypes.func,
  formValues: PropTypes.object,
  editEventFromParentStatus: PropTypes.object,
};
EditFromParentEventContainer.defaultProps = {
  getCategories: () => {},
  getEventFromParentStatus: () => {},
  reset: () => {},
  editEventFromParent: () => {},
  userId: "",
  eventSchedule: {},
  event: {},
  allCategories: {},
  onCancelEditing: () => {},
  formValues: {},
  editEventFromParentStatus: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditFromParentEventContainer);
