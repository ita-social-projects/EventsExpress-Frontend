import React from "react";
import PropTypes from "prop-types";
import Tile from "../../components/Tile/Tile";
import "./TileContainer.scss";

const TileContainer = ({ index, value, handleTileToggleAction }) => {
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

TileContainer.defaultProps = {
  index: null,
  handleTileToggleAction: () => {},
  value: {},
};

TileContainer.propTypes = {
  index: PropTypes.number,
  handleTileToggleAction: PropTypes.func,
  value: PropTypes.object,
};

export default TileContainer;
