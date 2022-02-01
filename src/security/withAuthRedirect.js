import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { AuthenticationService } from "../services";
import usersHaveAnyOfRoles from "./auth-utils";

const apiServ = new AuthenticationService();

const withAuthRedirect = allowedRoles => Component => {
  class RedirectComponent extends React.Component {
    token = apiServ.getCurrentToken();

    render() {
      const { user } = this.props;
      if (!this.token && user.id === null)
        return <Redirect to="/unauthorized" />;

      if (
        this.token &&
        user.id !== null &&
        !usersHaveAnyOfRoles(user.roles, allowedRoles)
      )
        return <Redirect to="/forbidden" />;

      return <Component {...this.props} />;
    }
  }
  RedirectComponent.propTypes = {
    user: PropTypes.object,
  };
  RedirectComponent.defaultProps = {
    user: {},
  };

  const mapStateToProps = state => ({
    user: state.user,
  });

  return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
