import React from "react";
import PropTypes from "prop-types";
import CategoryList from "../../components/Category/CategoryList";

const CategoryListContainer = ({ data }) => <CategoryList data_list={data} />;

CategoryListContainer.defaultProps = {
  data: [],
};

CategoryListContainer.propTypes = {
  data: PropTypes.array,
};

export default CategoryListContainer;
