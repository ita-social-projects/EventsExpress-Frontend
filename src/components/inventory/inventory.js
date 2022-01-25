import React, { Component } from "react";
import { Field, FieldArray, getFormSyncErrors } from "redux-form";
import { connect } from "react-redux";
import { renderSelectField, renderTextField } from "../helpers/form-helpers";
import get_unitsOfMeasuring from "../../actions/unitOfMeasuring/unitsOfMeasuring-list-action";
import InventoryHeaderButton from "./InventoryHeaderButton";
import "./inventory.css";
import ErrorMessages from "../shared/errorMessage";

const renderInventories = ({ fields, unitOfMeasuringState }) => {
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
        Add item
      </button>
      <ul className="">
        {fields.map((item, index) => (
          <li className="" key={index}>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="p-2 bd-highlight align-self-end">
                <span>{index + 1}.</span>
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
                  <option></option>
                  {unitOfMeasuringState.units.map((unit, key) => (
                    <option value={unit.id} key={key}>
                      {unit.unitName}
                    </option>
                  ))}
                </Field>
              </div>
              {props.error && (
                <ErrorMessages error={props.error} className="text-center" />
              )}
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

class Inventory extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: true,
    };

    this.handleOnClickCaret = this.handleOnClickCaret.bind(this);
  }

  componentWillMount() {
    this.props.get_unitsOfMeasuring();
  }

  handleOnClickCaret() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-start align-items-center">
          <InventoryHeaderButton
            isOpen={this.state.isOpen}
            handleOnClickCaret={this.handleOnClickCaret}
          />
          {this.props.syncErrors.inventories && !this.state.isOpen && (
            <span className="text-danger">
              <i className="fas fa-exclamation-circle text-danger" />
              required
            </span>
          )}
        </div>
        <div className={this.state.isOpen ? "d-block" : "d-none"}>
          <FieldArray
            name="inventories"
            props={this.props}
            component={renderInventories}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  unitOfMeasuringState: state.unitsOfMeasuring,
  syncErrors: getFormSyncErrors("event-form")(state),
});

const mapDispatchToProps = dispatch => {
  return {
    get_unitsOfMeasuring: () => dispatch(get_unitsOfMeasuring()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
