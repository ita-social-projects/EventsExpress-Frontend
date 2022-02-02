import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import addCategory, {
  setCategoryEdited,
} from "../../actions/category/category-add-action";
import CategoryEdit from "../../components/category/category-edit";

const CategoryAddWrapper = ({
  add,
  editedCategory,
  groups,
  item,
  setCategoryEditedDispatch,
  editCancel,
}) => {
  const submit = values => {
    const categoryGroup =
      typeof values.categoryGroup === "string"
        ? JSON.parse(values.categoryGroup)
        : values.categoryGroup;
    return add({ ...values, categoryGroup });
  };

  return item.id !== editedCategory ? (
    <tr>
      <td className="align-middle align-items-stretch" width="20%">
        <div className="d-flex align-items-center justify-content-left">
          <button
            type="button"
            className="btn btn-outline-primary ml-0"
            onClick={setCategoryEditedDispatch}
          >
            Add category
          </button>
        </div>
      </td>
      <td width="80%"></td>
    </tr>
  ) : (
    <tr>
      <CategoryEdit
        item={item}
        groups={groups}
        onSubmit={submit}
        cancel={editCancel}
      />
      <td></td>
    </tr>
  );
};

CategoryAddWrapper.defaultProps = {
  add: () => {},
  editCancel: () => {},
  setCategoryEditedDispatch: () => {},
  item: {},
  editedCategory: null,
  groups: [],
};

CategoryAddWrapper.propTypes = {
  add: PropTypes.func,
  editCancel: PropTypes.func,
  setCategoryEditedDispatch: PropTypes.func,
  item: PropTypes.object,
  editedCategory: PropTypes.number,
  groups: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    editedCategory: state.categories.editedCategory,
    counter: state.requestCount.counter,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    add: data => dispatch(addCategory(data)),
    setCategoryEditedDispatch: () => dispatch(setCategoryEdited(props.item.id)),
    editCancel: () => {
      dispatch(setCategoryEdited(null));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryAddWrapper);
