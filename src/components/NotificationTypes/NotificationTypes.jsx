import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import momentLocaliser from "react-widgets-moment";
import moment from "moment";
import propTypes from "prop-types";
import CheckboxGroup from "./CheckboxGroup";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import { BUTTON_NAMES } from "../../constants/buttonConsts";

momentLocaliser(moment);

// TODO: to function
class SelectNotificationTypes extends Component {
  componentDidMount() {
    this.props.initialize({
      notificationTypes: this.props.initialValues.notificationTypes,
    });
  }

  render() {
    const { handleSubmit, submitting, items, error } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field
            name="notificationTypes"
            component={CheckboxGroup}
            options={items}
          />

          {error && <ErrorMessages error={error} className="text-center" />}

          <div>
            <Button type="submit" color="primary" disabled={submitting}>
              {BUTTON_NAMES.SAVE}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

SelectNotificationTypes.propTypes = {
  initialize: propTypes.func,
  initialValues: propTypes.object,
  handleSubmit: propTypes.func,
  submitting: propTypes.bool,
  items: propTypes.array,
  error: propTypes.string,
};

SelectNotificationTypes.defaultProps = {
  initialize: () => {},
  initialValues: {},
  handleSubmit: () => {},
  submitting: false,
  items: [],
  error: "",
};

export default reduxForm({
  form: "SelectNotificationType",
  enableReinitialize: true,
})(SelectNotificationTypes);
