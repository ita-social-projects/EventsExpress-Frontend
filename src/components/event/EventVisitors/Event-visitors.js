import React from "react";
import PropTypes from "prop-types";
import ParticipantGroup from "../ParticipantGroup/Participant-group";
import ContainerOwnersActions from "../../../containers/ContainerOwnersAction";
import ApprovedUsersActionsContainer from "../../../containers/Approved-users-action-container";
import PendingUsersActions from "../PendingUsersAction/Pending-users-action";
import DeniedUsersActions from "../DeniedUsersAction/Denied-users-action";

const EventVisitors = ({isMyPrivateEvent, visitors, admins, isMyEvent}) => {
    return (
      <div>
        <ParticipantGroup
          disabled={false}
          users={admins}
          label="Admin"
          renderUserActions={user => (
            <ContainerOwnersActions user={user} isMyEvent={isMyEvent} />
          )}
        />
        <ParticipantGroup
          disabled={visitors.approvedUsers.length === 0}
          users={visitors.approvedUsers}
          label="Visitors"
          renderUserActions={user => (
            <ApprovedUsersActionsContainer
              user={user}
              isMyEvent={isMyEvent}
              isMyPrivateEvent={isMyPrivateEvent}
            />
          )} //
        />
        {isMyPrivateEvent && (
          <ParticipantGroup
            disabled={visitors.pendingUsers.length === 0}
            users={visitors.pendingUsers}
            label="Pending users"
            renderUserActions={user => (
              <PendingUsersActions user={user} isMyEvent={isMyEvent} />
            )}
          />
        )}
        {isMyPrivateEvent && (
          <ParticipantGroup
            disabled={visitors.deniedUsers.length === 0}
            users={visitors.deniedUsers}
            label="Denied users"
            renderUserActions={user => (
              <DeniedUsersActions user={user} isMyEvent={isMyEvent} />
            )}
          />
        )}
      </div>
    );
  }
  EventVisitors.propTypes = {
    isMyPrivateEvent: PropTypes.bool,
    visitors: PropTypes.array,
    admins: PropTypes.array,
    isMyEvent: PropTypes.bool,
  };
  
  EventVisitors.defaultProps = {
    isMyPrivateEvent: false,
    visitors: [],
    admins: [],
    isMyEvent: false,
  };
  

export default EventVisitors;
