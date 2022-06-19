import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AuthModal from "../../AuthModal/AuthModal";
import AuthComponent from "../../../security/authComponent";
import DropdownMenu from "../../../containers/DropDownMenuContainer/DropdownMenuContainer";
import { TogleOpenWind } from "../../../actions/modalWind-action";
import { HEADER_CONSTS } from "../../../constants/headersConstants";
import "./RightBlock.scss";

const { SIGN_IN } = HEADER_CONSTS;

const HeaderRightBlock = ({ openModal }) => {
  return (
    <li>
      <AuthComponent onlyAnonymous>
        <button
          className="login-link"
          type="button"
          onClick={() => openModal(true)}
        >
          {SIGN_IN}
        </button>
        <AuthModal />
      </AuthComponent>
      <DropdownMenu />
    </li>
  );
};

HeaderRightBlock.defaultProps = {
  openModal: () => ({}),
};

HeaderRightBlock.propTypes = {
  openModal: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: isOpen => dispatch(TogleOpenWind(isOpen)),
  };
};

export default connect(() => ({}), mapDispatchToProps)(HeaderRightBlock);
