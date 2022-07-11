import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import FormInput from "../../../shared/FormInput/FormInput";
import InventoryButtons from "../InventoryButtons";

const MemberForm = ({
  handleSubmit,
  handleCancelClick,
  alreadyGet,
  myItemAmout,
  itemName,
  needQuantity,
  unitOfMeasuring,
  buttonsShow,
}) => {
  return (
    <form className="inventory-form member-form" onSubmit={handleSubmit}>
      <div className="inventory-field">{itemName}</div>
      <div className="inventory-field">{alreadyGet}</div>
      <Field
        placeholder={myItemAmout}
        name="willTake"
        type="number"
        component={FormInput}
      />
      <div className="inventory-field">{needQuantity}</div>
      <div className="inventory-field">{unitOfMeasuring?.shortName}</div>
      <div className="inventory-field">
        <InventoryButtons
          isEdit={buttonsShow}
          handleCancelClick={handleCancelClick}
        />
      </div>
    </form>
  );
};

MemberForm.propTypes = {
  buttonsShow: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleCancelClick: PropTypes.func,
  myItemAmout: PropTypes.number,
  alreadyGet: PropTypes.number,
  unitOfMeasuring: PropTypes.object,
  itemName: PropTypes.string,
  needQuantity: PropTypes.number,
};

MemberForm.defaultProps = {
  buttonsShow: true,
  handleSubmit: () => {},
  handleCancelClick: () => {},
  myItemAmout: [],
  alreadyGet: 0,
  unitOfMeasuring: {},
  itemName: "",
  needQuantity: 0,
};

export default reduxForm({ form: "inventory-member-form" })(MemberForm);
