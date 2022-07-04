import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Field, FieldArray } from "redux-form";
import { renderSelectField, renderTextField } from "../helpers/form-helpers";
import InventoryHeaderButton from "./InventoryHeaderButton";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import { REQUIRED_LABEL } from "../../constants/labelConstants";
import "./Inventory.scss";

const renderInventories = props => {
  const { fields, unitOfMeasuringState, error } = props;
  return (
    <div className="form-group">
      <button
        type="button"
        title="Remove item"
        className="btn btn-secondary btn-icon"
        onClick={() => fields.push({})}
      >
        <span className="icon">
          <i className="fas fa-plus" />
        </span>{" "}
        {"Add item"}
      </button>
      <ul className="">
        {fields.map((item, index) => (
          <li className="" key={item.id}>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="p-2 bd-highlight align-self-end">
                <span>{index + 1}</span>
              </div>
              <div className="p-2 bd-highlight">
                <Field
                  name={`${item}.itemName`}
                  type="text"
                  fullWidth={false}
                  label="Item name"
                  component={renderTextField}
                />
              </div>
              <div className="p-2 bd-highlight">
                <Field
                  name={`${item}.needQuantity`}
                  type="number"
                  fullWidth={false}
                  label="count"
                  component={renderTextField}
                />
              </div>
              <div className="p-2 bd-highlight">
                <Field
                  className="selectpicker"
                  name={`${item}.unitOfMeasuring.id`}
                  minWidth={100}
                  component={renderSelectField}
                >
                  {unitOfMeasuringState.units.map(unit => (
                    <option value={unit.id} key={unit.id}>
                      {unit.unitName}
                    </option>
                  ))}
                </Field>
              </div>
              {error && <ErrorMessages error={error} className="text-center" />}
              <button
                type="button"
                title="Remove item"
                className="p-2 btn btn-circle clear-backgroud align-self-end"
                onClick={() => fields.remove(index)}
              >
                <i className="fas fa-trash text-danger" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Inventory = props => {
  const { getUnitsOfMeasuring, syncErrors } = props;
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    getUnitsOfMeasuring();
  }, []);

  const handleOnClickCaret = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="d-flex justify-content-start align-items-center">
        <InventoryHeaderButton
          isOpen={isOpen}
          handleOnClickCaret={handleOnClickCaret}
        />
        {syncErrors.inventories && !isOpen && (
          <span className="text-danger">
            <i className="fas fa-exclamation-circle text-danger" />
            {REQUIRED_LABEL}
          </span>
        )}
      </div>
      <div className={isOpen ? "d-block" : "d-none"}>
        <FieldArray
          name="inventories"
          props={props}
          component={renderInventories}
        />
      </div>
    </div>
  );
};

Inventory.defaultProps = {
  syncErrors: "",
  getUnitsOfMeasuring: () => {},
};

Inventory.propTypes = {
  syncErrors: PropTypes.string,
  getUnitsOfMeasuring: PropTypes.func,
};

export default Inventory;
