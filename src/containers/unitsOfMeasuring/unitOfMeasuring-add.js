import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import {
  addUnitOfMeasuring,
  setUnitOfMeasuringEdited,
} from "../../actions/unitOfMeasuring/unitOfMeasuring-add-action";
import UnitOfMeasuringEdit from "../../components/unitOfMeasuring/unitOfMeasuring-edit";
import getCategoriesOfMeasuring from "../../actions/categoryOfMeasuring/categoryOfMeasuring-list-action";

const pStyle = {
  margin: "0px",
};

class UnitOfMeasuringAddWrapper extends React.Component {
  componentDidMount() {
    this.props.getCategoriesOfMeasuring();
  }

  submit = values => {
    return this.props.add({ ...values });
  };

  render() {
    return this.props.item.id !== this.props.editedUnitOfMeasuring ? (
      <tr>
        <td className="align-middle align-items-stretch" width="20%">
          <div className="d-flex align-items-center justify-content-left">
            <p style={pStyle}>Add unit</p>
            <IconButton
              className="text-info"
              onClick={this.props.setUnitOfMeasuringEdited}
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
          cancel={this.props.editCancel}
          allCategories={this.props.allCategories}
        />
        <td />
      </tr>
    );
  }
}

UnitOfMeasuringAddWrapper.propTypes = {
  item: PropTypes.object,
  add: PropTypes.func,
  editCancel: PropTypes.bool,
  allCategories: PropTypes.array,
  editedUnitOfMeasuring: PropTypes.number,
  setUnitOfMeasuringEdited: PropTypes.func,
  getCategoriesOfMeasuring: PropTypes.func,
};

UnitOfMeasuringAddWrapper.defaultProps = {
  item: {},
  add: () => {},
  editCancel: false,
  allCategories: [],
  editedUnitOfMeasuring: null,
  setUnitOfMeasuringEdited: () => {},
  getCategoriesOfMeasuring: () => {},
};

const mapStateToProps = state => ({
  all_categories: state.categoriesOfMeasuring,
  status: state.add_unitOfMeasuring,
  editedUnitOfMeasuring: state.unitsOfMeasuring.editedUnitOfMeasuring,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    add: data => dispatch(addUnitOfMeasuring(data)),
    set_unitOfMeasuring_edited: () =>
      dispatch(setUnitOfMeasuringEdited(props.item.id)),
    get_CategoriesOfMeasuring: () => dispatch(getCategoriesOfMeasuring()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitOfMeasuringAddWrapper);
