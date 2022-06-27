import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import OwnerSeeItem from "../../components/Inventory/OwnerSeeItem";
import OwnerEditItemForm from "../../components/Inventory/OwnerEditItem";
import VisitorSeeItem from "../../components/Inventory/VisitorSeeItem";
/* import VisitorEditItemForm from "../components/Inventory/VisitorTakeItem"; */
import VisitorEditItemForm from "../../components/Inventory/VisitorTakeItem";
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
import {
  DEFAULT_ZERO_VALUE,
  ZERO_AMOUNT,
} from "../../constants/numberConstants";

// TODO Refactor class component
class InventoryItemContainer extends Component {
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
      return this.props.add(values, this.props.eventId);
    }
    const value = values;
    value.unitOfMeasuring = {
      id: values.unitOfMeasuring.id,
    };
    return this.props.edit(values, this.props.eventId);
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
      this.props.wantToTakeHandle(data);
    } else {
      this.props.editUsersInventoryHandle(data);
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
    this.props.delUsersInventory(data);
  };

  getItemsTakenByUserQuantity() {
    const { item, user, usersInventories } = this.props;
    const itemsQuantity = usersInventories.data.find(
      e => e.userId === user.id && e.inventoryId === item.id,
    );
    return (!itemsQuantity && itemsQuantity.quantity) || ZERO_AMOUNT;
  }

  markItemAsEdit = () => {
    this.setState({
      isEdit: true,
    });
    this.props.changeDisableEdit(true);
  };

  deleteItemFromList = inventar => {
    this.props.delete(inventar.id, this.props.eventId);
  };

  render() {
    const { item, user, usersInventories, isMyEvent, disabledEdit } =
      this.props;
    const alreadyGet = usersInventories.data.reduce((acc, cur) => {
      return cur.inventoryId === item.id ? acc + cur.quantity : acc;
    }, DEFAULT_ZERO_VALUE);
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
    delete: (itemId, eventId) => dispatch(deleteItem(itemId, eventId)),
    edit: (item, eventId) => dispatch(editItem(item, eventId)),
    add: (item, eventId) => dispatch(addItem(item, eventId)),
    getInventoriesByEventIdHandler: eventId =>
      dispatch(getInventoriesByEventId(eventId)),
    delUsersInventory: data => dispatch(deleteUsersInventory(data)),
    editUsersInventoryHandle: data => dispatch(editUsersInventory(data)),
    wantToTakeHandle: data => dispatch(wantToTake(data)),
  };
};

InventoryItemContainer.propTypes = {
  isNew: PropTypes.bool,
  isMyEvent: PropTypes.bool,
  usersInventories: PropTypes.object,
  user: PropTypes.object,
  item: PropTypes.object,
  changeDisableEdit: PropTypes.func,
  add: PropTypes.func,
  eventId: PropTypes.string,
  edit: PropTypes.func,
  wantToTakeHandle: PropTypes.func,
  editUsersInventoryHandle: PropTypes.func,
  delUsersInventory: PropTypes.func,
  delete: PropTypes.func,
  disabledEdit: PropTypes.bool,
  unitOfMeasuringState: PropTypes.object,
};
InventoryItemContainer.defaultProps = {
  isNew: false,
  isMyEvent: false,
  usersInventories: {},
  delUsersInventory: () => {},
  delete: () => {},
  user: {},
  item: {},
  changeDisableEdit: () => {},
  add: () => {},
  eventId: "",
  edit: () => {},
  wantToTakeHandle: () => {},
  editUsersInventoryHandle: () => {},
  disabledEdit: false,
  unitOfMeasuringState: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InventoryItemContainer);
