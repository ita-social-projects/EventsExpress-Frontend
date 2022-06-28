import React from "react";
import { Grid, List, ListItem, ListItemText, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import moment from "moment";
import SelectedActivitiesList from "./SelectedActivitiesList";
import { BUTTON_NAMES } from "../../constants/buttonConsts";
import {
  SOME_STEP_DATA,
  STEP_5_TITLE,
} from "../../constants/registationConstants";

const gendersArray = ["", "Male", "Female", "Other"];

// TODO: Lot of strange logic
const ConfirmForm = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  const areCategoriesSelected = () => {
    return props.formValues.categories !== undefined;
  };

  const getSelectedCategories = () => {
    const selected = props.formValues.categories;

    const filteredCategories = props.categories.filter(el =>
      selected.includes(el.id),
    );

    return props.categoryGroups
      .map(g => ({
        group: g.title,
        categories: filteredCategories
          .filter(c => c.categoryGroup.id === g.id)
          .map(el => el.name),
      }))
      .filter(el => el.categories.length > 0);
  };

  return (
    <>
      <div style={{ width: "97%", padding: "10px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item sm={7}>
              <h1 style={{ fontSize: 20 }}>{STEP_5_TITLE}</h1>
            </Grid>
            <Grid item sm={5} />
            <Grid item xs={4}>
              <List>
                <ListItem>
                  <ListItemText primary="Email" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="First Name"
                    secondary={props.formValues.firstName}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Last Name"
                    secondary={props.formValues.lastName}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Birth Date"
                    secondary={
                      props.formValues.birthDate
                        ? moment(props.formValues.birthDate).format(
                            "DD-MM-YYYY",
                          )
                        : "Not entered."
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Gender"
                    secondary={gendersArray[props.formValues.gender]}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Country"
                    secondary={props.formValues.country}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="City"
                    secondary={props.formValues.city}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={5}>
              <h5>{SOME_STEP_DATA}</h5>
            </Grid>

            {areCategoriesSelected() && (
              <SelectedActivitiesList data={getSelectedCategories()} />
            )}

            <Grid item sm={12} justify="center">
              <Button
                type="button"
                className="previous"
                onClick={previousPage}
                color="primary"
                variant="text"
                size="large"
              >
                {BUTTON_NAMES.BACK}
              </Button>
              <Button
                type="submit"
                className="next"
                disabled={pristine || submitting}
                color="primary"
                variant="contained"
                size="large"
              >
                {BUTTON_NAMES.CONTINUE}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

ConfirmForm.defaultProps = {
  handleSubmit: () => {},
  previousPage: () => {},
  formValues: {},
  categoryGroups: [],
  categories: [],
  pristine: false,
  submitting: false,
};

ConfirmForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func,
  formValues: PropTypes.object,
  categoryGroups: PropTypes.array,
  categories: PropTypes.array,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

export default ConfirmForm;
