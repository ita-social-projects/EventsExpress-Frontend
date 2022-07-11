import React from "react";
import { Map, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import "../../../Event/Map/Map.scss";

const LocationMap = ({ meta, location, onUpdate, children }) => {
  let map = React.createRef();
  const { error, touched, invalid } = meta;

  const updateLocation = latlng => {
    onUpdate(latlng);
  };

  const handleClick = e => {
    updateLocation(e.latlng);
  };

  const getCurrentZoom = () => {
    const defaultZoom = 8;
    return map.leafletElement !== undefined
      ? map.leafletElement.zoom
      : defaultZoom;
  };

  const zoom = getCurrentZoom();
  return (
    <div
      style={{ position: "relative", width: "100%", height: "40vh" }}
      id="my-map"
    >
      <Map
        ref={ref => {
          map = ref;
        }}
        id="map"
        style={{ width: "100%", height: "100%" }}
        center={location}
        zoom={zoom}
        onClick={handleClick}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png" />
        {children}
      </Map>
      <span className="error-text">{touched && invalid && error}</span>
    </div>
  );
};

LocationMap.propTypes = {
  meta: PropTypes.shape({
    error: PropTypes.array,
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
  }),
  onUpdate: PropTypes.func,
  location: PropTypes.object,
  children: PropTypes.object,
};

LocationMap.defaultProps = {
  meta: {
    error: [],
    touched: false,
    invalid: false,
  },
  onUpdate: () => {},
  location: {},
  children: {},
};

export default LocationMap;
