import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFormValues, reset } from "redux-form";
import moment from "moment";
import Button from "@material-ui/core/Button";
import EventForm from "../components/event/EventForm/Event-form";
import editEventFromParent, {
  setEventFromParentPending,
  setEventFromParentSuccess,
} from "../actions/event/event-copy-with-edit-action";
import validate from "./event-edit-validate-form ";
import validateEventForm from "./event-validate-form";
import getCategories from "../actions/category/category-list-action";

class EditFromParentEventWraper extends Component {
  componentWillMount = () => {
    this.props.getCategories();
  };

  componentDidUpdate = () => {
    if (
      !this.props.edit_event_from_parent_status.eventFromParentError &&
      this.props.editEventFromParent_status.isEventFromParentSuccess
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
      ...validateEventForm(valuesCopy),
      user_id: this.props.user_id,
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
          validate={validate}
          allCategories={this.props.all_categories}
          onSubmit={this.onSubmit}
          initialValues={initialValues}
          formValues={this.props.form_values}
          haveReccurentCheckBox={false}
          disabledDate
          eventId={this.props.event.id}
        >
          <div className="col">
            <Button className="border" fullWidth color="primary" type="submit">
              Publish
            </Button>
          </div>
          <div className="col">
            <Button
              className="border"
              fullWidth
              color="primary"
              onClick={this.props.onCancelEditing}
            >
              Cancel
            </Button>
          </div>
        </EventForm>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user_id: state.user.id,
  edit_event_from_parent_status: state.editEventFromParent,
  all_categories: state.categories,
  form_values: getFormValues("event-form")(state),
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
EditFromParentEventWraper.propTypes = {
  getCategories: PropTypes.func,
  edit_event_from_parent_status: PropTypes.object,
  reset: PropTypes.func,
  editEventFromParent: PropTypes.func,
  user_id: PropTypes.string,
  eventSchedule: PropTypes.object,
  event: PropTypes.object,
  all_categories: PropTypes.object,
  onCancelEditing: PropTypes.func,
  form_values: PropTypes.object,
  editEventFromParent_status: PropTypes.object,
};
EditFromParentEventWraper.defaultProps = {
  getCategories: () => {},
  edit_event_from_parent_status: () => {},
  reset: () => {},
  editEventFromParent: () => {},
  user_id: "",
  eventSchedule: {},
  event: {},
  all_categories: {},
  onCancelEditing: () => {},
  form_values: {},
  editEventFromParent_status: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditFromParentEventWraper);
