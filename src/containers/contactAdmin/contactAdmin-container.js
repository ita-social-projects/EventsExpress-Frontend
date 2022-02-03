import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactAdmin from "../../components/contactAdmin/contactAdmin-component";
import contactAdmin from "../../actions/contactAdmin/contact-admin-add-action";

const ContactAdminContainer = ({ user, contactAdminDispatch }) => {
  const submit = values => {
    return contactAdminDispatch(values);
  };
  return <ContactAdmin onSubmit={submit} user={user} />;
};

ContactAdminContainer.defaultProps = {
  contactAdminDispatch: () => {},
  user: {},
};

ContactAdminContainer.propTypes = {
  contactAdminDispatch: PropTypes.func,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  contactAdmin: state.contactAdmin,
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    contactAdminDispatch: data => dispatch(contactAdmin(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactAdminContainer);
