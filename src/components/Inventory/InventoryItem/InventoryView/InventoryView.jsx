import React from "react";
import PropTypes from "prop-types";
import InventoryButtons from "../InventoryButtons";
import { NO_TAKEN_ITEMS } from "../../../../constants/inventoryConstatns";

const InventoryView = ({
  isOrganizator,
  toggleIsEdit,
  item,
  handleInventoryItemDelete,
  deleteUserInventory,
  eventId,
  myItemAmout,
  userId,
  alreadyGet,
}) => {
  const handleOrganizatorInventoryDelete = () => {
    handleInventoryItemDelete(item.id, eventId);
  };

  const handleUserInventoryDelete = () => {
    deleteUserInventory({
      eventId,
      inventoryId: item.id,
      quantity: +myItemAmout,
      userId,
    });
  };

  return (
    <div className={`inventory-body-item ${!isOrganizator && "member-item"}`}>
      <div className="body-field">{item.itemName}</div>
      <div className="body-field">{alreadyGet}</div>
      {!isOrganizator && <div className="body-field">{myItemAmout}</div>}
      <div className="body-field">{item.needQuantity}</div>
      <div className="body-field">{item.unitOfMeasuring?.shortName}</div>
      <div className="body-field">
        <InventoryButtons
          hasInventory={myItemAmout !== NO_TAKEN_ITEMS}
          isOrganizator={isOrganizator}
          toggleIsEdit={toggleIsEdit}
          handleOrganizatorInventoryDelete={handleOrganizatorInventoryDelete}
          handleUserInventoryDelete={handleUserInventoryDelete}
        />
      </div>
    </div>
  );
};

InventoryView.propTypes = {
  isOrganizator: PropTypes.bool,
  userId: PropTypes.string,
  eventId: PropTypes.string,
  myItemAmout: PropTypes.number,
  alreadyGet: PropTypes.number,
  toggleIsEdit: PropTypes.func,
  deleteUserInventory: PropTypes.func,
  handleInventoryItemDelete: PropTypes.func,
  item: PropTypes.object,
};

InventoryView.defaultProps = {
  isOrganizator: false,
  userId: "",
  eventId: "",
  myItemAmout: 0,
  alreadyGet: 0,
  toggleIsEdit: () => {},
  handleInventoryItemDelete: () => {},
  deleteUserInventory: () => {},
  item: {},
};

export default InventoryView;
