import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { confirmAlert } from "react-confirm-alert";
import UnitOfMeasuringItem from "../../components/UnitOfMeasuring/UnitOfMeasuringItem";
import UnitOfMeasuringEdit from "../../components/UnitOfMeasuring/UnitOfMeasuringEdit";
import {
  addUnitOfMeasuring,
  setUnitOfMeasuringEdited,
} from "../../actions/unitOfMeasuring/unitOfMeasuring-add-action";
import deleteUnitOfMeasuring from "../../actions/unitOfMeasuring/unitOfMeasuring-delete-action";
import getCategoriesOfMeasuring from "../../actions/categoryOfMeasuring/categoryOfMeasuring-list-action";
import "react-confirm-alert/src/react-confirm-alert.css";

// TODO: to function
class UnitOfMeasuringItemWrapper extends Component {
  save = values => {
    if (
      values.unitName === this.props.item.unitName &&
      values.shortName === this.props.item.shortName &&
      values.categoryId === this.props.item.category
    ) {
      this.props.editCancel();
    } else {
      return this.props.saveUnit({
        ...values,
        id: this.props.item.id,
      });
    }
    return values;
  };

  isDeleteConfirm = () => {
    const { unitName, shortName, id } = this.props.item;
    confirmAlert({
      title: "Do you really want to remove this Unit Of Measuring?",
      message: (
        <div>
          {"Unit name is "}
          {unitName}
          <br />
          {"Short name is "}
          {shortName}
        </div>
      ),
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            this.props.deleteUnitOfMeasuring(id);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  render() {
    const { setUnitEdited, editCancel } = this.props;

    return (
      <tr>
        {this.props.item.id === this.props.editedUnitOfMeasuring ? (
          <UnitOfMeasuringEdit
            key={this.props.item.id + this.props.editedUnitOfMeasuring}
            initialValues={this.props.item}
            onSubmit={this.save}
            cancel={editCancel}
            all_categories={this.props.allCategories}
          />
        ) : (
          <UnitOfMeasuringItem
            item={this.props.item}
            callback={setUnitEdited}
          />
        )}
        <td className="align-middle align-items-stretch">
          <div
            className="d-flex align-items-center justify-content-center"
            width="15%"
          >
            <IconButton
              className="text-danger"
              size="small"
              onClick={this.isDeleteConfirm}
            >
              <i className="fas fa-trash" />
            </IconButton>
          </div>
        </td>
      </tr>
    );
  }
}

UnitOfMeasuringItemWrapper.propTypes = {
  item: PropTypes.object,
  editCancel: PropTypes.func,
  saveUnit: PropTypes.func,
  deleteUnitOfMeasuring: PropTypes.func,
  allCategories: PropTypes.array,
  editedUnitOfMeasuring: PropTypes.string,
  setUnitEdited: PropTypes.func,
};

UnitOfMeasuringItemWrapper.defaultProps = {
  item: {},
  editCancel: () => {},
  saveUnit: () => {},
  deleteUnitOfMeasuring: () => {},
  allCategories: [],
  editedUnitOfMeasuring: "",
  setUnitEdited: () => {},
};

const mapStateToProps = state => {
  return {
    allCategories: state.categoriesOfMeasuring,
    status: state.add_unitOfMeasuring,
    editedUnitOfMeasuring: state.unitsOfMeasuring.editedUnitOfMeasuring,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCategories: () => dispatch(getCategoriesOfMeasuring()),
    deleteUnit: () => dispatch(deleteUnitOfMeasuring(props.item.id)),
    saveUnit: data => dispatch(addUnitOfMeasuring(data)),
    setUnitEdited: () => dispatch(setUnitOfMeasuringEdited(props.item.id)),
    edit??ancel: () => dispatch(setUnitOfMeasuringEdited(null)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitOfMeasuringItemWrapper);
