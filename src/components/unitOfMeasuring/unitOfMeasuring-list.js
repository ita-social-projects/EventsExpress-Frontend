import React from "react";
import PropTypes from "prop-types";
import UnitOfMeasuringItemWrapper from "../../containers/unitsOfMeasuring/unitOfMeasuring-item";

const UnitOfMeasuringList = ({ dataList }) => {
  return (
    <>
      <tr className="font-weight-bold">
        <td width="20%">Group</td>
        <td width="20%">Unit name</td>
        <td width="20%">Short name</td>
        <td width="45%" colSpan="3"></td>
      </tr>
      {dataList.map(item => (
        <UnitOfMeasuringItemWrapper key={item.id} item={item} />
      ))}
    </>
  );
};

UnitOfMeasuringList.defaultProps = {
  dataList: [],
};

UnitOfMeasuringList.propTypes = {
  dataList: PropTypes.array,
};

export default UnitOfMeasuringList;
