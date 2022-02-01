import { change, getFormValues, Field } from "redux-form";
import React from "react";
import { connect } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import PropTypes from "prop-types";
import enumLocationType from "../../../../../constants/EventLocationType";
import FilterExpansionPanel from "../../expansion-panel/filter-expansion-panel";
import { LocationMapWithCircle } from "../../../../helpers/form-helpers/location";
import DisplayMap from "../../../map/display-map";
import "../../../slider.css";

const LocationFilter = ({ dispatch, formValues, ...props }) => {
  const clear = () => props.clear({ type: null });

  const onChangeLocationType = event => {
    const type = Number(event.target.value);
    if (type === enumLocationType.map) {
      props.changeLocation({
        type: enumLocationType.map,
        latitude: null,
        longitude: null,
        radius: 1,
      });
    } else if (type === enumLocationType.online) {
      props.changeLocation({ type: enumLocationType.online });
    }
  };

  return (
    <FilterExpansionPanel
      title="Location"
      onClearClick={clear}
      clearDisabled={formValues.location.type === null}
    >
      <div className="row">
        <FormControl name="location.type">
          <RadioGroup onChange={onChangeLocationType}>
            <FormControlLabel
              value={String(0)}
              control={<Radio />}
              label="Map"
              checked={
                formValues !== null &&
                formValues.location !== null &&
                formValues.location.type === enumLocationType.map
              }
            />
            <FormControlLabel
              value={String(1)}
              control={<Radio />}
              label="Online"
              checked={
                formValues !== null &&
                formValues.location !== null &&
                formValues.location.type === enumLocationType.online
              }
            />
          </RadioGroup>
        </FormControl>
        {formValues !== null &&
          formValues.location !== null &&
          formValues.location.radius && (
            <div className="slidecontainer">
              <label htmlFor="location">
                Radius is {formValues.location.radius} km
              </label>
              <Field
                name="location.radius"
                component="input"
                type="range"
                min="1"
                max="1000"
                value={formValues.location.radius}
                step="1"
                className="radius-slider"
              />
            </div>
          )}
        {formValues !== null &&
          formValues.location &&
          formValues.location.latitude &&
          formValues.location.longitude && (
            <div>
              <p>Current position on the Map is:</p>
              <DisplayMap location={{ ...formValues.location }} />
            </div>
          )}
        {formValues !== null &&
          formValues.location !== null &&
          formValues.location.type === enumLocationType.map && (
            <Field
              name="location"
              component={LocationMapWithCircle}
              radius={formValues.location.radius}
            />
          )}
      </div>
    </FilterExpansionPanel>
  );
};

LocationFilter.propTypes = {
  dispatch: PropTypes.func,
  formValues: PropTypes.object,
  clear: PropTypes.func,
  changeLocation: PropTypes.func,
};

LocationFilter.defaultProps = {
  dispatch: () => {},
  formValues: {},
  clear: () => {},
  changeLocation: () => {},
};

const mapStateToProps = state => {
  return {
    ...state.eventsFilter.locationFilter,
    // eslint-disable-next-line sonarjs/no-duplicate-string
    formValues: getFormValues("filter-form")(state),
  };
};

const mapDispatchToProps = dispatch => ({
  changeLocation: location =>
    dispatch(change("filter-form", "location", location)),
  clear: value => dispatch(change("filter-form", "location", value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);
