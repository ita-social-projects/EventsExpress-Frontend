import { connect } from "react-redux";
import DraftList from "../../components/Draft/DraftList";
import { getDrafts } from "../../actions/event/event-list-action";
import { changeEventStatus } from "../../actions/event/event-item-view-action";
import {
  EMPTY_DRAFT_LIST,
  EVENT_STATUS_ENUM,
} from "../../constants/eventConstants";
import { PAGINATION_PAGES_TRIGGER } from "../../constants/paginationConstants";

const mapStateToProps = ({ events }) => ({
  items: events.data.items,
  isItemsAvaliable: events.data.items.length > EMPTY_DRAFT_LIST,
  isItemsFetched: events.data.items !== null,
  isPages: events.data.pageViewModel.totalPages > PAGINATION_PAGES_TRIGGER,
  pageNumber: events.data.pageViewModel.pageNumber,
  totalPages: events.data.pageViewModel.totalPages,
  isDeleted: events.isDeleted,
});
const mapDispatchToProps = dispatch => ({
  getDraftsAction: page => dispatch(getDrafts(page)),
  deleteEvent: (eventId, reason) => {
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.DELETED));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DraftList);
