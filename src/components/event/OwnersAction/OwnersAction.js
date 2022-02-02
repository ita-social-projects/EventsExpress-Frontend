import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import SimpleModal from "../SimpleModal/Simple-modal";
import constants from "../../../constants/ConstantsOwnersAction";

function OwnersActions({
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
          data={`${constants.MESSAGE_ACCEPT_DELETE_FIRST} ${user.username} ${constants.MESSAGE_ACCEPT_DELETE_LAST}`}
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

OwnersActions.propTypes = {
  user: PropTypes.object,
  isMyEvent: PropTypes.bool,
  currentUserId: PropTypes.number,
  eventId: PropTypes.number,
  deleteFromOwners: PropTypes.func,
};

OwnersActions.defaultProps = {
  user: {},
  isMyEvent: false,
  currentUserId: null,
  eventId: null,
  deleteFromOwners: () => {},
};

export default OwnersActions;
