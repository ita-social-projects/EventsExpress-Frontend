import React from "react";
import PropTypes from "prop-types";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import TileRow from "../TileRow/TileRow";
import { TILE_ROW_STEP } from "../../constants/tileConstants";

// TODO Refactor
export const TileGroupContainer = props => {
  const renderRows = data => {
    const rows = [];
    for (let i = 0; i < data.length; i += TILE_ROW_STEP) {
      rows.push(<TileRow key={i} data={data.slice(i, i + TILE_ROW_STEP)} />);
    }

    return rows;
  };

  return (
    <div className="tile-group">
      <SpinnerContainer showContent={props.data !== null}>
        {renderRows(props.data)}
      </SpinnerContainer>
    </div>
  );
};

TileGroupContainer.defaultProps = {
  data: [],
};

TileGroupContainer.propTypes = {
  data: PropTypes.array,
};

export default TileGroupContainer;
