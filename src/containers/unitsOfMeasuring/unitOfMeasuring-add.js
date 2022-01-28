import React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {
  add_unitOfMeasuring,
  setUnitOfMeasuringEdited,
} from "../../actions/unitOfMeasuring/unitOfMeasuring-add-action";
import UnitOfMeasuringEdit from "../../components/unitOfMeasuring/unitOfMeasuring-edit";
import get_categoriesOfMeasuring from "../../actions/categoryOfMeasuring/categoryOfMeasuring-list-action";

const pStyle = {
  margin: "0px",
};

class UnitOfMeasuringAddWrapper extends React.Component {
  submit = values => {
    return this.props.add({ ...values });
  };

  componentDidMount() {
    this.props.get_CategoriesOfMeasuring();
  }

  render() {
    return this.props.item.id !== this.props.editedUnitOfMeasuring ? (
      <tr>
        <td className="align-middle align-items-stretch" width="20%">
          <div className="d-flex align-items-center justify-content-left">
            <p style={pStyle}>Add unit</p>
            <IconButton
              className="text-info"
              onClick={this.props.set_unitOfMeasuring_edited}
            >
              <i className="fas fa-plus-circle" />
            </IconButton>
          </div>
        </td>
      </tr>
    ) : (
      <tr>
        <UnitOfMeasuringEdit
          item={this.props.item}
          onSubmit={this.submit}
          cancel={this.props.edit_cancel}
          allCategories={this.props.all_categories}
        />
        <td />
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  all_categories: state.categoriesOfMeasuring,
  status: state.add_unitOfMeasuring,
  editedUnitOfMeasuring: state.unitsOfMeasuring.editedUnitOfMeasuring,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    add: data => dispatch(add_unitOfMeasuring(data)),
    set_unitOfMeasuring_edited: () =>
      dispatch(setUnitOfMeasuringEdited(props.item.id)),
    get_CategoriesOfMeasuring: () => dispatch(get_categoriesOfMeasuring()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitOfMeasuringAddWrapper);
