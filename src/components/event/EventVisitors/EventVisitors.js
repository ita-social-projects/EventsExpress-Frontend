import React from "react";
import propTypes from "prop-types";
import ContainerOwnersActions from "../../../containers/ContainerOwnersAction";
import ApprovedUsersActionsContainer from "../../../containers/Approved-users-action-container";
import PendingUsersActions from "../PendingUsersAction/Pending-users-action";
import DeniedUsersActions from "../DeniedUsersAction/Denied-users-action";
import ParticipantGroup from "../ParticipantGroup/Participant-group";
import EVENT_VISITORS from "../../../constants/EventVisitors";

const { ADMIN, VISITORS, PENDING_USERS, DENIED_USERS } = EVENT_VISITORS;

const EventVisitors = ({ isMyPrivateEvent, visitors, admins, isMyEvent }) => {
  const { approvedUsers, pendingUsers, deniedUsers } = visitors;

  const MAPPER = [
    {
      disabled: false,
      users: admins,
      label: ADMIN,
      renderComponent: user => (
        <ContainerOwnersActions user={user} isMyEvent={isMyEvent} />
      ),
    },
    {
      disabled: approvedUsers.length === 0,
      users: visitors.approvedUsers,
      label: VISITORS,
      renderComponent: user => (
        <ApprovedUsersActionsContainer
          user={user}
          isMyEvent={isMyEvent}
          isMyPrivateEvent={isMyPrivateEvent}
        />
      ),
    },
    ...(isMyPrivateEvent
      ? [
          {
            disabled: pendingUsers.length === 0,
            users: visitors.pendingUsers,
            label: PENDING_USERS,
            renderComponent: user => (
              <PendingUsersActions user={user} isMyEvent={isMyEvent} />
            ),
          },
          {
            disabled: deniedUsers.length === 0,
            users: visitors.deniedUsers,
            label: DENIED_USERS,
            renderComponent: user => (
              <DeniedUsersActions user={user} isMyEvent={isMyEvent} />
            ),
          },
        ]
      : []),
  ];

  return (
    <>
      {MAPPER.map(({ disabled, users, label, renderComponent }) => (
        <ParticipantGroup
          disabled={disabled}
          users={users}
          label={label}
          key={label}
          renderUserActions={renderComponent}
        />
      ))}
    </>
  );
};

// TODO: Check props admins
EventVisitors.propTypes = {
  isMyPrivateEvent: propTypes.bool,
  visitors: propTypes.object,
  admins: propTypes.array,
  isMyEvent: propTypes.bool,
};

EventVisitors.defaultProps = {
  isMyPrivateEvent: false,
  visitors: {},
  admins: [],
  isMyEvent: false,
};

export default EventVisitors;
