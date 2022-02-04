import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AuthComponent extends Component {
  render() {
    const { id, roles, rolesMatch, children, onlyAnonymous } = this.props;
    if (rolesMatch) {
      if (id && roles[0] === rolesMatch) {
        return children;
      }
    } else if (onlyAnonymous) {
      if (!id) {
        return children;
      }
    } else if (id) {
      return children;
    }
    return <> </>;
  }
}
AuthComponent.propTypes = {
  id: PropTypes.string,
  roles: PropTypes.array,
  rolesMatch: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onlyAnonymous: PropTypes.bool,
};

AuthComponent.defaultProps = {
  id: "",
  roles: [],
  rolesMatch: "",
  children: {},
  onlyAnonymous: false,
};

const mapStateToProps = state => ({
  id: state.user.id,
  roles: state.user.roles,
});

export default connect(mapStateToProps)(AuthComponent);
