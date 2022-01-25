import React, { Component } from "react";
import "react-widgets/dist/css/react-widgets.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import { renderFieldError } from "../helpers/form-helpers";
import { enumLocationType } from "../../constants/EventLocationType";
import { LocationMapWithMarker } from "../helpers/form-helpers/location";

export default class Location extends Component {
  onChangeLocationType = event => {
    const type = Number(event.target.value);
    if (type === enumLocationType.map) {
      this.props.input.onChange({ type, latitude: null, longitude: null });
    } else if (type === enumLocationType.online) {
      this.props.input.onChange({ type, onlineMeeting: null });
    }
  };

  onUrlInputChange = event => {
    this.props.input.onChange({
      type: enumLocationType.online,
      onlineMeeting: event.target.value === "" ? null : event.target.value,
    });
  };

  onMapLocationChange = mapLocation => {
    this.props.input.onChange({
      type: enumLocationType.map,
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
              checked={value !== "" && value.type === enumLocationType.map}
            />
            <FormControlLabel
              value={String(1)}
              control={<Radio />}
              label="Online"
              checked={value !== "" && value.type === enumLocationType.online}
            />
          </RadioGroup>
        </FormControl>
        <div className="mt-2">
          {value !== "" && value.type === enumLocationType.map && (
            <LocationMapWithMarker
              latitude={value.latitude !== null ? value.latitude : null}
              longitude={value.longitude !== null ? value.longitude : null}
              onChangeValues={this.onMapLocationChange}
            />
          )}
          {value !== "" && value.type === enumLocationType.online && (
            <>
              <label htmlFor="url">Enter an https:// URL:</label>
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
