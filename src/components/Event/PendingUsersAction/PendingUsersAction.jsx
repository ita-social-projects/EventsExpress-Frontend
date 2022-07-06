import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  promoteToOwner,
  approveUser,
} from "../../../actions/event/event-item-view-action";
import { BUTTON_NAMES } from "../../../constants/buttonConsts";

const PendingUsersActions = ({ user, isMyEvent, eventId }) => {
  const useStyles = makeStyles(() => ({
    success: {
      color: "#fff",
      backgroundColor: "#4caf50",
      "&:hover": {
        backgroundColor: "#388e3c",
      },
    },
    danger: {
      color: "#fff",
      backgroundColor: "#f44336",
      "&:hover": {
        backgroundColor: "#d32f2f",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {isMyEvent && (
        <>
          <Button
            variant="contained"
            className={classes.success}
            onClick={() => approveUser(user.id, eventId, true)}
          >
            {BUTTON_NAMES.APROVE}
          </Button>
          <Button
            variant="contained"
            className={classes.danger}
            onClick={() => approveUser(user.id, eventId, false)}
          >
            {BUTTON_NAMES.DENY}
          </Button>
        </>
      )}
    </>
  );
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

PendingUsersActions.propTypes = {
  user: PropTypes.object,
  isMyEvent: PropTypes.bool,
  eventId: PropTypes.number,
};

PendingUsersActions.defaultProps = {
  user: {},
  isMyEvent: false,
  eventId: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PendingUsersActions);
