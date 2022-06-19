import { connect } from "react-redux";
import AuthModal from "../../components/AuthModal/AuthModal";
import { TogleOpenWind } from "../../actions/modalWind-action";

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = dispatch => ({
  setIsOpen: data => dispatch(TogleOpenWind(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
