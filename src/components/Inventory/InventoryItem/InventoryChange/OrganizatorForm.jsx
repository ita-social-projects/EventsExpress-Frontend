import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import FormInput from "../../../shared/FormInput/FormInput";
import FormSelect from "../../../shared/FormSelect/FormSelect";
import InventoryButtons from "../InventoryButtons";

const OrganizatorForm = ({
  handleSubmit,
  handleCancelClick,
  alreadyGet,
  unitsOfMeasuring,
  itemName,
  needQuantity,
  buttonsShow,
}) => {
  return (
    <form className="inventory-form" onSubmit={handleSubmit}>
      <Field
        name="itemName"
        type="text"
        placeholder={itemName}
        component={FormInput}
      />
      <div className="inventory-field">{alreadyGet}</div>
      <Field
        name="needQuantity"
        type="number"
        placeholder={needQuantity}
        component={FormInput}
      />
      <div className="inventory-field">
        <Field
          name="unitOfMeasuring.id"
          type="number"
          placeholder="-"
          component={FormSelect}
        >
          {unitsOfMeasuring.map(unit => (
            <option value={unit.id} key={unit.id}>
              {unit.unitName}
            </option>
          ))}
        </Field>
      </div>

      <div className="inventory-field">
        <InventoryButtons
          isEdit={buttonsShow}
          handleCancelClick={handleCancelClick}
        />
      </div>
    </form>
  );
};

OrganizatorForm.propTypes = {
  buttonsShow: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleCancelClick: PropTypes.func,
  unitsOfMeasuring: PropTypes.array,
  alreadyGet: PropTypes.number,
  itemName: PropTypes.string,
  needQuantity: PropTypes.number,
};

OrganizatorForm.defaultProps = {
  buttonsShow: true,
  handleSubmit: () => {},
  handleCancelClick: () => {},
  unitsOfMeasuring: [],
  alreadyGet: 0,
  itemName: "",
  needQuantity: 0,
};

export default reduxForm({
  form: "inventory-organizator-form",
})(OrganizatorForm);
