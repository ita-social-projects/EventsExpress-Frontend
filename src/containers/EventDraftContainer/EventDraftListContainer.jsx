import { connect } from "react-redux";
import DraftList from "../../components/Draft/DraftList";
import { getDrafts } from "../../actions/event/event-list-action";
import { setSuccessAllert } from "../../actions/alert-action";
import { changeEventStatus } from "../../actions/event/event-item-view-action";
import { EVENT_STATUS_ENUM } from "../../constants/eventConstants";

const mapStateToProps = state => ({
  events: state.events,
});
const mapDispatchToProps = dispatch => ({
  getDraftsAction: page => dispatch(getDrafts(page)),
  alert: msg => dispatch(setSuccessAllert(msg)),
  deleteEvent: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.DELETED)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DraftList);
