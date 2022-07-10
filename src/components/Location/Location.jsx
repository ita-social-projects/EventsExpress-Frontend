import React from "react";
import PropTypes from "prop-types";
import "react-widgets/dist/css/react-widgets.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import RenderFieldError from "../helpers/form-helpers/render-field-error";
import {
  ENTER_LOCATION,
  ENUM_LOCATION_TYPE,
} from "../../constants/eventConstants";
import LocationMapWithMarker from "../helpers/form-helpers/location/location-map-with-marker";

const Location = ({ input, meta }) => {
  const { touched, error } = meta;
  const { value } = input;

  const onChangeLocationType = ({ target }) => {
    const type = Number(target.value);
    if (type === ENUM_LOCATION_TYPE.MAP) {
      input.onChange({ type, latitude: null, longitude: null });
    } else if (type === ENUM_LOCATION_TYPE.ONLINE) {
      input.onChange({ type, onlineMeeting: null });
    }
  };

  const onUrlInputChange = ({ target }) => {
    input.onChange({
      type: ENUM_LOCATION_TYPE.ONLINE,
      onlineMeeting: target.value === "" ? null : target.value,
    });
  };

  const onMapLocationChange = mapLocation => {
    input.onChange({
      type: ENUM_LOCATION_TYPE.MAP,
      latitude: mapLocation.latitude,
      longitude: mapLocation.longitude,
    });
  };

  return (
    <span>
      <FormControl name="location.type">
        <RadioGroup onChange={onChangeLocationType}>
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="Map"
            checked={value !== "" && value.type === ENUM_LOCATION_TYPE.MAP}
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Online"
            checked={value !== "" && value.type === ENUM_LOCATION_TYPE.ONLINE}
          />
        </RadioGroup>
      </FormControl>
      <div className="mt-2">
        {value !== "" && value.type === ENUM_LOCATION_TYPE.MAP && (
          <LocationMapWithMarker
            latitude={value.latitude !== null ? value.latitude : null}
            longitude={value.longitude !== null ? value.longitude : null}
            onChangeValues={onMapLocationChange}
          />
        )}
        {value !== "" && value.type === ENUM_LOCATION_TYPE.ONLINE && (
          <>
            <span htmlFor="url">{ENTER_LOCATION}</span>
            <br />
            <TextField
              name="onlineMeeting"
              label="Url"
              id="url"
              fullWidth
              onChange={onUrlInputChange}
              value={value.onlineMeeting}
            />
            <br />
          </>
        )}
      </div>
      {RenderFieldError({ touched, error })}
    </span>
  );
};

Location.defaultProps = {
  input: {},
  meta: {},
};

Location.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default Location;
