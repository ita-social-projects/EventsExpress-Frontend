import { connect } from "react-redux";
import InventoryItem from "../../components/Inventory/InventoryItem/InventoryItem";

const mapStateToProps = state => ({
  usersInventories: state.usersInventories.data,
  unitsOfMeasuring: state.unitsOfMeasuring.units,
  user: state.user,
  eventId: state.event.data.id,
});

export default connect(mapStateToProps, null)(InventoryItem);
