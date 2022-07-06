// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import OwnerSeeItem from "./OwnerSeeItem";
// import OwnerEditItemForm from "./OwnerEditItem";
// import VisitorSeeItem from "./VisitorSeeItem";
// import VisitorEditItemForm from "./VisitorTakeItem";
// import { ZERO_AMOUNT } from "../../constants/numberConstants";
// import { calcAlreadyGet } from "../helpers/inventoryHelper";

// const InventoryItem = ({
//   isNew,
//   changeDisableEdit,
//   add,
//   eventId,
//   edit,
//   user,
//   wantToTakeHandle,
//   editUsersInventoryHandle,
//   delUsersInventory,
//   item,
//   usersInventories,
//   handleDelete,
//   isMyEvent,
//   disabledEdit,
//   unitOfMeasuringState,
// }) => {
//   const [showAlreadyGetDetailed, setShowAlreadyGetDetailed] = useState(false);
//   const [isEdit, setIsEdit] = useState(isNew);
//   const [isWillTake, setIsWillTake] = useState(false);

//   const onAlreadyGet = () => {
//     setShowAlreadyGetDetailed(true);
//     setIsWillTake(true);
//   };

//   useEffect(() => {
//     if (
//       !isWillTake &&
//       usersInventories.data.some(
//         e => e.userId === user.id && e.inventoryId === item.id,
//       )
//     ) {
//       onAlreadyGet();
//     }
//   }, [usersInventories]);

//   const onSubmit = values => {
//     setIsEdit(false);
//     changeDisableEdit(false);

//     if (!values.id) {
//       return add(values, eventId);
//     }

//     const value = values;
//     value.unitOfMeasuring = {
//       id: values.unitOfMeasuring.id,
//     };

//     return edit(values, eventId);
//   };

//   const onCancel = () => {
//     setIsEdit(false);
//     changeDisableEdit(false);
//   };

//   const onWillTake = inventar => {
//     const data = {
//       eventId,
//       userId: user.id,
//       inventoryId: inventar.id,
//       quantity: Number(inventar.willTake),
//     };

//     if (!isWillTake) {
//       onAlreadyGet();
//       wantToTakeHandle(data);
//     } else {
//       editUsersInventoryHandle(data);
//     }

//     setIsEdit(false);
//     changeDisableEdit(false);
//   };

//   const onWillNotTake = inventar => {
//     const data = {
//       eventId,
//       userId: user.id,
//       inventoryId: inventar.id,
//     };

//     setShowAlreadyGetDetailed(false);
//     setIsWillTake(false);
//     delUsersInventory(data);
//   };

//   const getItemsTakenByUserQuantity = () => {
//     const itemsQuantity = usersInventories.data.find(
//       e => e.userId === user.id && e.inventoryId === item.id,
//     );
//     return (!itemsQuantity && itemsQuantity.quantity) || ZERO_AMOUNT;
//   };

//   const markItemAsEdit = () => {
//     setIsEdit(true);
//     changeDisableEdit(true);
//   };

//   const deleteItemFromList = inventar => {
//     handleDelete(inventar.id, eventId);
//   };

//   const alreadyGet = calcAlreadyGet(usersInventories, item);

//   return (
//     <div className="row p-1 d-flex align-items-center" key={item.id}>
//       {isEdit && isMyEvent && (
//         <OwnerEditItemForm
//           onSubmit={onSubmit}
//           onCancel={onCancel}
//           unitOfMeasuringState={unitOfMeasuringState}
//           alreadyGet={alreadyGet}
//           initialValues={item}
//         />
//       )}

//       {isEdit && !isMyEvent && (
//         <VisitorEditItemForm
//           onSubmit={onWillTake}
//           onCancel={onCancel}
//           alreadyGet={alreadyGet - getItemsTakenByUserQuantity()}
//           initialValues={item}
//         />
//       )}

//       {!isEdit && isMyEvent && (
//         <OwnerSeeItem
//           item={item}
//           disabledEdit={disabledEdit}
//           showAlreadyGetDetailed={showAlreadyGetDetailed}
//           onAlreadyGet={onAlreadyGet}
//           markItemAsEdit={markItemAsEdit}
//           deleteItemFromList={deleteItemFromList}
//           usersInventories={usersInventories}
//         />
//       )}

//       {!isEdit && !isMyEvent && (
//         <VisitorSeeItem
//           item={item}
//           disabledEdit={disabledEdit}
//           showAlreadyGetDetailed={showAlreadyGetDetailed}
//           alreadyGet={alreadyGet}
//           onAlreadyGet={onAlreadyGet}
//           onWillNotTake={onWillNotTake}
//           markItemAsEdit={markItemAsEdit}
//           usersInventories={usersInventories}
//           user={user}
//         />
//       )}
//     </div>
//   );
// };

// InventoryItem.propTypes = {
//   isNew: PropTypes.bool,
//   isMyEvent: PropTypes.bool,
//   usersInventories: PropTypes.object,
//   user: PropTypes.object,
//   item: PropTypes.object,
//   changeDisableEdit: PropTypes.func,
//   add: PropTypes.func,
//   eventId: PropTypes.string,
//   edit: PropTypes.func,
//   wantToTakeHandle: PropTypes.func,
//   editUsersInventoryHandle: PropTypes.func,
//   delUsersInventory: PropTypes.func,
//   handleDelete: PropTypes.func,
//   disabledEdit: PropTypes.bool,
//   unitOfMeasuringState: PropTypes.object,
// };
// InventoryItem.defaultProps = {
//   isNew: false,
//   isMyEvent: false,
//   usersInventories: {},
//   delUsersInventory: () => {},
//   handleDelete: () => {},
//   user: {},
//   item: {},
//   changeDisableEdit: () => {},
//   add: () => {},
//   eventId: "",
//   edit: () => {},
//   wantToTakeHandle: () => {},
//   editUsersInventoryHandle: () => {},
//   disabledEdit: false,
//   unitOfMeasuringState: {},
// };

// export default InventoryItem;

import React from "react";
import PropTypes from "prop-types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Button from "../shared/Button/Button";

const InventoryItem = ({
  item: { id, itemName, needQuantity, unitOfMeasuring },
  handleInventoryItemDelete,
  eventId,
}) => {
  return (
    <div className="inventory-body-item">
      <div className="body-field">{itemName}</div>
      <div className="body-field">{0}</div>
      <div className="body-field">{needQuantity}</div>
      <div className="body-field">{unitOfMeasuring?.shortName}</div>
      <div className="body-field">
        <Button content={<AiFillEdit />} />
        <Button
          content={<AiFillDelete />}
          onClick={() => handleInventoryItemDelete(id, eventId)}
        />
      </div>
    </div>
  );
};

InventoryItem.propTypes = {
  item: PropTypes.object,
  handleInventoryItemDelete: PropTypes.func,
  eventId: PropTypes.string,
};

InventoryItem.defaultProps = {
  item: {},
  handleInventoryItemDelete: () => {},
  eventId: "",
};

export default InventoryItem;
