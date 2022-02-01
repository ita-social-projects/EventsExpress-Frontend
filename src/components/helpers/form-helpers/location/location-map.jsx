import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import PropTypes from "prop-types";
import "../../../event/map/map.css";

class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
  }

  handleClick = e => {
    this.updateLocation(e.latlng);
  };

  getCurrentZoom() {
    const defaultZoom = 8;
    return this.map.leafletElement !== undefined
      ? this.map.leafletElement.zoom
      : defaultZoom;
  }

  updateLocation = latlng => {
    this.props.onUpdate(latlng);
  };

  render() {
    const { error, touched, invalid } = this.props.meta;
    const { location } = this.props;
    const zoom = this.getCurrentZoom();
    return (
      <div
        style={{ position: "relative", width: "100%", height: "40vh" }}
        id="my-map"
      >
        <Map
          ref={ref => {
            this.map = ref;
          }}
          id="map"
          style={{ width: "100%", height: "100%" }}
          center={location}
          zoom={zoom}
          onClick={this.handleClick}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png" />
          {this.props.children}
        </Map>
        <span className="error-text">{touched && invalid && error}</span>
      </div>
    );
  }
}

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
