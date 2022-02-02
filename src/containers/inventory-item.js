import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import OwnerSeeItem from "../components/inventory/ownerSeeItem";
import OwnerEditItemForm from "../components/inventory/ownerEditItem";
import VisitorSeeItem from "../components/inventory/VisitorSeeItem";
import VisitorEditItemForm from "../components/inventory/visitorTakeItem";
import { getInventoriesByEventId } from "../actions/inventory/inventory-list-action";
import {
  deleteUsersInventory,
  editUsersInventory,
} from "../actions/users/users-inventories-action";
import {
  deleteItem,
  editItem,
  addItem,
  wantToTake,
} from "../actions/inventory/inventar-action";

class InventoryItemWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlreadyGetDetailed: false,
      isEdit: props.isNew,
      isWillTake: false,
    };

    this.onAlreadyGet = this.onAlreadyGet.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onWillTake = this.onWillTake.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { usersInventories } = this.props;
    if (usersInventories.isPending !== prevProps.usersInventories.isPending) {
      const { item, user } = this.props;
      if (
        !this.state.isWillTake &&
        usersInventories.data.some(
          e => e.userId === user.id && e.inventoryId === item.id,
        )
      )
        this.onAlreadyGet();
    }
  }

  onAlreadyGet = () => {
    this.setState(() => ({
      showAlreadyGetDetailed: true,
      isWillTake: true,
    }));
  };

  onSubmit = values => {
    this.setState({
      isEdit: false,
    });
    this.props.changeDisableEdit(false);

    if (!values.id) {
      return this.props.addItem(values, this.props.eventId);
    }
    const value = values;
    value.unitOfMeasuring = {
      id: values.unitOfMeasuring.id,
    };
    return this.props.editItem(values, this.props.eventId);
  };

  onCancel = () => {
    this.setState({
      isEdit: false,
    });
    this.props.changeDisableEdit(false);
  };

  onWillTake = inventar => {
    const data = {
      eventId: this.props.eventId,
      userId: this.props.user.id,
      inventoryId: inventar.id,
      quantity: Number(inventar.willTake),
    };

    if (!this.state.isWillTake) {
      this.onAlreadyGet();
      this.props.wantToTake(data);
    } else {
      this.props.editUsersInventory(data);
    }

    this.setState({
      isEdit: false,
    });
    this.props.changeDisableEdit(false);
  };

  onWillNotTake = inventar => {
    const data = {
      eventId: this.props.eventId,
      userId: this.props.user.id,
      inventoryId: inventar.id,
    };

    this.setState({
      showAlreadyGetDetailed: false,
      isWillTake: false,
    });
    this.props.deleteUsersInventory(data);
  };

  getItemsTakenByUserQuantity() {
    const { item, user, usersInventories } = this.props;
    const itemsQuantity = usersInventories.data.find(
      e => e.userId === user.id && e.inventoryId === item.id,
    );
    return itemsQuantity === undefined ? 0 : itemsQuantity.quantity;
  }

  markItemAsEdit = () => {
    this.setState({
      isEdit: true,
    });
    this.props.changeDisableEdit(true);
  };

  deleteItemFromList = inventar => {
    this.props.deleteItem(inventar.id, this.props.eventId);
  };

  render() {
    const { item, user, usersInventories, isMyEvent, disabledEdit } =
      this.props;
    const alreadyGet = usersInventories.data.reduce((acc, cur) => {
      return cur.inventoryId === item.id ? acc + cur.quantity : acc + 0;
    }, 0);
    return (
      <div className="row p-1 d-flex align-items-center" key={item.id}>
        {this.state.isEdit && isMyEvent && (
          <OwnerEditItemForm
            onSubmit={this.onSubmit}
            onCancel={this.onCancel}
            unitOfMeasuringState={this.props.unitOfMeasuringState}
            alreadyGet={alreadyGet}
            initialValues={item}
          />
        )}

        {this.state.isEdit && !isMyEvent && (
          <VisitorEditItemForm
            onSubmit={this.onWillTake}
            onCancel={this.onCancel}
            alreadyGet={alreadyGet - this.getItemsTakenByUserQuantity()}
            initialValues={item}
          />
        )}

        {!this.state.isEdit && isMyEvent && (
          <OwnerSeeItem
            item={item}
            disabledEdit={disabledEdit}
            showAlreadyGetDetailed={this.state.showAlreadyGetDetailed}
            onAlreadyGet={this.onAlreadyGet}
            markItemAsEdit={this.markItemAsEdit}
            deleteItemFromList={this.deleteItemFromList}
            usersInventories={this.props.usersInventories}
          />
        )}

        {!this.state.isEdit && !isMyEvent && (
          <VisitorSeeItem
            item={item}
            disabledEdit={disabledEdit}
            showAlreadyGetDetailed={this.state.showAlreadyGetDetailed}
            alreadyGet={alreadyGet}
            onAlreadyGet={this.onAlreadyGet}
            onWillNotTake={this.onWillNotTake}
            markItemAsEdit={this.markItemAsEdit}
            usersInventories={this.props.usersInventories}
            user={user}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  unitOfMeasuringState: state.unitsOfMeasuring,
});

const mapDispatchToProps = dispatch => {
  return {
    delete_item: (itemId, eventId) => dispatch(deleteItem(itemId, eventId)),
    edit_item: (item, eventId) => dispatch(editItem(item, eventId)),
    add_item: (item, eventId) => dispatch(addItem(item, eventId)),
    get_inventories_by_event_id: eventId =>
      dispatch(getInventoriesByEventId(eventId)),
    delete_users_inventory: data => dispatch(deleteUsersInventory(data)),
    edit_users_inventory: data => dispatch(editUsersInventory(data)),
    want_to_take: data => dispatch(wantToTake(data)),
  };
};

InventoryItemWrapper.propTypes = {
  isNew: PropTypes.bool,
  isMyEvent: PropTypes.bool,
  usersInventories: PropTypes.object,
  user: PropTypes.object,
  item: PropTypes.object,
  changeDisableEdit: PropTypes.func,
  addItem: PropTypes.func,
  eventId: PropTypes.string,
  editItem: PropTypes.func,
  wantToTake: PropTypes.func,
  editUsersInventory: PropTypes.func,
  deleteUsersInventory: PropTypes.func,
  deleteItem: PropTypes.func,
  disabledEdit: PropTypes.bool,
  unitOfMeasuringState: PropTypes.object,
};
InventoryItemWrapper.defaultProps = {
  isNew: false,
  isMyEvent: false,
  usersInventories: {},
  deleteUsersInventory: () => {},
  deleteItem: () => {},
  user: {},
  item: {},
  changeDisableEdit: () => {},
  addItem: () => {},
  eventId: "",
  editItem: () => {},
  wantToTake: () => {},
  editUsersInventory: () => {},
  disabledEdit: false,
  unitOfMeasuringState: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InventoryItemWrapper);
