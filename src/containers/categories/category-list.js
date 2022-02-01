import React from "react";
import PropTypes from "prop-types";
import CategoryList from "../../components/category/category-list";

const CategoryListWrapper = ({ data }) => <CategoryList data_list={data} />;

CategoryListWrapper.defaultProps = {
  data: [],
};

CategoryListWrapper.propTypes = {
  data: PropTypes.array,
};

export default CategoryListWrapper;
