import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ModalWind from "../../ModalWind/ModalWind";
import AuthComponent from "../../AuthComponent/AuthComponent";
import DropdownMenu from "../../../containers/DropDownMenuContainer/DropdownMenuContainer";
import { TogleOpenWind } from "../../../actions/modalWind/modalWindAction";
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
        <ModalWind />
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
