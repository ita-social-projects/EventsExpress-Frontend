import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import InventoryHeaderButton from "./InventoryHeaderButton";
import InventoryItemContainer from "../../containers/InventoryItemContainer/InventoryItemContainer";
import { INVENTORY_HEADER_COLS } from "../../constants/inventoryConstatns";
import { getUpdatedInventories, isUserEvent } from "../helpers/inventoryHelper";

const InventoryList = ({
  inventories,
  event,
  user,
  usersInventories,
  getInventories,
  eventId,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [disabledEdit, setDisabledEdit] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const isMyEvent = isUserEvent(event.organizers, user);
  const updateList = getUpdatedInventories(inventories, usersInventories, user);

  const addItemToList = () => {
    setDisabledEdit(true);
    setIsNew(true);
  };

  const handleOnClickCaret = () => {
    setIsOpen(!isOpen);
  };

  const changeDisableEdit = value => {
    if (!value) {
      setIsNew(false);
    }
    setDisabledEdit(value);
  };

  return (
    <>
      <InventoryHeaderButton
        isOpen={isOpen}
        handleOnClickCaret={handleOnClickCaret}
      />

      {isOpen && (
        <div>
          {isMyEvent && (
            <IconButton
              disabled={disabledEdit}
              onClick={addItemToList}
              size="small"
            >
              <span className="icon">
                <i className="fa-sm fas fa-plus"></i>
              </span>{" "}
              &nbsp;{" Add item"}
            </IconButton>
          )}
          <div className="container">
            <div className="row p-1">
              <div className="col col-md-3">
                <b>{INVENTORY_HEADER_COLS.ITEM_NAME}</b>
              </div>
              <div className="col">
                <b>{INVENTORY_HEADER_COLS.ALREADY_GET}</b>
              </div>
              {!isMyEvent && (
                <div className="col col-md-1">
                  <b>{INVENTORY_HEADER_COLS.WILL_TAKE}</b>
                </div>
              )}
              <div className="col col-md-2">
                <b>{INVENTORY_HEADER_COLS.COUNT}</b>
              </div>
              <div className="col col-md-2">
                <b>{INVENTORY_HEADER_COLS.UNITS}</b>
              </div>
              <div className="col col-md-2"></div>
            </div>
            {isNew && (
              <InventoryItemContainer
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
              />
            )}
            {updateList.map(item => {
              return (
                <InventoryItemContainer
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
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

InventoryList.defaultProps = {
  inventories: [],
  event: {},
  user: {},
  usersInventories: [],
  getInventories: [],
  eventId: null,
};

InventoryList.propTypes = {
  inventories: PropTypes.array,
  event: PropTypes.object,
  user: PropTypes.object,
  usersInventories: PropTypes.array,
  getInventories: PropTypes.array,
  eventId: PropTypes.number,
};

export default InventoryList;
