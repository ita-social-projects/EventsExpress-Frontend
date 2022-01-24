import React from 'react';
import OwnersActions from '../OwnersAction/Owners-action';
import ApprovedUsersActionsContainer from '../../../containers/Approved-users-action-container';
import PendingUsersActions from '../PendingUsersAction/Pending-users-action';
import DeniedUsersActions from '../DeniedUsersAction/Denied-users-action';
import { EVENT_VISITORS } from '../../../constants/EventVisitors'
    
const {ADMIN, VISITORS, PENDING_USERS, DENIED_USERS} = EVENT_VISITORS;

const EventVisitors = ({isMyPrivateEvent, visitors, admins, isMyEvent}) => {
	const {approvedUsers, pendingUsers, deniedUsers} = visitors;

	const MAPPER = [
		{
			disabled: false,
			users: admins,
			label: ADMIN,
			renderComponent: (user) => (<OwnersActions user={user} isMyEvent={isMyEvent}/>),
		}, {
			disabled: approvedUsers.length == 0,
			users: visitors.approvedUsers,
			label: VISITORS,
			renderComponent: (user) => (<ApprovedUsersActionsContainer 
				user={user} isMyEvent={isMyEvent} isMyPrivateEvent={isMyPrivateEvent}/>),
		}, 
		...(isMyPrivateEvent ? [{
			disabled: pendingUsers.length == 0,
			users: visitors.pendingUsers,
			label: PENDING_USERS,
			renderComponent: (user) => (<PendingUsersActions 
				user={user} isMyEvent={isMyEvent} />),
		}, {
			disabled: deniedUsers.length == 0,
			users: visitors.deniedUsers,
			label: DENIED_USERS,
			renderComponent: (user) => (<DeniedUsersActions 
				user={user} isMyEvent={isMyEvent} />),
		}] : [])
	]

	return (
        <>
			{MAPPER.map(({disabled, users, label, renderComponent}) => {
				<ParticipantGroup
					disabled={disabled}
					users={users}
					label={label}
					renderUserActions={renderComponent}
				/>
			})}
        </>
    )
}

export default EventVisitors;