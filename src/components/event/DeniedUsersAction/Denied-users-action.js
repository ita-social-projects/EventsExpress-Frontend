import React from 'react';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

import constants from '../../../constants/deniedUsersAction';



const DeniedUsersActions = ({user, isMyEvent, approveUser, promoteToOwner, eventId}) => {
    return (
        <>
            {(isMyEvent) &&
                <div>
                <IconButton aria-label="delete" onClick={() => promoteToOwner(user.id, eventId)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            }
            <Button
                onClick={() => approveUser(user.id, eventId, true)}
                variant="outlined"
                color="success"
            >
                {constants.ADD_TO_EVENT}
        </Button>
        </>
    )
}

export default DeniedUsersActions;
