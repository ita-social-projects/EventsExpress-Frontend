import { connect } from "react-redux";
import Members from "../../components/AboutUs/Members/Members";
import { getMembersAction } from "../../actions/aboutUs/membersActions";

const mapStateToProps = state => ({
  aboutUs: state.aboutUs,
});

const mapDispatchToProps = dispatch => ({
  getMembers: () => dispatch(getMembersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
