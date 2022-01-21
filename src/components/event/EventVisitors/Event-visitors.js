import React, { Component } from 'react';
import ParticipantGroup from '../ParticipantGroup/Participant-group';
import OwnersActions from '../OwnersAction/Owners-action';
import ApprovedUsersActions from '../ApprovedUsersAction/Approved-users-action';
import PendingUsersActions from '../PendingUsersAction/Pending-users-action';
import DeniedUsersActions from '../DeniedUsersAction/Denied-users-action';

class EventVisitors extends Component {

    render() {
        const { isMyPrivateEvent, visitors, admins, isMyEvent } = this.props;

        return (
            <div>
                <ParticipantGroup
                    disabled={false}
                    users={admins}
                    label="Admin"
                    renderUserActions={(user) => (<OwnersActions
                                                        user={user}
                                                        isMyEvent={isMyEvent}
                                                  />)}
                />
                <ParticipantGroup
                    disabled={visitors.approvedUsers.length == 0}
                    users={visitors.approvedUsers}
                    label="Visitors"
                    renderUserActions={(user) => (<ApprovedUsersActions
                                                        user={user}
                                                        isMyEvent={isMyEvent}
                                                        isMyPrivateEvent={isMyPrivateEvent}
                                                  />)}
                />
                {isMyPrivateEvent &&
                    <ParticipantGroup
                        disabled={visitors.pendingUsers.length == 0}
                        users={visitors.pendingUsers}
                        label="Pending users"
                        renderUserActions={(user) => (<PendingUsersActions
                                                            user={user}
                                                            isMyEvent={isMyEvent}
                                                      />)}
                    />
                }
                {isMyPrivateEvent &&
                    <ParticipantGroup
                    disabled={visitors.deniedUsers.length == 0}
                    users={visitors.deniedUsers}
                    label="Denied users"
                    renderUserActions={(user) => (<DeniedUsersActions
                                                        user={user}
                                                        isMyEvent={isMyEvent}
                                                  />)}
                    />
                }
            </div>
        )
    }
}

export default EventVisitors;