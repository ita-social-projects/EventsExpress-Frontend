import { connect } from "react-redux";
import DraftList from "../../components/Draft/DraftList";
import { getDrafts } from "../../actions/event/event-list-action";
import { changeEventStatus } from "../../actions/event/event-item-view-action";
import { EVENT_STATUS_ENUM } from "../../constants/eventConstants";
import { ZERO_AMOUNT } from "../../constants/numberConstants";

const mapStateToProps = state => ({
  items: state.events.data.items,
  isItemsAvaliable: state.events.data.items.length > ZERO_AMOUNT,
  isItemsFetched: state.events.data.items !== null,
  isPages: state.events.data.pageViewModel.totalPages > ZERO_AMOUNT,
  pageNumber: state.events.data.pageViewModel.pageNumber,
  totalPages: state.events.data.pageViewModel.totalPages,
  isDeleted: state.events.isDeleted,
});
const mapDispatchToProps = dispatch => ({
  getDraftsAction: page => dispatch(getDrafts(page)),
  deleteEvent: (eventId, reason) => {
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.DELETED));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DraftList);
