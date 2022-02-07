import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { Circle } from "react-leaflet";
import { LocationMap } from ".";

const LocationMapWithCircle = props => {
  let initialPos = { lat: 50.4547, lng: 30.5238 };
  if (props.input.value.latitude !== undefined) {
    initialPos = {
      lat: props.input.value.latitude,
      lng: props.input.value.longitude,
    };
  }
  const [location, setLocation] = React.useState(initialPos);

  const handleChange = latlng => {
    setLocation(latlng);
    props.input.onChange({
      ...props.input.value,
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
      {props.input.value.latitude && (
        <Circle
          center={location}
          pathOptions={{ color: "blue" }}
          radius={props.radius * 1000}
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
