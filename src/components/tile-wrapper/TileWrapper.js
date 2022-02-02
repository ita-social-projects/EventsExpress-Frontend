import React from "react";
import PropTypes from "prop-types";
import Tile from "../tile/Tile";
import "./TileWrapper.css";

const TileWrapper = ({ index, value, handleTileToggleAction }) => {
  const handleTile = () => {
    handleTileToggleAction(index);
  };

  return (
    <div className="tile-wrapper">
      <Tile
        groupId={value.group.id}
        categories={value.categories}
        handleTileToggleAction={handleTile}
      />
      <p className="tile-label">{value.group.title}</p>
    </div>
  );
};

TileWrapper.defaultProps = {
  index: null,
  handleTileToggleAction: () => {},
  value: {},
};

TileWrapper.propTypes = {
  index: PropTypes.number,
  handleTileToggleAction: PropTypes.func,
  value: PropTypes.object,
};

export default TileWrapper;
