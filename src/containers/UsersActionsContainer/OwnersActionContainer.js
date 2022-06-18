import { connect } from "react-redux";
import { deleteFromOwners } from "../../actions/event/eventItemViewAction";
import OwnersActions from "../../components/Event/OwnersAction/OwnersAction";

const mapStateToProps = state => ({
  eventId: state.event.data.id,
  currentUserId: state.user.id,
});

const mapDispatchToProps = dispatch => ({
  deleteFromOwners: (userId, eventId) =>
    dispatch(deleteFromOwners(userId, eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnersActions);
