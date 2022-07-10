import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { TogleOpenWind, isOpen } from "../../actions/modalWind-action";
import logOut from "../../actions/login/logout-action";
import { OOPS } from "../../constants/labelConstants";
import { UNAUTHORIZED_MESSAGE } from "../../constants/httpCodesConstants";

class Unauthorized extends Component {
  componentWillMount = () => {
    const { resetError, logout, setStatus } = this.props;
    resetError();
    logout();
    setStatus(true);
  };

  render() {
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>{OOPS}</h1>
          </div>
          <h2>{UNAUTHORIZED_MESSAGE}</h2>
        </div>
      </div>
    );
  }
}

Unauthorized.propTypes = {
  resetError: propTypes.func,
  logout: propTypes.func,
  setStatus: propTypes.func,
};

Unauthorized.defaultProps = {
  resetError: () => {},
  logout: () => {},
  setStatus: () => {},
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logOut());
    },
    setStatus: data => dispatch(TogleOpenWind(data)),
    resetError: () => {
      dispatch(isOpen(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Unauthorized);
