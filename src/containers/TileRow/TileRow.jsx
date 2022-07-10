import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckboxList from "./CheckboxList";
import TileWrapper from "../TileContainer/TileContainer";
import "./TileRow.scss";
import {
  DEFAULT_TILE,
  TILE_CONDITION_VALUE,
  TILE_STEP,
} from "../../constants/tileConstants";

// TODO: check this component for correctness or redesign;
const TileRow = props => {
  const [currTileIndex, setCurrTileIndex] = useState(DEFAULT_TILE);

  const handleTileToggleAction = index => {
    if (index === currTileIndex) setCurrTileIndex(TILE_STEP);
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
      {currTileIndex >= TILE_CONDITION_VALUE && (
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
