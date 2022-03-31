import { Autocomplete } from "@material-ui/lab";
import { Chip, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useOrganizerFilterStyles from "./organizer-filter-styles";
import { fetchUsers } from "../../../../../actions/events/filter/users-data";
import useDelay from "./use-delay";

const OrganizerAutocomplete = ({ input, options, ...props }) => {
  const [username, setUsername] = useDelay(delayedUsername => {
    props.fetchUsers(`?KeyWord=${delayedUsername}`);
  }, "");
  const classes = useOrganizerFilterStyles();
  const onChange = (event, value) => input.onChange(value);
  const updateUsername = event => setUsername(event.target.value);
  const deleteOrganizer = organizerToDelete => {
    return () => {
      input.onChange(
        input.value.filter(organizer => organizer.id !== organizerToDelete.id),
      );
    };
  };

  return (
    <>
      <Autocomplete
        id="organizer-autocomplete"
        className={classes.fullWidth}
        multiple
        disableClearable
        value={input.value}
        options={options}
        getOptionLabel={option => option.username}
        getOptionSelected={(option, value) => option.id === value.id}
        onChange={onChange}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Search by name"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <i className="fas fa-search" />
                </InputAdornment>
              ),
            }}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            inputProps={{
              ...params.inputProps,
              maxLength: 50,
            }}
            value={username}
            onChange={updateUsername}
          />
        )}
      />
      <div className={classes.chips}>
        {input.value.map(organizer => (
          <Chip
            key={organizer.id}
            label={organizer.username}
            color="secondary"
            onDelete={deleteOrganizer(organizer)}
          />
        ))}
      </div>
    </>
  );
};

OrganizerAutocomplete.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array,
  fetchUsers: PropTypes.func,
};

OrganizerAutocomplete.defaultProps = {
  input: {},
  options: [],
  fetchUsers: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: filter => dispatch(fetchUsers(filter)),
});

export default connect(null, mapDispatchToProps)(OrganizerAutocomplete);
