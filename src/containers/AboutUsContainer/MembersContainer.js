import { connect } from "react-redux";
import Members from "../../components/AboutUs/Members/Members";
import getMembersAction from "../../actions/aboutUs/membersActions";
import { ZERO_AMOUNT } from "../../constants/numberConstants";

const mapStateToProps = state => ({
  members: state.aboutUs.members,
  hasMembers: state.aboutUs.members.length !== ZERO_AMOUNT,
  showContent: !state.aboutUs.error || !state.aboutUs.loading,
});

const mapDispatchToProps = dispatch => ({
  getMembers: () => dispatch(getMembersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Members);
