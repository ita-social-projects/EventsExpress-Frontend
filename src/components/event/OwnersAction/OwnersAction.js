import React from "react";
import SimpleModal from "../SimpleModal/Simple-modal";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

export default function OwnersActions({
  user,
  isMyEvent,
  currentUserId,
  eventId,
  deleteFromOwners,
}) {
  const handlerDeleteFromOwners = () => deleteFromOwners(user.id, eventId);

  {
    return (
      isMyEvent &&
      user.id !== currentUserId && (
        <div>
          <SimpleModal
            action={handlerDeleteFromOwners}
            data={`Are you sure, that you wanna delete ${user.username} from owners?`}
            button={
              <Tooltip title="Delete from owners">
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
}
