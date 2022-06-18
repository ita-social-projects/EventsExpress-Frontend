import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import moment from "moment";
import "react-widgets/dist/css/react-widgets.css";
import momentLocaliser from "react-widgets-moment";
import propTypes from "prop-types";
import DropZoneField from "../../DropZoneField/DropZoneField";
import PhotoService from "../../../services/PhotoService";
import { PERIODICITY } from "../../../constants/peridiocitConstants";
import parseEuDate from "../../../helpers/parseEuDate";

import DatePickerFirst from "../../shared/DatePickerFirst/DatePickerFirst";
import SelectFeld from "../../shared/SelectField/SelectField";
import CheckBox from "../../shared/CheckBox/CheckBox";
import MultiSelectField from "../../shared/MultiSelectField/MultiSelectField";
import TextArea from "../../shared/TextArea/TextArea";
import TextField from "../../shared/TextField/TextField";

import "./EventForm.scss";
import asyncValidatePhoto from "../../../helpers/asyncValidatePhoto";
import Location from "../../Location/Location";
import { EVENT_STATUS_ENUM } from "../../../constants/eventConstants";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";

momentLocaliser(moment);

const photoService = new PhotoService();

const EventForm = ({
  initialValues,
  formValues,
  allCategories,
  userName,
  error,
  eventId,
  haveReccurentCheckBox,
  children,
  handleSubmit,
  onSubmit,
}) => {
  const [checked, isChecked] = useState(false);
  const periodicityListOptions = PERIODICITY.map(item => (
    <option value={item.value} key={item.value}>
      {" "}
      {item.label}{" "}
    </option>
  ));

  isChecked(initialValues.isReccurent);

  const handleChange = () => {
    isChecked(!checked);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      autoComplete="off"
    >
      <div className="text text-2 pt-md-2">
        <Field
          id="image-field"
          name="photo"
          component={DropZoneField}
          type="file"
          crop
          cropShape="rect"
          loadImage={() => photoService.getFullEventPhoto(eventId)}
        />
        <div className="mt-2">
          <Field
            name="organizer"
            component={TextField}
            type="input"
            label="Organizer"
            InputLabelProps={{ shrink: true }}
            inputProps={{ value: userName }}
            readOnly
          />
        </div>
        <div className="mt-2">
          <Field
            name="title"
            component={TextField}
            type="input"
            label="Title"
            inputProps={{ maxLength: 60 }}
          />
        </div>
        <div className="mt-2">
          <Field
            parse={Number}
            name="maxParticipants"
            component={TextField}
            type="number"
            label="Max Count Of Participants"
          />
        </div>
        {haveReccurentCheckBox && (
          <div className="mt-2">
            <Field
              type="checkbox"
              label="Recurrent Event"
              name="isReccurent"
              component={CheckBox}
              checked={checked}
              onChange={handleChange}
            />
          </div>
        )}
        {haveReccurentCheckBox && checked && (
          <div>
            <div className="mt-2">
              <Field
                minWidth={200}
                name="periodicity"
                text="Periodicity"
                component={SelectFeld}
                parse={Number}
              >
                {periodicityListOptions}
              </Field>
            </div>
            <div className="mt-2">
              <Field
                name="frequency"
                type="number"
                component={TextField}
                label="Frequency"
                parse={Number}
              />
            </div>
          </div>
        )}
        <div className="mt-2">
          <Field
            name="isPublic"
            component={CheckBox}
            type="checkbox"
            label="Public"
          />
        </div>
        {initialValues.eventStatus === EVENT_STATUS_ENUM.DRAFT && (
          <div className="mt-2">
            <Field
              name="isOnlyForAdults"
              component={CheckBox}
              type="checkbox"
              label="Only adults"
            />
          </div>
        )}
        <div className="meta-wrap">
          <span>
            <Field
              name="dateFrom"
              label="From"
              minValue={moment(new Date())}
              component={DatePickerFirst}
              parse={parseEuDate}
            />
          </span>
          {formValues?.dateFrom && (
            <span className="retreat">
              <Field
                name="dateTo"
                label="To"
                minValue={formValues.dateFrom}
                component={DatePickerFirst}
                parse={parseEuDate}
              />
            </span>
          )}
        </div>
        <div className="mt-3">
          <Field
            name="description"
            component={TextArea}
            type="input"
            label="Description"
          />
        </div>
        <div className="mt-2">
          <Field
            name="categories"
            component={MultiSelectField}
            data={allCategories.data}
            valueField="id"
            textField="name"
            className="form-control"
            placeholder="#hashtags"
          />
        </div>
        <Field name="location" component={Location} />
      </div>
      <div className="row my-4">
        {error && <ErrorMessages error={error} className="text-center" />}
      </div>
      <div className="row my-4">{children}</div>
    </form>
  );
};

// TODO: Check props haveReccurentCheckBox and children
EventForm.propTypes = {
  onSubmit: propTypes.func,
  handleSubmit: propTypes.func,
  error: propTypes.string,
  eventId: propTypes.number,
  userName: propTypes.string,
  allCategories: propTypes.object,
  formValues: propTypes.object,
  haveReccurentCheckBox: propTypes.bool,
  initialValues: propTypes.object,
  children: propTypes.any,
};

EventForm.defaultProps = {
  onSubmit: () => {},
  handleSubmit: () => {},
  error: "",
  eventId: null,
  userName: "",
  allCategories: {},
  formValues: {},
  haveReccurentCheckBox: false,
  initialValues: {},
  children: "something",
};

export default reduxForm({
  form: "event-form",
  enableReinitialize: true,
  touchOnChange: true,
  asyncValidate: asyncValidatePhoto,
  asyncChangeFields: ["photo"],
})(EventForm);
