import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SimpleModal from "../SimpleModal/Simple-modal";
import { APPROVED_USERS_ACTION } from "../../../constants/ApprovedUsersAction";

const ApprovedUsersActions = ({
  user,
  isMyEvent,
  isMyPrivateEvent,
  eventId,
  promoteToOwner,
  approveUser,
}) => {
  const { WANNA_APPROVE, TO_OWNER, DELETE_FROM_EVENT } = APPROVED_USERS_ACTION;

  return (
    <>
      {isMyEvent && (
        <>
          <SimpleModal
            id={user.id}
            action={() => promoteToOwner(user.id, eventId)}
            data={WANNA_APPROVE + user.username + TO_OWNER}
            button={
              <Tooltip title="Approve as an owner">
                <IconButton aria-label="delete">
                  <i className="fas fa-plus-circle" />
                </IconButton>
              </Tooltip>
            }
          />
        </>
      )}
      {isMyPrivateEvent && (
        <Button
          onClick={() => approveUser(user.id, eventId, false)}
          variant="outlined"
          color="success"
        >
          {DELETE_FROM_EVENT}
        </Button>
      )}
    </>
  );
};
export default ApprovedUsersActions;
