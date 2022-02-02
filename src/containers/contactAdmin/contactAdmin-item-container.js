import React from "react";
import PropTypes from "prop-types";
import ContactAdminItem from "../../components/contactAdmin/contactAdmin-item-component";

const ContactAdminItemWrapper = ({ item }) => (
  <tr>
    <ContactAdminItem item={item} />
  </tr>
);

ContactAdminItemWrapper.defaultProps = {
  item: {},
};

ContactAdminItemWrapper.propTypes = {
  item: PropTypes.object,
};

export default ContactAdminItemWrapper;
