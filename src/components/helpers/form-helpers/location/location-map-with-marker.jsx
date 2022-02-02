import React, { useState } from "react";
import { Field } from "redux-form";
import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import LocationMap from "./location-map";

const LocationMapWithMarker = ({ latitude, longitude, onChangeValues }) => {
  let initialPos = { lat: 50.4547, lng: 30.5238 };
  if (latitude !== null) {
    initialPos = { lat: latitude, lng: longitude };
  } else {
    onChangeValues({
      latitude: initialPos.lat,
      longitude: initialPos.lng,
    });
  }
  const [location, setLocation] = useState(initialPos);

  const handleChange = latlng => {
    setLocation(latlng);
    onChangeValues({ latitude: latlng.lat, longitude: latlng.lng });
  };

  const updateMarker = e => {
    handleChange(e.target.getLatLng());
  };

  return (
    <Field
      name="location"
      location={location}
      onUpdate={handleChange}
      component={LocationMap}
    >
      <Marker position={location} draggable onDragend={updateMarker}>
        <Popup position={location}>
          <pre>{JSON.stringify(location, null, 2)}</pre>
        </Popup>
      </Marker>
    </Field>
  );
};

LocationMapWithMarker.defaultProps = {
  latitude: null,
  longitude: null,
  onChangeValues: () => {},
};

LocationMapWithMarker.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  onChangeValues: PropTypes.func,
};

export default LocationMapWithMarker;
