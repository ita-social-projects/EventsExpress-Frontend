import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { Circle } from "react-leaflet";
import LocationMap from "./location-map";
import { RADIUS_MULTIPLIER } from "../../../../constants/locationConstants";

const LocationMapWithCircle = ({ input, radius }) => {
  let initialPos = { lat: 50.4547, lng: 30.5238 };
  if (input.value.latitude !== undefined) {
    initialPos = {
      lat: input.value.latitude,
      lng: input.value.longitude,
    };
  }
  const [location, setLocation] = React.useState(initialPos);

  const handleChange = latlng => {
    setLocation(latlng);
    input.onChange({
      ...input.value,
      latitude: latlng.lat,
      longitude: latlng.lng,
    });
  };

  return (
    <Field
      name="selectedPos"
      location={location}
      onUpdate={handleChange}
      component={LocationMap}
    >
      {input.value.latitude && (
        <Circle
          center={location}
          pathOptions={{ color: "blue" }}
          radius={radius * RADIUS_MULTIPLIER}
        />
      )}
    </Field>
  );
};

LocationMapWithCircle.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.object,
    name: PropTypes.string,
    onChange: PropTypes.func,
  }),
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LocationMapWithCircle.defaultProps = {
  input: {
    value: {},
    name: "",
    onChange: () => {},
  },
  radius: null,
};

export default LocationMapWithCircle;
