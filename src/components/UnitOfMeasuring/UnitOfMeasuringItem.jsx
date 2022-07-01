import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

const UnitOfMeasuringItem = ({ item, callback }) => {
  const { shortName, unitName, category, id } = item;
  return (
    <>
      <td>
        <i className="mr-1" />
        {category.categoryName}
      </td>
      <td>
        <i className="fas fa-hashtag mr-1" />
        {unitName}
      </td>
      <td className="d-flex align-items-center justify-content-left">
        {shortName}
      </td>
      <td className="align-middle align-items-stretch">
        <div className="d-flex align-items-center justify-content-center">
          <IconButton
            className="text-info"
            size="small"
            onClick={() => callback(id)}
          >
            <i className="fas fa-edit" />
          </IconButton>
        </div>
      </td>
    </>
  );
};

UnitOfMeasuringItem.defaultProps = {
  item: {},
  callback: () => {},
};

UnitOfMeasuringItem.propTypes = {
  item: PropTypes.object,
  callback: PropTypes.func,
};

export default UnitOfMeasuringItem;
