import React from "react";
import PropTypes from "prop-types";
import OrganizatorForm from "./OrganizatorForm";
import MemberForm from "./MemberForm";

const InventoryChange = ({
  eventId,
  userId,
  isOrganizator,
  isEdit,
  toggleIsEdit,
  isNew,
  toggleIsNew,
  editInventory,
  addInventory,
  editMemberInventory,
  unitsOfMeasuring,
  alreadyGet,
  wantToTakeHandle,
  myItemAmout,
  item: { id, itemName, needQuantity, unitOfMeasuring },
}) => {
  const onOrganizerSubmit = values => {
    if (isEdit) {
      editInventory(
        { id, itemName, needQuantity, unitOfMeasuring, ...values },
        eventId,
      );
      toggleIsEdit();
    }

    if (isNew) {
      addInventory(values, eventId);
      toggleIsNew();
    }
  };

  const onMemberSubmit = ({ willTake }) => {
    const data = {
      eventId,
      userId,
      inventoryId: id,
      quantity: +willTake,
    };
    if (myItemAmout === 0) {
      wantToTakeHandle(data);
    } else {
      editMemberInventory(data);
    }
    toggleIsEdit();
  };

  const handleCancelClick = () => {
    if (isNew) {
      toggleIsNew();
    } else if (isEdit) {
      toggleIsEdit();
    }
  };

  return isOrganizator ? (
    <OrganizatorForm
      onSubmit={onOrganizerSubmit}
      handleCancelClick={handleCancelClick}
      alreadyGet={alreadyGet}
      unitsOfMeasuring={unitsOfMeasuring}
      itemName={itemName}
      needQuantity={needQuantity}
      buttonsShow={isEdit || isNew}
    />
  ) : (
    <MemberForm
      onSubmit={onMemberSubmit}
      handleCancelClick={handleCancelClick}
      alreadyGet={alreadyGet}
      itemName={itemName}
      needQuantity={needQuantity}
      unitOfMeasuring={unitOfMeasuring}
      buttonsShow={isEdit || isNew}
    />
  );
};

InventoryChange.propTypes = {
  userId: PropTypes.string,
  eventId: PropTypes.string,
  isOrganizator: PropTypes.bool,
  isEdit: PropTypes.bool,
  toggleIsEdit: PropTypes.func,
  isNew: PropTypes.bool,
  toggleIsNew: PropTypes.func,
  editInventory: PropTypes.func,
  addInventory: PropTypes.func,
  editMemberInventory: PropTypes.func,
  unitsOfMeasuring: PropTypes.array,
  alreadyGet: PropTypes.number,
  item: PropTypes.object,
  wantToTakeHandle: PropTypes.func,
  myItemAmout: PropTypes.number,
};

InventoryChange.defaultProps = {
  userId: "",
  eventId: "",
  isOrganizator: false,
  isEdit: false,
  toggleIsEdit: () => {},
  isNew: false,
  toggleIsNew: () => {},
  editInventory: () => {},
  addInventory: () => {},
  wantToTakeHandle: () => {},
  editMemberInventory: () => {},
  unitsOfMeasuring: [],
  alreadyGet: 0,
  myItemAmout: 0,
  item: {},
};

export default InventoryChange;
