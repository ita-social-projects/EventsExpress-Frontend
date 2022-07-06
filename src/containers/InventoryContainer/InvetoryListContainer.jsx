import { connect } from "react-redux";
import { getInventoryData } from "../../actions/inventory/inventory-list-action";
import { editUsersInventory } from "../../actions/users/users-inventories-action";
import InventoryList from "../../components/Inventory/InventoryList/InventoryList";

const mapStateToProps = state => ({
  event: state.event.data,
  user: state.user,
  inventories: state.inventories,
  usersInventories: state.usersInventories,
});

const mapDispatchToProps = dispatch => {
  return {
    getInventories: inventories => dispatch(getInventoryData(inventories)),
    editUsersInventory: data => dispatch(editUsersInventory(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);
