import { connect } from "react-redux";
import PropTypes from "prop-types";

const AuthComponent = ({ id, roles, rolesMatch, children, onlyAnonymous }) =>
  (rolesMatch && id && roles[0] === rolesMatch) || (onlyAnonymous && !id) || id
    ? children
    : null;

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
