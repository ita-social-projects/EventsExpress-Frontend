import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-widgets/dist/css/react-widgets.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import { renderFieldError } from "../helpers/form-helpers";
import { ENTER_LOCATION, ENUM_LOCATION_TYPE } from "../../constants/eventConstants";
import { LocationMapWithMarker } from "../helpers/form-helpers/location";

class Location extends Component {
  onChangeLocationType = event => {
    const type = Number(event.target.value);
    if (type === ENUM_LOCATION_TYPE.MAP) {
      this.props.input.onChange({ type, latitude: null, longitude: null });
    } else if (type === ENUM_LOCATION_TYPE.ONLINE) {
      this.props.input.onChange({ type, onlineMeeting: null });
    }
  };

  onUrlInputChange = event => {
    this.props.input.onChange({
      type: ENUM_LOCATION_TYPE.ONLINE,
      onlineMeeting: event.target.value === "" ? null : event.target.value,
    });
  };

  onMapLocationChange = mapLocation => {
    this.props.input.onChange({
      type: ENUM_LOCATION_TYPE.MAP,
      latitude: mapLocation.latitude,
      longitude: mapLocation.longitude,
    });
  };

  render() {
    const {
      input: { value },
      meta: { touched, error },
    } = this.props;
    return (
      <span>
        <FormControl name="location.type">
          <RadioGroup onChange={this.onChangeLocationType}>
            <FormControlLabel
              value={String(0)}
              control={<Radio />}
              label="Map"
              checked={value !== "" && value.type === ENUM_LOCATION_TYPE.MAP}
            />
            <FormControlLabel
              value={String(1)}
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
              onChangeValues={this.onMapLocationChange}
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
                onChange={this.onUrlInputChange}
                value={value.onlineMeeting}
              />
              <br />
            </>
          )}
        </div>
        {renderFieldError({ touched, error })}
      </span>
    );
  }
}

Location.defaultProps = {
  input: {},
  meta: {},
};

Location.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default Location;
