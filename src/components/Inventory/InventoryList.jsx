import React, { useState } from "react";
import PropTypes from "prop-types";
import InventoryHeader from "./InventoryHeader/InventoryHeader";
import InventoryItemContainer from "../../containers/InventoryContainer/InventoryItemContainer";
import {
  ADD_INVENTORY_BTN,
  INVENTORY_ALREADY_GET,
  INVENTORY_COUNT,
  INVENTORY_ITEM_NAME,
  INVENTORY_UNITS,
  INVENTORY_EDIT,
  INVENTORY_WILL_TAKE,
} from "../../constants/inventoryConstatns";
import { getUpdatedInventories, isUserEvent } from "../helpers/inventoryHelper";
import Button from "../shared/Button/Button";
import "./InventoryList.scss";
import InventoryChangeContainer from "../../containers/InventoryContainer/InventoryChangeContainer";

const InventoryList = ({ inventories, event, user, usersInventories }) => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(true);
  const [isNew, setIsNew] = useState(false);
  const isOrganizator = isUserEvent(event.organizers, user);
  const inventoriesList = getUpdatedInventories(
    inventories,
    usersInventories,
    user,
  );

  const toggleIsNew = () => {
    setIsNew(!isNew);
  };

  const toggleInventoryOpen = () => {
    setIsInventoryOpen(!isInventoryOpen);
  };

  return (
    <div className="inventory">
      <InventoryHeader
        isInventoryOpen={isInventoryOpen}
        toggleInventoryOpen={toggleInventoryOpen}
      />

      {isInventoryOpen && (
        <>
          {isOrganizator && (
            <Button
              onClick={toggleIsNew}
              className="add-inventory-btn"
              content={ADD_INVENTORY_BTN}
              disabled={isNew}
            />
          )}
          <div className="inventory-list">
            <div
              className={`inventory-list-header ${
                !isOrganizator && "member-item"
              }`}
            >
              <div className="inventory-header-item">{INVENTORY_ITEM_NAME}</div>
              <div className="inventory-header-item">
                {INVENTORY_ALREADY_GET}
              </div>
              {!isOrganizator && (
                <div className="inventory-header-item">
                  {INVENTORY_WILL_TAKE}
                </div>
              )}
              <div className="inventory-header-item">{INVENTORY_COUNT}</div>
              <div className="inventory-header-item">{INVENTORY_UNITS}</div>
              <div className="inventory-header-item">{INVENTORY_EDIT}</div>
            </div>
            <div className="inventory-body">
              {isNew && (
                <InventoryChangeContainer
                  userId={user.id}
                  isOrganizator={isOrganizator}
                  isNew={isNew}
                  toggleIsNew={toggleIsNew}
                />
              )}
              {inventoriesList.map(item => (
                <InventoryItemContainer
                  key={item.id}
                  item={item}
                  isOrganizator={isOrganizator}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

InventoryList.defaultProps = {
  inventories: [],
  event: {},
  user: {},
  usersInventories: [],
};

InventoryList.propTypes = {
  inventories: PropTypes.array,
  event: PropTypes.object,
  user: PropTypes.object,
  usersInventories: PropTypes.array,
};

export default InventoryList;
