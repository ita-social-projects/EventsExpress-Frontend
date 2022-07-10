import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import {
  addUnitOfMeasuring,
  setUnitOfMeasuringEdited,
} from "../../actions/unitOfMeasuring/unitOfMeasuring-add-action";
import UnitOfMeasuringEdit from "../../components/UnitOfMeasuring/UnitOfMeasuringEdit";
import getCategoriesOfMeasuring from "../../actions/categoryOfMeasuring/categoryOfMeasuring-list-action";
import { ADD_UNIT } from "../../constants/unitOfMeasuringConstatns";

const UnitOfMeasuringAddWrapper = ({
  item,
  add,
  editCancel,
  allCategories,
  editedUnitOfMeasuring,
}) => {
  useEffect(() => {
    getCategoriesOfMeasuring();
  }, []);

  const submit = values => {
    return add({ ...values });
  };

  return item.id !== editedUnitOfMeasuring ? (
    <tr>
      <td className="align-middle align-items-stretch" width="20%">
        <div className="d-flex align-items-center justify-content-left">
          <p>{ADD_UNIT}</p>
          <IconButton className="text-info" onClick={setUnitOfMeasuringEdited}>
            <i className="fas fa-plus-circle" />
          </IconButton>
        </div>
      </td>
    </tr>
  ) : (
    <tr>
      <UnitOfMeasuringEdit
        item={item}
        onSubmit={submit}
        cancel={editCancel}
        allCategories={allCategories}
      />
      <td />
    </tr>
  );
};

UnitOfMeasuringAddWrapper.propTypes = {
  item: PropTypes.object,
  add: PropTypes.func,
  editCancel: PropTypes.bool,
  allCategories: PropTypes.array,
  editedUnitOfMeasuring: PropTypes.number,
};

UnitOfMeasuringAddWrapper.defaultProps = {
  item: {},
  add: () => {},
  editCancel: false,
  allCategories: [],
  editedUnitOfMeasuring: null,
};

const mapStateToProps = state => ({
  allCategories: state.categoriesOfMeasuring,
  status: state.add_unitOfMeasuring,
  editedUnitOfMeasuring: state.unitsOfMeasuring.editedUnitOfMeasuring,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    add: data => dispatch(addUnitOfMeasuring(data)),
    setUnitOfMeasuringEdited: () =>
      dispatch(setUnitOfMeasuringEdited(props.item.id)),
    getCategoryOfMeasuring: () => dispatch(getCategoriesOfMeasuring()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnitOfMeasuringAddWrapper);
