import { connect } from "react-redux";
import PropTypes from "prop-types";

const AuthComponent = ({ id, roles, rolesMatch, children, onlyAnonymous }) => {
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
  return null;
};

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
