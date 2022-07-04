import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import getCategories from "../../actions/category/category-list-action";
import getCategoryGroups from "../../actions/categoryGroup/category-group-list-action";
import Categories from "../../components/Category/Categories";

// const mapStateToProps = state => ({
//   categories: state.categories,
// });

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(() => {}, dispatch);
// };

const mapStateToProps = state => ({
  categories: state.categories.data,
  categoryGroups: state.categoryGroups.data,
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  getCategoryGroups: () => dispatch(getCategoryGroups()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
