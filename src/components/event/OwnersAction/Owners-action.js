﻿import React from 'react';
import SimpleModal from '../SimpleModal/Simple-modal';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from "@material-ui/core/IconButton";
import { connect } from 'react-redux';
import { deleteFromOwners } from '../../../actions/event/event-item-view-action';

const OwnersActions = (props) => {
    const { user, isMyEvent } = props;
    return (
        <>
            {(isMyEvent && user.id != props.currentUserId) &&
                <div>
                    <SimpleModal
                        action={() => props.deleteFromOwners(user.id, props.eventId)}
                        data={'Are you sure, that you wanna delete ' + user.username + ' from owners?'}
                        button={
                            <Tooltip title="Delete from owners">
                                <IconButton aria-label="delete">
                                    <i className="far fa-trash-alt" />
                                </IconButton>
                            </Tooltip>
                        }
                    />
                </div>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    eventId: state.event.data.id,
    currentUserId: state.user.id
});

const mapDispatchToProps = (dispatch) => ({
    deleteFromOwners: (userId, eventId) => dispatch(deleteFromOwners(userId, eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnersActions);
