import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

const OwnerSeeItem = ({
  item,
  disabledEdit,
  onAlreadyGet,
  markItemAsEdit,
  deleteItemFromList,
  usersInventories,
  showAlreadyGetDetailed,
}) => {
  return (
    <>
      {!item.isEdit && (
        <>
          <div className="col col-md-3 d-flex align-items-center">
            <span
              className="item"
              onClick={() => onAlreadyGet(item)}
              onKeyPress={onAlreadyGet(item)}
              role="button"
              tabIndex="0"
            >
              {item.itemName}
            </span>
          </div>
          <div className="col align-items-center" key={item.id}>
            {showAlreadyGetDetailed &&
              usersInventories.data.map(data => {
                return data.inventoryId === item.id ? (
                  <div key={data.inventoryId}>
                    {data.user.name}: {data.quantity};
                  </div>
                ) : null;
              })}

            {!showAlreadyGetDetailed && (
              <>
                {usersInventories.data.length === 0
                  ? 0
                  : usersInventories.data.reduce((acc, cur) => {
                      return cur.inventoryId === item.id
                        ? acc + cur.quantity
                        : acc + 0;
                    }, 0)}
              </>
            )}
          </div>
          <div className="col col-md-2 d-flex align-items-center">
            {item.needQuantity}
          </div>
          <div className="col col-md-2 d-flex align-items-center">
            {item.unitOfMeasuring.shortName}
          </div>
          <div className="col col-md-2 d-flex align-items-center">
            <IconButton disabled={disabledEdit} onClick={markItemAsEdit}>
              <i className="fa-sm fas fa-pencil-alt text-warning" />
            </IconButton>
            <IconButton
              disabled={disabledEdit}
              onClick={deleteItemFromList(item)}
            >
              <i className="fa-sm fas fa-trash text-danger" />
            </IconButton>
          </div>
        </>
      )}
    </>
  );
};

OwnerSeeItem.defaultProps = {
  item: {},
  disabledEdit: () => {},
  onAlreadyGet: [],
  markItemAsEdit: () => {},
  deleteItemFromList: () => {},
  usersInventories: [],
  showAlreadyGetDetailed: false,
};

OwnerSeeItem.propTypes = {
  item: PropTypes.object,
  disabledEdit: PropTypes.func,
  onAlreadyGet: PropTypes.array,
  markItemAsEdit: PropTypes.func,
  deleteItemFromList: PropTypes.func,
  usersInventories: PropTypes.array,
  showAlreadyGetDetailed: PropTypes.bool,
};

export default OwnerSeeItem;
