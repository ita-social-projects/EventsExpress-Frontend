import React from "react";
import PropTypes from "prop-types";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { LIST_OF_INVENTORIES } from "../../../constants/inventoryConstatns";
import Button from "../../shared/Button/Button";
import "./InventoryHeader.scss";

const InventoryHeader = ({ isInventoryOpen, toggleInventoryOpen }) => (
  <div className="inventory-header">
    <h4 className="header-title">{LIST_OF_INVENTORIES}</h4>

    <Button
      className="close-btn"
      onClick={toggleInventoryOpen}
      content={isInventoryOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
    />
  </div>
);

InventoryHeader.defaultProps = {
  isInventoryOpen: false,
  toggleInventoryOpen: () => {},
};

InventoryHeader.propTypes = {
  isInventoryOpen: PropTypes.bool,
  toggleInventoryOpen: PropTypes.func,
};

export default InventoryHeader;
