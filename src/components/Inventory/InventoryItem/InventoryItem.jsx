import React, { useState } from "react";
import PropTypes from "prop-types";
import InventoryChangeContainer from "../../../containers/InventoryContainer/InventoryChangeContainer";
import InventoryViewContainer from "../../../containers/InventoryContainer/InventoryViewContainer";
import {
  calcAlreadyGet,
  calculateMyItemAmout,
} from "../../helpers/inventoryHelper";

const InventoryItem = ({ user, usersInventories, item, isOrganizator }) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const alreadyGet = calcAlreadyGet(usersInventories, item);
  const myItemAmout = calculateMyItemAmout(usersInventories, user, item);

  return isEdit ? (
    <InventoryChangeContainer
      isEdit={isEdit}
      item={item}
      toggleIsEdit={toggleIsEdit}
      isOrganizator={isOrganizator}
      alreadyGet={alreadyGet}
      myItemAmout={myItemAmout}
    />
  ) : (
    <InventoryViewContainer
      item={item}
      toggleIsEdit={toggleIsEdit}
      myItemAmout={myItemAmout}
      isOrganizator={isOrganizator}
      alreadyGet={alreadyGet}
    />
  );
};

InventoryItem.propTypes = {
  usersInventories: PropTypes.array,
  item: PropTypes.object,
  isOrganizator: PropTypes.bool,
  user: PropTypes.object,
};

InventoryItem.defaultProps = {
  usersInventories: [],
  item: {},
  isOrganizator: false,
  user: {},
};

export default InventoryItem;
