import React from "react";
import { connect } from "react-redux";
import {
  promoteToOwner,
  approveUser,
} from "../../actions/event/event-item-view-action";
import DeniedUsersAction from "../../components/event/DeniedUsersAction/Denied-users-action";

const DeniedUsersActionContainer = props => <DeniedUsersAction props={props} />;

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
)(DeniedUsersActionContainer);
