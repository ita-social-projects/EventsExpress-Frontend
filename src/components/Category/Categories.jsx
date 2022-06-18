import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import CategoryAddContainer from "../../containers/CategoryContainers/CategoryAddContainer";
import CategoryListContainer from "../../containers/CategoryContainers/CategoryListContainer";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";
import getCategories from "../../actions/category/category-list-action";
import getCategoryGroups from "../../actions/categoryGroup/category-group-list-action";

class Categories extends Component {
  constructor(props) {
    super(props);
    props.getCategoryGroups();
    props.getCategories();
  }

  render() {
    const categories = this.props.categories.data;
    const groups = this.props.categoryGroups.data;

    return (
      <div>
        <table className="table w-100 m-auto">
          <tbody>
            <CategoryAddContainer
              item={{
                name: "",
                id: "00000000-0000-0000-0000-000000000000",
                categoryGroupId: {
                  id: "00000000-0000-0000-0000-000000000000",
                  title: "",
                },
              }}
              groups={groups}
            />
            <SpinnerContainer
              showContent={categories !== undefined && groups !== undefined}
            >
              <CategoryListContainer data={categories} />
            </SpinnerContainer>
          </tbody>
        </table>
      </div>
    );
  }
}

Categories.propTypes = {
  getCategoryGroups: propTypes.func,
  getCategories: propTypes.func,
  categories: propTypes.array,
  categoryGroups: propTypes.array,
};

Categories.defaultProps = {
  getCategoryGroups: () => {},
  getCategories: () => {},
  categories: [],
  categoryGroups: [],
};

const mapStateToProps = state => ({
  categories: state.categories,
  categoryGroups: state.categoryGroups,
});

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    getCategoryGroups: () => dispatch(getCategoryGroups()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
