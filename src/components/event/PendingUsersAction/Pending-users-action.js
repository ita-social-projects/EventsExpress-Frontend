import React from "react";
import Button from "@material-ui/core/Button";
import "./Pending-users-action-style.js";
import PENDING_USERS_ACTION_BUTTON from "../../../constants/pendingUsersActionButton";

export const PendingUsersActions = (props) => {
  const { user, isMyEvent, useStyles } = props;
  const { DENY, APPROVE } = PENDING_USERS_ACTION_BUTTON;

  return (
    <>
      {isMyEvent && (
        <>
          <Button
            variant="contained"
            className={useStyles.success}
            onClick={() => props.approveUser(user.id, props.eventId, true)}
          >
            {APPROVE}
          </Button>
          <Button
            variant="contained"
            className={useStyles.danger}
            onClick={() => props.approveUser(user.id, props.eventId, false)}
          >
            {DENY}
          </Button>
        </>
      )}
    </>
  );
};
export default PendingUsersActions;
