import React from "react";
import PropTypes from "prop-types";
import { AiFillDelete, AiFillEdit, AiOutlinePlus } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import Button from "../../shared/Button/Button";

const InventoryButtons = ({
  hasInventory,
  isOrganizator,
  isEdit,
  toggleIsEdit,
  handleOrganizatorInventoryDelete,
  handleUserInventoryDelete,
  handleCancelClick,
}) => {
  if (isEdit) {
    return (
      <>
        <Button content={<TiTick />} type="submit" />
        <Button content={<GiCrossMark />} onClick={handleCancelClick} />
      </>
    );
  }

  if (isOrganizator) {
    return (
      <>
        <Button content={<AiFillEdit />} onClick={toggleIsEdit} />
        <Button
          content={<AiFillDelete />}
          onClick={handleOrganizatorInventoryDelete}
        />
      </>
    );
  }
  // Member With Inventory
  if (hasInventory) {
    return (
      <>
        <Button content={<AiFillEdit />} onClick={toggleIsEdit} />
        <Button
          content={<AiFillDelete />}
          onClick={handleUserInventoryDelete}
        />
      </>
    );
  }
  return <Button content={<AiOutlinePlus />} onClick={toggleIsEdit} />;
};

InventoryButtons.propTypes = {
  hasInventory: PropTypes.bool,
  isOrganizator: PropTypes.bool,
  isEdit: PropTypes.bool,
  toggleIsEdit: PropTypes.func,
  handleOrganizatorInventoryDelete: PropTypes.func,
  handleUserInventoryDelete: PropTypes.func,
  handleCancelClick: PropTypes.func,
};

InventoryButtons.defaultProps = {
  hasInventory: false,
  isOrganizator: false,
  isEdit: false,
  toggleIsEdit: () => {},
  handleOrganizatorInventoryDelete: () => {},
  handleUserInventoryDelete: () => {},
  handleCancelClick: () => {},
};

export default InventoryButtons;
