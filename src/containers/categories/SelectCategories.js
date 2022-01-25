﻿import React, { Component } from "react";
import { connect } from "react-redux";
import SelectCategories from "../../components/SelectCategories/SelectCategories";
import setUserCategory from "../../actions/redactProfile/userCategory-add-action";
import get_categories from "../../actions/category/category-list-action";
import get_userCategories from "../../actions/category/userCategory-action";

class SelectCategoriesWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    this.props.getuserCategories();
    this.props.get_categories();
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

const mapStateToProps = state => {
  return {
    allCategories: state.categories,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUserCategory: data => dispatch(setUserCategory(data)),
    get_categories: () => dispatch(get_categories()),
    getuserCategories: () => dispatch(get_userCategories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectCategoriesWrapper);
