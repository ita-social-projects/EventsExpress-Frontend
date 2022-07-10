import { connect } from "react-redux";
import { deleteItem } from "../../actions/inventory/inventar-action";
import { deleteUsersInventory } from "../../actions/users/users-inventories-action";
import InventoryView from "../../components/Inventory/InventoryItem/InventoryView/InventoryView";

const mapStateToProps = state => ({
  usersInventories: state.usersInventories,
  inventories: state.inventories,
  eventId: state.event.data.id,
  userId: state.user.id,
});

const mapDispatchToProps = dispatch => ({
  handleInventoryItemDelete: (itemId, eventId) =>
    dispatch(deleteItem(itemId, eventId)),
  deleteUserInventory: data => dispatch(deleteUsersInventory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryView);
