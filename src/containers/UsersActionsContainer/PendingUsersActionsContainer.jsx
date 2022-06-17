import React from "react";
import { connect } from "react-redux";
import {
  promoteToOwner,
  approveUser,
} from "../../actions/event/event-item-view-action";
import PendingUsersActions from "../../components/Event/PendingUsersAction/PendingUsersAction";

const PendingUsersActionsContainer = props => {
  return <PendingUsersActions props={props} />;
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PendingUsersActionsContainer);
