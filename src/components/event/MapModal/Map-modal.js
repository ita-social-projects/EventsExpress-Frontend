import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Field } from 'redux-form';

import { LocationMapWithCircle } from '../../helpers/form-helpers/location';
import '../slider.css';
import DisplayMap from '../map/display-map';
import constants from '../../../constants/mapModal';

export const MapModal = ({initialize,values}) => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

     const handleClose = () => {

        const startValue = initialize({
            radius: 8,
            selectedPos: { latitude: null, longitude: null }
        })

        !!values.selectedPos.latitude ? startValue :
         startValue && setOpen(false)  
    };

    const handleFilter = () => {
        setOpen(false);
    }
        return (
            <div>
                <Button variant="outlined" fullWidth={true} color="primary" onClick={handleClickOpen}>
                    {constants.FILTER_BY_LOCATION}
                </Button>
                <Dialog fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{constants.FILTER_BY_LOCATION}</DialogTitle>
                    <DialogContent>
                        {values?.radius &&
                            <div>
                                <div class="slidecontainer">
                                    <label>{constants.RADIUS_IS}{values.radius} {constants.KM}</label>
                                    <Field name="radius" component="input"
                                        type="range"
                                        min="1" max="10000" value={values.radius}
                                        onChange={onRadiusChange}
                                        step="1"
                                        className="radius-slider"
                                    />
                                </div>
                            </div>
                        }
                        <div>
                            {
                                !!values.selectedPos.latitude &&
                                !!values.selectedPos.longitude &&
                                <div>
                                    <p>{constants.CURRENT_MAP_POSITION}</p>
                                    <p>{constants.LATITUDE} {values.selectedPos.latitude}</p>
                                    <p>{constants.LONGITUDE} {values.selectedPos.longitude}</p>
                                    <DisplayMap location={{ ...values.selectedPos }}/>
                                </div>
                            }
                            {
                                !!values.selectedPos.latitude  &&
                                !!values.selectedPos.longitude &&
                                <div>
                                    <p>{constants.CHOOSE_MAP_POSITION}</p>
                                </div>
                            }
                            <Field
                                name='selectedPos'
                                component={LocationMapWithCircle}
                                radius={values.radius}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            {constants.CANCEL}
                        </Button>
                        <Button onClick={handleFilter} color="primary">
                            {constants.APPLY}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
}

export default MapModal;