import React, { useEffect, useState } from "react";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import MultiCheckbox from "../../helpers/form-helpers/MultiCheckbox";
import RenderDatePicker from "../../helpers/form-helpers/render-date-pickerV2";
import RenderTextField from "../../helpers/form-helpers/render-text-field";
import RenderMultiselectField from "../../helpers/form-helpers/render-multiselect-field";
import parseEuDate from "../../helpers/form-helpers/parseEuDate";
import EventMapModal from "../MapModal/MapModal";
import DisplayMap from "../Map/DisplayMap";
import {
  EVENTS_FILTER,
  EVENT_STATUS_ENUM,
} from "../../../constants/eventConstants";
import { compareObjects } from "../../helpers/filterHelper/filterHelper";
import "./EventFilter.scss";

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
} = EVENTS_FILTER;

const EventFilter = ({
  submitting,
  formValues,
  initialFormValues,
  initialValues,
  currentUser,
  allCategories,
  initialize,
  handleSubmit,
  onReset,
  onLoadUserDefaults,
}) => {
  const [viewMore, setViewMore] = useState(false);
  const [needInitializeValues, setInitializeValues] = useState(false);

  useEffect(() => {
    if (
      !compareObjects(initialValues, initialFormValues) ||
      needInitializeValues
    ) {
      initialize({
        ...initialValues,
        selectedPos: initialValues.selectedPos
          ? initialValues.selectedPos
          : { latitude: null, longitude: null },
      });
      setInitializeValues(false);
    }
  }, [initialFormValues]);

  const handlerViewMore = () => setViewMore(!viewMore);

  const values = formValues || { selectedPos: {} };
  const options = [
    { value: EVENT_STATUS_ENUM.ACTIVE, text: OPTIONS_ACTIVE },
    { value: EVENT_STATUS_ENUM.BLOCKED, text: OPTIONS_BLOCKED },
    { value: EVENT_STATUS_ENUM.CANCELED, text: OPTIONS_CANCELED },
  ];

  return (
    <div className="sidebar-filter">
      <form onSubmit={handleSubmit} className="box">
        <div className="form-group">
          <Field
            name="keyWord"
            component={RenderTextField}
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
                component={RenderDatePicker}
                parse={parseEuDate}
              />
            </div>
            <div className="form-group">
              <Field
                name="dateTo"
                label="To"
                minValue={new Date(values.dateFrom)}
                component={RenderDatePicker}
                parse={parseEuDate}
              />
            </div>
            <div className="form-group">
              <Field
                name="categories"
                component={RenderMultiselectField}
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
            onClick={handlerViewMore}
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
          <Button fullWidth type="submit" color="primary" disabled={submitting}>
            {BUTTON_SEARCH}
          </Button>
        </div>
      </form>
    </div>
  );
};

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
