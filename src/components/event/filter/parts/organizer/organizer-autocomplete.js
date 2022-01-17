import { Autocomplete } from '@material-ui/lab';
import { Chip, InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import { useOrganizerFilterStyles } from './organizer-filter-styles';
import { connect } from 'react-redux';
import { fetchUsers, setUsers } from '../../../../../actions/events/filter/users-data';
import { useOrganizerAutocomplete } from './organizer-autocomplete-hook';
import { useUsersSearch } from './users-search-hook';

export const OrganizerAutocomplete = ({ input, options, ...props }) => {
    const [username, updateUsername] = useUsersSearch(props.fetchUsers);
    const { selectedOrganizers, updateOrganizers, deleteOrganizer } = useOrganizerAutocomplete(input, options);
    const classes = useOrganizerFilterStyles();
    const eraseOptions = () => {
        if (options.length !== 0) {
            props.eraseUsers();
        }
    };

    return (
        <>
            <Autocomplete
                id="organizer-autocomplete"
                className={classes.fullWidth}
                multiple={true}
                disableClearable={true}
                value={input.value}
                options={options.filter(organizer => !input.value.includes(organizer.id))}
                getOptionLabel={option => option.username}
                getOptionSelected={(option, value) => option.id === value}
                onChange={updateOrganizers}
                onClose={eraseOptions}
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
                            )
                        }}
                        inputProps={{
                            ...params.inputProps,
                            maxLength: 50
                        }}
                        value={username}
                        onChange={updateUsername}
                    />
                )}
            />
            <div className={classes.chips}>
                {selectedOrganizers.map(organizer => (
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

const mapDispatchToProps = dispatch => ({
    fetchUsers: filter => dispatch(fetchUsers(filter)),
    eraseUsers: () => dispatch(setUsers([]))
});

export default connect(null, mapDispatchToProps)(OrganizerAutocomplete);
