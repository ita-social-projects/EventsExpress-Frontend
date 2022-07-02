import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import InventoryHeaderButton from "./InventoryHeaderButton";
import { getInventoryData } from "../../actions/inventory/inventory-list-action";
import InventoryItemContainer from "../../containers/InventoryItemContainer/InventoryItemContainer";
import { editUsersInventory } from "../../actions/users/users-inventories-action";
import { INVENTORY_HEADER_COLS } from "../../constants/inventoryConstatns";

class InventoryList extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: true,
      disabledEdit: false,
      isNew: false,
    };

    this.handleOnClickCaret = this.handleOnClickCaret.bind(this);
    this.addItemToList = this.addItemToList.bind(this);
  }

  addItemToList = () => {
    this.setState({
      disabledEdit: true,
      isNew: true,
    });
  };

  handleOnClickCaret = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  changeDisableEdit = value => {
    if (!value) {
      this.setState({
        isNew: false,
      });
    }

    this.setState({
      disabledEdit: value,
    });
  };

  render() {
    const { inventories, event, user, usersInventories } = this.props;
    const isMyEvent =
      event.organizers.find(x => x.id === user.id) !== undefined;
    let updateList = [];
    if (inventories.items) {
      updateList = inventories.items.map(item => {
        return {
          ...item,
          isTaken:
            usersInventories.data.filter(
              dataItem =>
                user.id === dataItem.userId && item.id === dataItem.inventoryId,
            ).length > 0,
        };
      });
    }
    return (
      <>
        <InventoryHeaderButton
          isOpen={this.state.isOpen}
          handleOnClickCaret={this.handleOnClickCaret}
        />

        {this.state.isOpen && (
          <div>
            {isMyEvent && (
              <IconButton
                disabled={this.state.disabledEdit}
                onClick={this.addItemToList}
                size="small"
              >
                <span className="icon">
                  <i className="fa-sm fas fa-plus"></i>
                </span>{" "}
                &nbsp;{" Add item"}
              </IconButton>
            )}
            <div className="container">
              <div className="row p-1">
                <div className="col col-md-3">
                  <b>{INVENTORY_HEADER_COLS.ITEM_NAME}</b>
                </div>
                <div className="col">
                  <b>{INVENTORY_HEADER_COLS.ALREADY_GET}</b>
                </div>
                {!isMyEvent && (
                  <div className="col col-md-1">
                    <b>{INVENTORY_HEADER_COLS.WILL_TAKE}</b>
                  </div>
                )}
                <div className="col col-md-2">
                  <b>{INVENTORY_HEADER_COLS.COUNT}</b>
                </div>
                <div className="col col-md-2">
                  <b>{INVENTORY_HEADER_COLS.UNITS}</b>
                </div>
                <div className="col col-md-2"></div>
              </div>
              {this.state.isNew && (
                <InventoryItemContainer
                  item={{
                    itemName: "",
                    needQuantity: 0,
                    unitOfMeasuring: {},
                  }}
                  user={user}
                  usersInventories={usersInventories}
                  inventories={inventories}
                  isMyEvent={isMyEvent}
                  disabledEdit={this.state.disabledEdit}
                  changeDisableEdit={this.changeDisableEdit}
                  getInventories={this.props.getInventories}
                  eventId={this.props.eventId}
                  isNew
                />
              )}
              {updateList.map(item => {
                return (
                  <InventoryItemContainer
                    item={item}
                    user={user}
                    usersInventories={usersInventories}
                    inventories={inventories}
                    isMyEvent={isMyEvent}
                    disabledEdit={this.state.disabledEdit}
                    changeDisableEdit={this.changeDisableEdit}
                    getInventories={this.props.getInventories}
                    eventId={this.props.eventId}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

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

InventoryList.defaultProps = {
  inventories: [],
  event: {},
  user: {},
  usersInventories: [],
  getInventories: [],
  eventId: null,
};

InventoryList.propTypes = {
  inventories: PropTypes.array,
  event: PropTypes.object,
  user: PropTypes.object,
  usersInventories: PropTypes.array,
  getInventories: PropTypes.array,
  eventId: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(InventoryList);
