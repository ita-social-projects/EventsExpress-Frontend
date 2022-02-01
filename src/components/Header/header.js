import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ModalWind from "../modal-wind";
import AuthComponent from "../../security/authComponent";
import "./header.css";
import logout from "../../actions/login/logout-action";
import CustomAvatar from "../avatar/custom-avatar";
import Roles from "../../constants/userRoles";
import addEvent from "../../actions/event/event-add-action";

class Header extends Component {
  logoutReset = () => {
    this.props.hub.stop();
    this.props.logout();
  };

  render() {
    const { id, name } = this.props.user.id !== null ? this.props.user : {};

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light extraHeaderStyles"
        id="bgcolornav"
      >
        <div className="navbar-brand">
          <Link to="/home" className="nav-link" id="EEButton">
            EVENTS EXPRESS
          </Link>
        </div>
        <ul className="navbar-nav mr-auto"></ul>
        <span className="form-inline my-2 my-lg-0">
          <AuthComponent rolesMatch={Roles.User}>
            <div className="my-2 my-sm-0">
              <div
                role="button"
                tabIndex={0}
                className="btn btn-light"
                id="headbtn"
                onClick={this.props.addEvent}
                aria-hidden
              >
                Create Event
              </div>
            </div>
          </AuthComponent>
          <AuthComponent onlyAnonymous>
            <div className="my-2 my-sm-0">
              {!id && (
                <ModalWind
                  renderButton={action => (
                    <div
                      role="button"
                      tabIndex={0}
                      id="headbtn"
                      className="btn btn-light navbtns"
                      variant="contained"
                      onClick={action}
                      aria-hidden
                    >
                      Sign In/Up
                    </div>
                  )}
                />
              )}
            </div>
          </AuthComponent>
          <AuthComponent>
            <div className="my-2 my-sm-0">
              <div className="btn-group">
                <div
                  type="button"
                  className="dropdown-toggle d-flex flex-row alignItemsCenter"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <p id="userNameAlign">{name}</p>
                  <CustomAvatar size="small" userId={id} name={name} />
                </div>
                <div className="dropdown-menu dropdown-menu-right bgcolorwhite">
                  <AuthComponent rolesMatch={Roles.User}>
                    <Link className="removedecorations" to={`/user/${id}`}>
                      <button
                        className="dropdown-item bgcolorwhite"
                        type="button"
                      >
                        my events
                      </button>
                    </Link>
                  </AuthComponent>
                  <AuthComponent>
                    <Link className="removedecorations" to="/editProfile">
                      <button
                        className="dropdown-item bgcolorwhite"
                        type="button"
                      >
                        my profile
                      </button>
                    </Link>
                  </AuthComponent>
                  <button
                    className="dropdown-item bgcolorwhite"
                    type="button"
                    onClick={this.logoutReset}
                  >
                    log out
                  </button>
                  <button className="dropdown-item bgcolorwhite" type="button">
                    help and feedback
                  </button>
                </div>
              </div>
            </div>
          </AuthComponent>
        </span>
      </nav>
    );
  }
}

Header.defaultProps = {
  user: {},
  addEvent: () => {},
  logout: () => {},
  hub: {},
};

Header.propTypes = {
  user: PropTypes.object,
  addEvent: PropTypes.func,
  hub: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    user: state.user,
    hub: state.hubConnections.chatHub,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
    add_event: () => dispatch(addEvent()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
