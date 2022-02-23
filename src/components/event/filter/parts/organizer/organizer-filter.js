<<<<<<< HEAD
import { change, Field, getFormValues } from "redux-form";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useOrganizerFilterStyles from "./organizer-filter-styles";
import FilterExpansionPanel from "../../expansion-panel/filter-expansion-panel";
// eslint-disable-next-line import/named
import OrganizerAutocomplete from "./organizer-autocomplete";
import { fetchUsers } from "../../../../../actions/events/filter/users-data";

const OrganizerFilter = ({ organizers, formValues, ...props }) => {
  const classes = useOrganizerFilterStyles();
  const clear = () => props.change([]);

  useEffect(() => {
    props.fetchUsers("");
    //! TODO: ADD CORECT DEPENDENCY IN THE useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FilterExpansionPanel
      title="Organizer"
      onClearClick={clear}
      clearDisabled={!formValues.organizers.length}
    >
      <div className={classes.wrapper}>
        <Field
          name="organizers"
          options={organizers}
          component={OrganizerAutocomplete}
        />
      </div>
    </FilterExpansionPanel>
  );
=======
import { FilterExpansionPanel } from '../../expansion-panel/filter-expansion-panel';
import { change, Field, getFormValues } from 'redux-form';
import React from 'react';
import { useOrganizerFilterStyles } from './organizer-filter-styles';
import { connect } from 'react-redux';
import OrganizerAutocomplete from './organizer-autocomplete';

const OrganizerFilter = ({ organizers, formValues, ...props }) => {
    const classes = useOrganizerFilterStyles();
    const clear = () => props.change([]);

    return (
        <FilterExpansionPanel
            title="Organizer"
            onClearClick={clear}
            clearDisabled={!formValues.organizers.length}
            clearButton={true}
        >
            <div className={classes.wrapper}>
                <Field
                    name="organizers"
                    options={organizers}
                    component={OrganizerAutocomplete}
                />
            </div>
        </FilterExpansionPanel>
    );
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2
};

const mapStateToProps = state => ({
  organizers: state.eventsFilter.users,
  formValues: getFormValues("filter-form")(state),
});

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
  fetchUsers: filter => dispatch(fetchUsers(filter)),
  change: value => dispatch(change("filter-form", "organizers", value)),
=======
    change: value => dispatch(change('filter-form', 'organizers', value))
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2
});

OrganizerFilter.propTypes = {
  organizers: PropTypes.array,
  formValues: PropTypes.object,
  change: PropTypes.func,
  fetchUsers: PropTypes.func,
};

OrganizerFilter.defaultProps = {
  organizers: [],
  formValues: {},
  change: () => {},
  fetchUsers: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganizerFilter);
