import React from "react";
import { connect } from "react-redux";
import {
  approveUser,
  promoteToOwner,
} from "../../actions/event/event-item-view-action";
import ApprovedUsersActions from "../../components/Event/ApprovedUsersAction/ApprovedUsersActions";

const ApprovedUsersActionsContainer = props => (
  <ApprovedUsersActions props={props} />
);

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
)(ApprovedUsersActionsContainer);
