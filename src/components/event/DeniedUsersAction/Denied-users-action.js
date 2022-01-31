import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import propTypes from "prop-types";
import {
  promoteToOwner,
  approveUser,
} from "../../../actions/event/event-item-view-action";

import constants from "../../../constants/deniedUsersAction";

const DeniedUsersAction = ({
  user,
  isMyEvent,
  approveUser,
  promoteToOwner,
  eventId,
}) => {
  return (
    <>
      {isMyEvent && (
        <div>
          <IconButton
            aria-label="delete"
            onClick={() => promoteToOwner(user.id, eventId)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      <Button
        onClick={() => approveUser(user.id, eventId, true)}
        variant="outlined"
        color="success"
      >
        {constants.ADD_TO_EVENT}
      </Button>
    </>
  );
};

DeniedUsersAction.propTypes = {
  user: propTypes.object,
  isMyEvent: propTypes.bool,
  promoteToOwner: propTypes.func,
  approveUser: propTypes.func,
  eventId: propTypes.number,
};

DeniedUsersAction.defaultProps = {
  user: {},
  isMyEvent: false,
  promoteToOwner: () => {},
  approveUser: () => {},
  eventId: null,
};

const mapStateToProps = state => ({
  eventId: state.event.data.id,
});

const mapDispatchToProps = dispatch => ({
  approveUser: (userId, eventId, buttonAction) =>
    dispatch(approveUser(userId, eventId, buttonAction)),
  promoteToOwner: (userId, eventId) =>
    dispatch(promoteToOwner(userId, eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeniedUsersAction);
