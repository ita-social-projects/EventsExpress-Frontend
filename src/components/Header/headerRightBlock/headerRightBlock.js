import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ModalWind from "../../modal-wind";
import AuthComponent from "../../../security/authComponent";
import DropdownMenu from "../../../containers/dropdownMenuContainer";
import headerConstants from "../../../constants/headerConstants";
import { TogleOpenWind } from "../../../actions/modalWind-action";
import "./headerRightBlock.scss";

const { SIGN_IN } = headerConstants;

const HeaderRightBlock = ({ user, openModal, isMobileHeaderOpen }) => {
  const { id } = user.id ? user : {};
  const countOfPixelsForTabletBrainpoint = 768;
  const [countOfPixelsForDisappearLogin, setCountOfPixelsForDisappearLogin] =
    useState(0);

  window.addEventListener("resize", () => {
    setCountOfPixelsForDisappearLogin(window.screen.availWidth);
  });

  return (
    <li>
      {!id && (
        <AuthComponent onlyAnonymous>
          <button
            className={`${
              countOfPixelsForDisappearLogin <=
                countOfPixelsForTabletBrainpoint &&
              isMobileHeaderOpen === false &&
              countOfPixelsForDisappearLogin !== 0
                ? "disappear-login"
                : "login-link"
            }`}
            type="button"
            onClick={() => openModal(true)}
          >
            {SIGN_IN}
          </button>
          <ModalWind />
        </AuthComponent>
      )}
      <DropdownMenu />
    </li>
  );
};

HeaderRightBlock.defaultProps = {
  user: {},
  openModal: () => ({}),
  isMobileHeaderOpen: PropTypes.any,
};

HeaderRightBlock.propTypes = {
  user: PropTypes.object,
  openModal: PropTypes.func,
  isMobileHeaderOpen: PropTypes.any,
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: isOpen => dispatch(TogleOpenWind(isOpen)),
  };
};

export default connect(() => ({}), mapDispatchToProps)(HeaderRightBlock);
