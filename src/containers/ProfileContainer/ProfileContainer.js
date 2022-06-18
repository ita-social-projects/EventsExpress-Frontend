import { connect } from "react-redux";
import getComments from "../../actions/comment/commentListAction";
import Profile from "../../components/Profile/Profile";

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => ({
  getComments: (data, page) => dispatch(getComments(data, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
