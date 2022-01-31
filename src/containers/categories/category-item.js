import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import CategoryItem from "../../components/category/category-item";
import CategoryEdit from "../../components/category/category-edit";
import addCategory, {
  setCategoryEdited,
} from "../../actions/category/category-add-action";
import deleteCategory from "../../actions/category/category-delete-action";

const CategoryItemWrapper = ({
  deleteCategoryDispatch,
  setCategoryEditedDispatch,
  categoryGroups,
  editCancelDispatch,
  editedCategory,
  saveCategoryDispatch,
  item,
}) => {
  const save = values => {
    const categoryGroup =
      typeof values.categoryGroup === "string"
        ? JSON.parse(values.categoryGroup)
        : values.categoryGroup;
    return saveCategoryDispatch({ ...values, id: item.id, categoryGroup });
  };

  return (
    <tr>
      {item.id === editedCategory ? (
        <CategoryEdit
          key={item.id + editedCategory}
          initialValues={item}
          groups={categoryGroups.data}
          onSubmit={save}
          cancel={editCancelDispatch}
        />
      ) : (
        <CategoryItem item={item} callback={setCategoryEditedDispatch} />
      )}
      <td className="align-middle align-items-stretch">
        <div className="d-flex align-items-center justify-content-center">
          <IconButton
            className="text-danger"
            size="small"
            onClick={deleteCategoryDispatch}
          >
            <i className="fas fa-trash" />
          </IconButton>
        </div>
      </td>
    </tr>
  );
};

CategoryItemWrapper.defaultProps = {
  deleteCategoryDispatch: () => {},
  setCategoryEditedDispatch: () => {},
  saveCategoryDispatch: () => {},
  editCancelDispatch: () => {},
  item: {},
  editedCategory: null,
  categoryGroups: {},
};

CategoryItemWrapper.propTypes = {
  deleteCategoryDispatch: PropTypes.func,
  setCategoryEditedDispatch: PropTypes.func,
  saveCategoryDispatch: PropTypes.func,
  editCancelDispatch: PropTypes.func,
  item: PropTypes.object,
  editedCategory: PropTypes.number,
  categoryGroups: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    status: state.add_category,
    editedCategory: state.categories.editedCategory,
    categoryGroups: state.categoryGroups,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCategoryDispatch: () => dispatch(deleteCategory(props.item.id)),
    saveCategoryDispatch: data => dispatch(addCategory(data)),
    setCategoryEditedDispatch: () => dispatch(setCategoryEdited(props.item.id)),
    editCanselDispatch: () => dispatch(setCategoryEdited(null)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryItemWrapper);
