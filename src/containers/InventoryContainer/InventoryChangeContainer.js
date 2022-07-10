import { connect } from "react-redux";
import {
  addItem,
  editItem,
  wantToTake,
} from "../../actions/inventory/inventar-action";
import { editUsersInventory } from "../../actions/users/users-inventories-action";
import InventoryChange from "../../components/Inventory/InventoryItem/InventoryChange/InventoryChange";

const mapStateToProps = state => ({
  eventId: state.event.data.id,
  unitsOfMeasuring: state.unitsOfMeasuring.units,
});

const mapDispatchToProps = dispatch => ({
  addInventory: (item, eventId) => dispatch(addItem(item, eventId)),
  editInventory: (item, eventId) => dispatch(editItem(item, eventId)),
  editMemberInventory: data => dispatch(editUsersInventory(data)),
  wantToTakeHandle: data => dispatch(wantToTake(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryChange);
