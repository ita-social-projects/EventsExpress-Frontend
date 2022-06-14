import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-named-as-default
import TileGroupContainer from "../../containers/TileContainer/TileGroupContainer"

const ChooseActivities = ({ handleSubmit, previousPage, ...props }) => {
  useEffect(() => {
    props.getCategoryGroups();
    props.getCategories();
    // TODO all options what i tried didn't fix this error
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const mapToCategories = () => {
    const groups = props.categoryGroups;
    const { categories } = props;

    return groups.map(el => ({
      group: el,
      categories: categories.filter(c => c.categoryGroup.id === el.id),
    }));
  };

  return (
    <>
      <div style={{ width: "97%", padding: "10px" }}>
        <h1 style={{ textAlign: "left", marginBottom: "20px" }}>
          What are your reasons for joining EventsExpress?
        </h1>
        <h4 style={{ textAlign: "left" }}>
          (you can skip this step and choose activities later in Profile
          Settings)
        </h4>
        <form onSubmit={handleSubmit}>
          <TileGroupContainer data={mapToCategories()} />
          <Grid container spacing={3}>
            <Grid item sm={12} justify="center">
              <Button
                type="button"
                className="previous"
                onClick={previousPage}
                color="primary"
                variant="text"
                size="large"
              >
                Back
              </Button>
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

ChooseActivities.defaultProps = {
  handleSubmit: () => {},
  previousPage: () => {},
  getCategoryGroups: () => {},
  getCategories: () => {},
  categoryGroups: [],
  categories: [],
};

ChooseActivities.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func,
  getCategoryGroups: PropTypes.func,
  getCategories: PropTypes.func,
  categoryGroups: PropTypes.array,
  categories: PropTypes.array,
};

export default ChooseActivities;
