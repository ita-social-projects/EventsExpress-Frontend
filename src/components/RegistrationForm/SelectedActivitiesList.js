import React from "react";
import { Grid, Typography } from "@material-ui/core";
import propTypes from "prop-types";

const SelectedActivitiesList = ({ data }) => {
  return (
    <>
      <Grid item sm={8}>
        <h5 align="left">Selected activities</h5>
      </Grid>
      <Grid item sm={4} />
      <Grid container spacing={3} xs={12}>
        {data.map(el => (
          <Grid item lg={4} md={4} xs={6} key={el.group}>
            <b>{el.group}</b>
            <Typography variant="body2" gutterBottom>
              {el.categories.join(", ")}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

SelectedActivitiesList.propTypes = {
  data: propTypes.array,
};

SelectedActivitiesList.defaultProps = {
  data: [],
};

export default SelectedActivitiesList;
