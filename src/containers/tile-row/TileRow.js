import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckboxList from "./CheckboxList";
import TileWrapper from "../../components/tile-wrapper/TileWrapper";
import "./TileRow.css";

const TileRow = props => {
  const [currTileIndex, setCurrTileIndex] = useState(-1);

  const handleTileToggleAction = index => {
    if (index === currTileIndex) setCurrTileIndex(-1);
    else setCurrTileIndex(index);
  };

  return (
    <div className="tile-row-wrapper">
      <div className="tile-row">
        {props.data.map((item, idx) => (
          <TileWrapper
            index={idx}
            handleTileToggleAction={handleTileToggleAction}
            key={item.group.id}
            value={item}
          />
        ))}
      </div>
      {currTileIndex >= 0 && (
        <CheckboxList
          index={currTileIndex}
          data={props.data[currTileIndex].categories}
        />
      )}
    </div>
  );
};

TileRow.propTypes = {
  data: PropTypes.array,
};
TileRow.defaultProps = {
  data: [],
};

export default TileRow;
