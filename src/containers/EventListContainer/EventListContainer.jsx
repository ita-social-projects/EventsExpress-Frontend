import { connect } from "react-redux";
import EventList from "../../components/Event/EventList/EventList";
import { getEvents } from "../../actions/event/event-list-action";
import { ZERO_AMOUNT } from "../../constants/numberConstants";

const mapStateToProps = state => ({
  items: state.events.data.items,
  isItemsAvaliable: state.events.data.items.length > ZERO_AMOUNT,
  isItemsFetched: state.events.data.items !== null,
});

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
