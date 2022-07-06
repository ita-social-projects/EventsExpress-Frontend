import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Button from "../../shared/Button/Button";
import FormInput from "../../shared/FormInput/FormInput";
import FormSelect from "../../shared/FormSelect/FormSelect";
import "./AddInventory.scss";

const AddInventory = ({
  handleSubmit,
  units,
  addInventory,
  eventId,
  cancelAddInvenory,
  alreadyGet,
}) => {
  const onSubmit = values => {
    addInventory(values, eventId);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-inventory-form">
      <Field
        name="itemName"
        type="text"
        placeholder="Name"
        component={FormInput}
      />
      <div className="inventory-field">{alreadyGet}</div>
      <Field
        name="needQuantity"
        type="number"
        placeholder="0"
        component={FormInput}
      />
      <Field
        name="unitOfMeasuring.id"
        type="number"
        placeholder="-"
        component={FormSelect}
      >
        {units.map(({ id, unitName }) => (
          <option value={id} key={id}>
            {unitName}
          </option>
        ))}
      </Field>
      <div className="inventory-field">
        <Button content={<i className="fa-sm fas fa-check" />} type="submit" />
        <Button
          content={<i className="fa-sm fas fa-times" />}
          onClick={cancelAddInvenory}
        />
      </div>
    </form>
  );
};

AddInventory.propTypes = {
  units: PropTypes.array,
  handleSubmit: PropTypes.func,
  addInventory: PropTypes.func,
  eventId: PropTypes.string,
  cancelAddInvenory: PropTypes.func,
  alreadyGet: PropTypes.number,
};

AddInventory.defaultProps = {
  units: [],
  handleSubmit: () => {},
  addInventory: () => {},
  eventId: "",
  cancelAddInvenory: () => {},
  alreadyGet: 0,
};

export default reduxForm({ form: "add-inventory-form" })(AddInventory);
