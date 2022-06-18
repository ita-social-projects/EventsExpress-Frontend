import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Field } from "redux-form";
import moment from "moment";
import PropTypes from "prop-types";

import DatePickerFirst from "../shared/DatePickerFirst/DatePickerFirst";
import TextField from "../shared/TextField/TextField";
import SelectField from "../shared/SelectField/SelectField";
import parseEuDate from "../../helpers/parseEuDate";

import ChangeAvatarContainer from "../../containers/EditProfileContainers/ChangeAvatarContainer";

const CompleteProfileForm = ({ handleSubmit }) => {
  return (
    <>
      <div style={{ width: "97%", padding: "10px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <h1 style={{ fontSize: 20 }}>Step 2: Complete your profile. </h1>
            </Grid>
            <Grid item sm={6} />

            <Grid item sm={3}>
              Choose your avatar:
            </Grid>
            <Grid item sm={9}>
              <ChangeAvatarContainer />
            </Grid>
            <Grid item sm={0} />

            <Grid item sm={12} />

            <Grid item sm={3}>
              <Field
                name="firstName"
                variant="outlined"
                component={TextField}
                type="input"
                label="First Name"
              />
            </Grid>
            <Grid item sm={3}>
              <Field
                name="lastName"
                variant="outlined"
                component={TextField}
                type="input"
                label="Last Name"
              />
            </Grid>
            <Grid item sm={2} />
            <Grid item sm={4}>
              <Field
                name="birthDate"
                label="Birth Date"
                minValue={moment(new Date()).subtract(115, "years")}
                maxValue={moment(new Date()).subtract(14, "years")}
                component={DatePickerFirst}
                parse={parseEuDate}
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                name="country"
                variant="outlined"
                component={TextField}
                type="input"
                label="County"
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                name="city"
                variant="outlined"
                component={TextField}
                type="input"
                label="City"
              />
            </Grid>

            <Grid item sm={2}></Grid>
            <Grid item sm={4}>
              <Field
                minWidth={140}
                name="gender"
                component={SelectField}
                label="Gender"
              >
                <option aria-label="None" value="" />
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </Field>
            </Grid>

            <Grid item sm={12} justify="space-around">
              <Button
                type="submit"
                className="next"
                color="primary"
                variant="contained"
                size="large"
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

CompleteProfileForm.defaultProps = {
  handleSubmit: () => {},
};

CompleteProfileForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default CompleteProfileForm;
