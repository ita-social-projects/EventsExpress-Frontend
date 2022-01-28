import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class AuthComponent extends Component {
  render() {
    const { id, roles, rolesMatch, children, onlyAnonymous } = this.props;

    if (rolesMatch) {
      if (id && roles === rolesMatch) {
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
  id: PropTypes.number,
  roles: PropTypes.object,
  rolesMatch: PropTypes.bool,
  children: PropTypes.array,
  onlyAnonymous: PropTypes.func,
};

AuthComponent.defaultProps = {
  id: null,
  roles: {},
  rolesMatch: false,
  children: [],
  onlyAnonymous: () => {},
};

const mapStateToProps = state => ({
  id: state.user.id,
  roles: state.user.roles,
});

export default connect(mapStateToProps)(AuthComponent);
