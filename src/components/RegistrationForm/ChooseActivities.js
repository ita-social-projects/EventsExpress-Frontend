import React, { useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import PropTypes from "prop-types";
import getCategoryGroups from "../../actions/categoryGroup/category-group-list-action";
import getCategories from "../../actions/category/category-list-action";
import { TileGroup } from "../../containers/TileGroup";

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
          <TileGroup data={mapToCategories()} />
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

const mapStateToProps = state => ({
  categoryGroups: state.categoryGroups.data,
  categories: state.categories.data,
});

const mapDispatchToProps = dispatch => {
  return {
    getCategoryGroups: () => dispatch(getCategoryGroups()),
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: "registrationForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(ChooseActivities),
);
