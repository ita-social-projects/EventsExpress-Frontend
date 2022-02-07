import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import {
  renderDatePicker,
  MultiCheckbox,
  renderTextField,
  renderMultiselect,
  parseEuDate,
} from "../../helpers/form-helpers";
import filterHelper from "../../helpers/filterHelper";
import EventMapModal from "../MapModal/Map-modal";
import DisplayMap from "../map/display-map";
import eventStatusEnum from "../../../constants/eventStatusEnum";
import constants from "../../../constants/EventFilterConstants";
import "./event-filter.css";

const {
  RADIUS,
  RADIUS_KM,
  LOCATION,
  BUTTON_LESS,
  BUTTON_MORE_FILTERS,
  BUTTON_RESET,
  BUTTON_FAVORITE,
  BUTTON_SEARCH,
  OPTIONS_ACTIVE,
  OPTIONS_BLOCKED,
  OPTIONS_CANCELED,
} = constants;

class EventFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewMore: false,
      needInitializeValues: true,
    };
  }

  componentDidUpdate(prevProps) {
    const { initialValues } = this.props;

    if (
      !filterHelper.compareObjects(
        initialValues,
        prevProps.initialFormValues,
      ) ||
      this.state.needInitializeValues
    ) {
      this.props.initialize({
        ...initialValues,
        selectedPos: initialValues.selectedPos
          ? initialValues.selectedPos
          : { latitude: null, longitude: null },
      });
      this.setState({
        needInitializeValues: false,
      });
    }
  }

  handlerViewMore = () => this.setState(state => !state.viewMore);

  render() {
    const {
      allCategories,
      formValues,
      currentUser,
      handleSubmit,
      onReset,
      initialize,
      submitting,
      onLoadUserDefaults,
    } = this.props;
    const { viewMore } = this.state;

    const values = formValues || { selectedPos: {} };
    const options = [
      { value: eventStatusEnum.Active, text: OPTIONS_ACTIVE },
      { value: eventStatusEnum.Blocked, text: OPTIONS_BLOCKED },
      { value: eventStatusEnum.Canceled, text: OPTIONS_CANCELED },
    ];

    return (
      <div className="sidebar-filter">
        <form onSubmit={handleSubmit} className="box">
          <div className="form-group">
            <Field
              name="keyWord"
              component={renderTextField}
              type="input"
              label="Keyword"
            />
          </div>
          {viewMore && (
            <>
              <div className="form-group">
                <Field
                  name="dateFrom"
                  label="From"
                  minValue={new Date()}
                  component={renderDatePicker}
                  parse={parseEuDate}
                />
              </div>
              <div className="form-group">
                <Field
                  name="dateTo"
                  label="To"
                  minValue={new Date(values.dateFrom)}
                  component={renderDatePicker}
                  parse={parseEuDate}
                />
              </div>
              <div className="form-group">
                <Field
                  name="categories"
                  component={renderMultiselect}
                  data={allCategories.data}
                  valueField="id"
                  textField="name"
                  className="form-control mt-2"
                  placeholder="#hashtags"
                />
              </div>
              <div className="form-group">
                {currentUser.roles.includes("Admin") && (
                  <Field
                    name="statuses"
                    component={MultiCheckbox}
                    options={options}
                  />
                )}
              </div>
              <div>
                <EventMapModal
                  initialize={initialize}
                  values={values}
                  reset={onReset}
                />
              </div>
              <div className="d-flex">
                {values.selectedPos && values.selectedPos.latitude && (
                  <div className="mt-2">
                    <p>{`${RADIUS} ${values.radius} ${RADIUS_KM}`}</p>
                    <p>{LOCATION}</p>
                    <DisplayMap location={{ ...values.selectedPos }} />
                  </div>
                )}
              </div>
            </>
          )}
          <div>
            <Button
              key={viewMore}
              fullWidth
              color="secondary"
              onClick={this.handlerViewMore}
            >
              {viewMore ? BUTTON_LESS : BUTTON_MORE_FILTERS}
            </Button>
          </div>
          <div className="d-flex">
            <Button
              fullWidth
              color="primary"
              onClick={onReset}
              disabled={submitting}
            >
              {BUTTON_RESET}
            </Button>
            {currentUser.id && (
              <Button
                fullWidth
                color="primary"
                onClick={onLoadUserDefaults}
                disabled={submitting}
              >
                {BUTTON_FAVORITE}
              </Button>
            )}
            <Button
              fullWidth
              type="submit"
              color="primary"
              disabled={submitting}
            >
              {BUTTON_SEARCH}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

EventFilter.propTypes = {
  submitting: propTypes.bool,
  formValues: propTypes.object,
  initialFormValues: propTypes.object,
  initialValues: propTypes.object,
  currentUser: propTypes.object,
  allCategories: propTypes.object,
  initialize: propTypes.func,
  handleSubmit: propTypes.func,
  onReset: propTypes.func,
  onLoadUserDefaults: propTypes.func,
};

EventFilter.defaultProps = {
  submitting: false,
  formValues: {},
  initialFormValues: {},
  initialValues: {},
  currentUser: {},
  allCategories: {},
  initialize: () => {},
  handleSubmit: () => {},
  onReset: () => {},
  onLoadUserDefaults: () => {},
};

const FormEventFilter = reduxForm({
  form: "event-filter-form",
})(EventFilter);

export default FormEventFilter;
