import React from "react";
import PropTypes from "prop-types";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import TileRow from "../TileRow/TileRow";

// TODO Refactor
export const TileGroupContainer = props => {
  const renderRows = data => {
    const rows = [];
    for (let i = 0; i < data.length; i += 3) {
      rows.push(<TileRow key={i} data={data.slice(i, i + 3)} />);
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
