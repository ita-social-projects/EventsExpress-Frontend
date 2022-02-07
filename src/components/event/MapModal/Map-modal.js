import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Field } from "redux-form";
import PropTypes from "prop-types";
import { LocationMapWithCircle } from "../../helpers/form-helpers/location";
import "../slider.css";
import DisplayMap from "../map/display-map";
import constants from "../../../constants/mapModal";

const {
  FILTER_BY_LOCATION,
  RADIUS_IS,
  KM,
  CURRENT_MAP_POSITION,
  LATITUDE,
  LONGITUDE,
  CHOOSE_MAP_POSITION,
  CANCEL,
  APPLY,
} = constants;

export const MapModal = ({ initialize, values }) => {
  const [open, setOpen] = useState(false);

  const { longitude, latitude } = values.selectedPos;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    const startValue = initialize({
      radius: 8,
      selectedPos: { latitude: null, longitude: null },
    });

    return latitude && startValue ? startValue : setOpen(false);
  };

  const handleFilter = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="outlined"
        fullWidth
        color="primary"
        onClick={handleClickOpen}
      >
        {FILTER_BY_LOCATION}
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{FILTER_BY_LOCATION}</DialogTitle>
        <DialogContent>
          {values?.radius && (
            <div>
              <div className="slidecontainer">
                <label htmlFor="radius-slider">
                  {RADIUS_IS}
                  {values.radius} {KM}
                </label>
                <Field
                  name="radius"
                  component="input"
                  type="range"
                  min="1"
                  max="10000"
                  value={values.radius}
                  step="1"
                  className="radius-slider"
                />
              </div>
            </div>
          )}
          <div>
            {latitude && longitude && (
              <>
                <div>
                  <p>{CURRENT_MAP_POSITION}</p>
                  <p>
                    {LATITUDE} {latitude}
                  </p>
                  <p>
                    {LONGITUDE} {longitude}
                  </p>
                  <DisplayMap location={{ ...values.selectedPos }} />
                </div>
                <div>
                  <p>{CHOOSE_MAP_POSITION}</p>
                </div>
              </>
            )}

            <Field
              name="selectedPos"
              component={LocationMapWithCircle}
              radius={values.radius}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {CANCEL}
          </Button>
          <Button onClick={handleFilter} color="primary">
            {APPLY}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

MapModal.propTypes = {
  initialize: PropTypes.func,
  values: PropTypes.object,
  radius: PropTypes.number,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

MapModal.defaultProps = {
  initialize: () => {},
  values: {},
  radius: null,
  latitude: null,
  longitude: null,
};

export default MapModal;
