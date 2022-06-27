import React from "react";
import PropTypes from "prop-types";
import UnitOfMeasuringItemWrapper from "../../containers/UnitsOfMeasuringContainer/UnitOfMeasuringItemContainer";
import { UNIT_LIST_FIELDS } from "../../constants/unitOfMeasuringConstatns";

const UnitOfMeasuringList = ({ dataList }) => {
  return (
    <>
      <tr className="font-weight-bold">
        <td width="20%">{UNIT_LIST_FIELDS.GROUP}</td>
        <td width="20%">{UNIT_LIST_FIELDS.NAME}</td>
        <td width="20%">{UNIT_LIST_FIELDS.SHORT_NAMR}</td>
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
