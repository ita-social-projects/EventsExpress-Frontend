import React from 'react';
import ParticipantGroup from '../ParticipantGroup/Participant-group';
import OwnersActions from '../OwnersAction/Owners-action';
import ApprovedUsersActionsContainer from '../../../containers/Approved-users-action-container';
import PendingUsersActions from '../PendingUsersAction/Pending-users-action';
import DeniedUsersActions from '../DeniedUsersAction/Denied-users-action';

const EventVisitors = ({isMyPrivateEvent, visitors, admins, isMyEvent}) => {
        
	const createParticipantGroup = (disabled, users, label, Component, isPrivate = false) => {
		return (
			<ParticipantGroup 
			    disabled={disabled}
				users={users}
				label={label}
				renderUserActions={(user) => (
					<Component
						user={user}
						isMyEvent={isMyEvent}
						isMyPrivateEvent={isPrivate && 
							isMyPrivateEvent } 
					/>)}
				/>
		)
	}
	
	return (
         <>
			{createParticipantGroup(false, admins, "Admin", OwnersActions)}

			{createParticipantGroup(visitors.approvedUsers.length == 0, visitors.approvedUsers,
				 "Visitors", ApprovedUsersActionsContainer, true)}
        
            {isMyPrivateEvent &&
				createParticipantGroup(visitors.pendingUsers.length == 0, visitors.pendingUsers, 
					"Pending users", PendingUsersActions),
				
				createParticipantGroup(visitors.deniedUsers.length == 0, visitors.deniedUsers, 
						"Denied users", DeniedUsersActions)
			}
        </>
    )
}

export default EventVisitors;