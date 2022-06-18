import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SelectCategories from "../../components/SelectCategories/SelectCategories";
import setUserCategory from "../../actions/editProfile/userCategoryAddAction";
import getCategories from "../../actions/category/categoryListAction";
import getUserCategories from "../../actions/category/userCategoryAction";

// TODO Refactor class component
class SelectCategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.props.getUserCategoriesDispatch();
    this.props.getCategoriesDispatch();
  };

  handleSubmit(event) {
    return this.props.setUserCategory({
      categories: event.categories,
    });
  }

  render() {
    return (
      <SelectCategories
        items={this.props.allCategories.data}
        initialValues={{ categories: this.props.user.categories }}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

SelectCategoriesContainer.defaultProps = {
  getUserCategoriesDispatch: () => {},
  getCategoriesDispatch: () => {},
  setUserCategory: () => {},
  allCategories: {},
  user: {},
};

SelectCategoriesContainer.propTypes = {
  getUserCategoriesDispatch: PropTypes.func,
  getCategoriesDispatch: PropTypes.func,
  setUserCategory: PropTypes.func,
  allCategories: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    allCategories: state.categories,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserCategory: data => dispatch(setUserCategory(data)),
    getCategoriesDispatch: () => dispatch(getCategories()),
    getUserCategoriesDispatch: () => dispatch(getUserCategories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectCategoriesContainer);
