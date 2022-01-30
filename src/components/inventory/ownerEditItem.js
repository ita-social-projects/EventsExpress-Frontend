import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import IconButton from "@material-ui/core/IconButton";
import { renderSelectField, renderTextField } from "../helpers/form-helpers";
import ErrorMessages from "../shared/errorMessage";
import validate from "./inventory-form-validator";

const OwnerEditItemForm = ({
  initialValues,
  unitOfMeasuringState,
  alreadyGet,
  error,
  onSubmit,
  onCancel,
}) => {
  return (
    <form onSubmit={onSubmit} className="form-inline w-100">
      <div className="col col-md-3 d-flex align-items-center">
        <Field
          name="itemName"
          type="text"
          fullWidth={false}
          label="Item name"
          component={renderTextField}
        />
      </div>
      <div className="col">{alreadyGet}</div>
      <div className="col col-md-2 d-flex align-items-center">
        <Field
          name="needQuantity"
          type="number"
          fullWidth={false}
          label="Item count"
          component={renderTextField}
        />
      </div>
      <div className="col col-md-2 d-flex align-items-center ">
        <Field
          name="unitOfMeasuring.id"
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
      <div className="col col-md-2 d-flex align-items-center">
        <IconButton type="submit">
          <i className="fa-sm fas fa-check text-success"></i>
        </IconButton>
        <IconButton onClick={() => onCancel(initialValues)}>
          <i className="fa-sm fas fa-times text-danger"></i>
        </IconButton>
      </div>
    </form>
  );
};

OwnerEditItemForm.defaultProps = {
  initialValues: {},
  unitOfMeasuringState: [],
  alreadyGet: [],
  error: "",
  onSubmit: () => {},
  onCancel: () => {},
};

OwnerEditItemForm.propTypes = {
  initialValues: PropTypes.object,
  unitOfMeasuringState: PropTypes.array,
  alreadyGet: PropTypes.array,
  error: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default reduxForm({
  form: "item-form",
  validate,
  enableReinitialize: true,
})(OwnerEditItemForm);
