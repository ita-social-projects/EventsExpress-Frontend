import { connect } from "react-redux";
import InventoryItem from "../../components/Inventory/InventoryItem";
import { getInventoriesByEventId } from "../../actions/inventory/inventory-list-action";
import {
  deleteUsersInventory,
  editUsersInventory,
} from "../../actions/users/users-inventories-action";
import {
  deleteItem,
  editItem,
  addItem,
  wantToTake,
} from "../../actions/inventory/inventar-action";

const mapStateToProps = state => ({
  unitOfMeasuringState: state.unitsOfMeasuring,
});

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: (itemId, eventId) => dispatch(deleteItem(itemId, eventId)),
    edit: (item, eventId) => dispatch(editItem(item, eventId)),
    add: (item, eventId) => dispatch(addItem(item, eventId)),
    getInventoriesByEventIdHandler: eventId =>
      dispatch(getInventoriesByEventId(eventId)),
    delUsersInventory: data => dispatch(deleteUsersInventory(data)),
    editUsersInventoryHandle: data => dispatch(editUsersInventory(data)),
    wantToTakeHandle: data => dispatch(wantToTake(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryItem);
