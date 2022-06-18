import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginContainer from "../../containers/LoginContainer/LoginContainer";
import RegisterContainer from "../../containers/RegisterContainer/RegisterContainer";
import { TogleOpenWind } from "../../actions/modalWind-action";
import "./ModalWind.scss";

const ModalWind = ({ setIsOpen, isOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModeSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      onClose={handleClose}
      className={`auth-modal ${isOpen ? "" : "closed"}`}
    >
      <button onClick={handleClose} type="button">
        <ImCross />
      </button>
      {isLogin && <LoginContainer />}
      {!isLogin && <RegisterContainer handleClose={handleClose} />}
      {/* MOVE TO LOGIN CONTAINER {isLogin && <Modalwind2 />} */}
      <div className="modal-switcher">
        {isLogin && (
          <h4>
            You haven’t got an account?
            <button
              type="button"
              onClick={handleModeSwitch}
              className="switcher-btn"
            >
              Register
            </button>{" "}
          </h4>
        )}
        {!isLogin && (
          <h4>
            Have an account?{" "}
            <button
              type="button"
              onClick={handleModeSwitch}
              className="switcher-btn"
            >
              Login
            </button>
          </h4>
        )}
      </div>
    </div>
  );
};

ModalWind.defaultProps = {
  setIsOpen: () => {},
  isOpen: false,
};

ModalWind.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = dispatch => ({
  setIsOpen: data => dispatch(TogleOpenWind(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWind);
