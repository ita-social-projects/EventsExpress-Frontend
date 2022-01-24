import React from "react";
import SimpleModal from "../SimpleModal/Simple-modal";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import constants from "../../../constants/ConstantsOwnersAction";

export default function OwnersActions({
  user,
  isMyEvent,
  currentUserId,
  eventId,
  deleteFromOwners,
}) {
  const handlerDeleteFromOwners = () => deleteFromOwners(user.id, eventId);

  return (
    isMyEvent &&
    user.id !== currentUserId && (
      <div>
        <SimpleModal
          action={handlerDeleteFromOwners}
          data={constants.MESSAGE_ACCEPT_DELETE(user.username)}
          button={
            <Tooltip title={constants.TITLE_DELETE_BUTTON}>
              <IconButton aria-label="delete">
                <i className="far fa-trash-alt" />
              </IconButton>
            </Tooltip>
          }
        />
      </div>
    )
  );
}
