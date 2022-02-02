import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const VisitorSeeItem = ({
  item,
  disabledEdit,
  onWillNotTake,
  markItemAsEdit,
  usersInventories,
  user,
  showAlreadyGetDetailed,
  onAlreadyGet,
  alreadyGet,
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
                  <div key={data.id}>
                    {data.user.name}: {data.quantity};
                  </div>
                ) : null;
              })}

            {!showAlreadyGetDetailed && (
              <>{usersInventories.data.length === 0 ? 0 : alreadyGet}</>
            )}
          </div>
          <div className="col col-md-1 d-flex align-items-center">
            {usersInventories.data.find(
              e => e.userId === user.id && e.inventoryId === item.id,
            ) === undefined
              ? 0
              : usersInventories.data.find(
                  e => e.userId === user.id && e.inventoryId === item.id,
                ).quantity}
          </div>
          <div className="col col-md-2 d-flex align-items-center">
            {item.needQuantity}
          </div>
          <div className="col col-md-2 d-flex align-items-center">
            {item.unitOfMeasuring.shortName}
          </div>

          <div className="col col-md-2">
            {item.isTaken && (
              <>
                <IconButton disabled={disabledEdit} onClick={markItemAsEdit}>
                  <i className="fa-sm fas fa-pencil-alt text-warning" />
                </IconButton>
                <Tooltip title="Will not take" placement="right-start">
                  <IconButton
                    disabled={disabledEdit}
                    onClick={onWillNotTake(item)}
                  >
                    <i className="fa-sm fas fa-minus text-danger" />
                  </IconButton>
                </Tooltip>
              </>
            )}

            {!item.isTaken && item.needQuantity - alreadyGet > 0 && (
              <Tooltip title="Will take" placement="right-start">
                <IconButton disabled={disabledEdit} onClick={markItemAsEdit}>
                  <i className="fa-sm fas fa-plus text-success" />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </>
      )}
    </>
  );
};

VisitorSeeItem.defaultProps = {
  item: {},
  disabledEdit: () => {},
  user: {},
  usersInventories: [],
  onWillNotTake: () => {},
  markItemAsEdit: () => {},
  showAlreadyGetDetailed: () => {},
  onAlreadyGet: () => {},
  alreadyGet: () => {},
};

VisitorSeeItem.propTypes = {
  item: PropTypes.object,
  disabledEdit: PropTypes.func,
  user: PropTypes.object,
  usersInventories: PropTypes.array,
  onWillNotTake: PropTypes.func,
  markItemAsEdit: PropTypes.func,
  showAlreadyGetDetailed: PropTypes.func,
  onAlreadyGet: PropTypes.func,
  alreadyGet: PropTypes.func,
};

export default VisitorSeeItem;
