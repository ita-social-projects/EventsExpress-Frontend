import { connect } from "react-redux";
import EventList from "../../components/Event/EventList/EventList";
import { getEvents } from "../../actions/event/event-list-action";
import { EMPTY_EVENT_LIST } from "../../constants/eventConstants";

const mapStateToProps = state => ({
  items: state.events.data.items,
  isItemsAvaliable: state.events.data.items.length > EMPTY_EVENT_LIST,
  isItemsFetched: state.events.data.items !== null,
});

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
