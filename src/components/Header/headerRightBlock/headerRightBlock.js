import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ModalWind from "../../modal-wind";
import AuthComponent from "../../../security/authComponent";
import DropdownMenu from "../../../containers/dropdownMenuContainer";
import headerConstants from "../../../constants/headerConstants";
import { TogleOpenWind } from "../../../actions/modalWind-action";
import "./headerRightBlock.scss";

const { SIGN_IN } = headerConstants;

const HeaderRightBlock = ({ user, openModal }) => {
  const { id } = user.id ? user : {};

  return (
    <li>
      {!id && (
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
      )}
      <DropdownMenu />
    </li>
  );
};

HeaderRightBlock.defaultProps = {
  user: {},
  openModal: () => ({}),
};

HeaderRightBlock.propTypes = {
  user: PropTypes.object,
  openModal: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: isOpen => dispatch(TogleOpenWind(isOpen)),
  };
};

export default connect(() => ({}), mapDispatchToProps)(HeaderRightBlock);
