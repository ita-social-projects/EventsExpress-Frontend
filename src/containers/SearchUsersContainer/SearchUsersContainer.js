import { connect } from "react-redux";
import { reset } from "redux-form";
import { getSearchUsers, changeFilter } from "../../actions/users/users-action";
import SearchUsers from "../../components/SearchUsers/SearchUsers";

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    getSearchUsersDispatch: page => dispatch(getSearchUsers(page)),
    changeFilterDispatch: values => dispatch(changeFilter(values)),
    resetFiltersDispatch: () => dispatch(reset("main-search-form")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUsers);
