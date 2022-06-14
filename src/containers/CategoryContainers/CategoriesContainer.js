import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Categories from "../../components/Category/Categories";

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(() => {}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
