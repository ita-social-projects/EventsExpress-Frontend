import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import DraftList from "../../components/Draft/DraftList";
import { getDrafts } from "../../actions/event/event-list-action";
import { setSuccessAllert } from "../../actions/alert-action";
import { changeEventStatus } from "../../actions/event/event-item-view-action";
import { EVENT_STATUS_ENUM } from "../../constants/eventConstants";
import { ALERT_MESSAGE_DELETE } from "../../constants/draftConstants";

const history = createBrowserHistory({ forceRefresh: true });

const mapStateToProps = state => ({
  items: state.events.data.items,
  isItemsAvaliable: state.events.data.items.length > 0,
  isPages: state.events.data.pageViewModel.totalPages > 0,
  pageNumber: state.events.data.pageViewModel.pageNumber,
  totalPages: state.events.data.pageViewModel.totalPages,
});
const mapDispatchToProps = dispatch => ({
  getDraftsAction: page => dispatch(getDrafts(page)),
  deleteEvent: (eventId, reason) => {
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.DELETED));
    dispatch(setSuccessAllert(ALERT_MESSAGE_DELETE));
    history.push(`/drafts`);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DraftList);
