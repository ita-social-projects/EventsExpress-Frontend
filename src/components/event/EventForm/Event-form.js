import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import moment from "moment";
import "react-widgets/dist/css/react-widgets.css";
import momentLocaliser from "react-widgets-moment";
import propTypes from "prop-types";
import DropZoneField from "../../helpers/DropZoneField";
import PhotoService from "../../../services/PhotoService";
import periodicity from "../../../constants/PeriodicityConstants";
import {
  renderDatePicker,
  renderCheckbox,
  renderSelectField,
  renderTextField,
  renderTextArea,
  renderMultiselect,
  parseEuDate,
} from "../../helpers/form-helpers";
import "./event-form.css";
import asyncValidatePhoto from "../../../containers/async-validate-photo";
import ErrorMessages from "../../shared/errorMessage";
import Location from "../../location";
import eventStatusEnum from "../../../constants/eventStatusEnum";

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
  const periodicityListOptions = periodicity.map(item => (
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
            component={renderTextField}
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
            component={renderTextField}
            type="input"
            label="Title"
            inputProps={{ maxLength: 60 }}
          />
        </div>
        <div className="mt-2">
          <Field
            parse={Number}
            name="maxParticipants"
            component={renderTextField}
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
              component={renderCheckbox}
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
                component={renderSelectField}
                parse={Number}
              >
                {periodicityListOptions}
              </Field>
            </div>
            <div className="mt-2">
              <Field
                name="frequency"
                type="number"
                component={renderTextField}
                label="Frequency"
                parse={Number}
              />
            </div>
          </div>
        )}
        <div className="mt-2">
          <Field
            name="isPublic"
            component={renderCheckbox}
            type="checkbox"
            label="Public"
          />
        </div>
        {initialValues.eventStatus === eventStatusEnum.Draft && (
          <div className="mt-2">
            <Field
              name="isOnlyForAdults"
              component={renderCheckbox}
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
              component={renderDatePicker}
              parse={parseEuDate}
            />
          </span>
          {formValues?.dateFrom && (
            <span className="retreat">
              <Field
                name="dateTo"
                label="To"
                minValue={formValues.dateFrom}
                component={renderDatePicker}
                parse={parseEuDate}
              />
            </span>
          )}
        </div>
        <div className="mt-3">
          <Field
            name="description"
            component={renderTextArea}
            type="input"
            label="Description"
          />
        </div>
        <div className="mt-2">
          <Field
            name="categories"
            component={renderMultiselect}
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
