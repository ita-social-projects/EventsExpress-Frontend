/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import PropTypes from "prop-types";
import InventoryHeader from "../InventoryHeader/InventoryHeader";
import InventoryItemContainer from "../../../containers/InventoryItemContainer/InventoryItemContainer";
import {
  ADD_INVENTORY_BTN,
  INVENTORY_ALREADY_GET,
  INVENTORY_COUNT,
  INVENTORY_ITEM_NAME,
  INVENTORY_UNITS,
  INVENTORY_EDIT,
} from "../../../constants/inventoryConstatns";
import {
  getUpdatedInventories,
  isUserEvent,
} from "../../helpers/inventoryHelper";
import Button from "../../shared/Button/Button";
import AddInventoryContainer from "../../../containers/AddInventoryContainer/AddInventoryContainer";
import "./InventoryList.scss";

const InventoryList = ({
  inventories,
  event,
  user,
  usersInventories,
  // getInventories,
  eventId,
}) => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(true);
  const [isNew, setIsNew] = useState(false);

  const isMyEvent = isUserEvent(event.organizers, user);
  const inventoriesList = getUpdatedInventories(
    inventories,
    usersInventories,
    user,
  );

  const addItemToList = () => {
    setIsNew(!isNew);
  };

  const toggleInventoryOpen = () => {
    setIsInventoryOpen(!isInventoryOpen);
  };

  // const changeDisableEdit = value => {
  //   if (!value) {
  //     setIsNew(false);
  //   }
  //   setDisabledEdit(value);
  // };
  const cancelAddInvenory = () => {
    setIsNew(false);
  };

  return (
    <div className="inventory">
      <InventoryHeader
        isInventoryOpen={isInventoryOpen}
        toggleInventoryOpen={toggleInventoryOpen}
      />

      {isInventoryOpen && (
        <>
          {isMyEvent && (
            <Button
              onClick={addItemToList}
              className="add-inventory-btn"
              content={ADD_INVENTORY_BTN}
              disabled={isNew}
            />
          )}
          <div className="inventory-list">
            <div className="inventory-list-header">
              <div className="inventory-header-item">{INVENTORY_ITEM_NAME}</div>
              <div className="inventory-header-item">
                {INVENTORY_ALREADY_GET}
              </div>
              <div className="inventory-header-item">{INVENTORY_COUNT}</div>
              <div className="inventory-header-item">{INVENTORY_UNITS}</div>
              <div className="inventory-header-item">{INVENTORY_EDIT}</div>
            </div>
            <div className="inventory-body">
              {isNew && (
                <AddInventoryContainer
                  eventId={eventId}
                  cancelAddInvenory={cancelAddInvenory}
                />
              )}
              {inventoriesList.map(item => (
                <InventoryItemContainer
                  eventId={eventId}
                  key={item}
                  item={item}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

{
  /* <InventoryItemContainer
item={{
  itemName: "",
  needQuantity: 0,
  unitOfMeasuring: {},
}}
user={user}
usersInventories={usersInventories}
inventories={inventories}
isMyEvent={isMyEvent}
disabledEdit={disabledEdit}
changeDisableEdit={changeDisableEdit}
getInventories={getInventories}
eventId={eventId}
isNew
/> */
}

{
  /* <InventoryItemContainer
                    item={item}
                    user={user}
                    usersInventories={usersInventories}
                    inventories={inventories}
                    isMyEvent={isMyEvent}
                    disabledEdit={disabledEdit}
                    changeDisableEdit={changeDisableEdit}
                    getInventories={getInventories}
                    eventId={eventId}
                    key={item.id}
                  /> */
}

InventoryList.defaultProps = {
  inventories: [],
  event: {},
  user: {},
  usersInventories: [],
  // getInventories: [],
  eventId: null,
};

InventoryList.propTypes = {
  inventories: PropTypes.array,
  event: PropTypes.object,
  user: PropTypes.object,
  usersInventories: PropTypes.array,
  // getInventories: PropTypes.array,
  eventId: PropTypes.number,
};

export default InventoryList;
