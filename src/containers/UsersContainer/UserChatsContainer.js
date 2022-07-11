import { connect } from "react-redux";
import UserChats from "../../components/Chat/UserChats";
import getChatsAction from "../../actions/chat/chats-action";

const mapStateToProps = state => ({
  chats: state.chats,
  currentUser: state.user,
  notification: state.notification,
});

const mapDispatchToProps = dispatch => ({
  getChats: () => dispatch(getChatsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserChats);
