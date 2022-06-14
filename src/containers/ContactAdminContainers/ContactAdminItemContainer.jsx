import React from "react";
import PropTypes from "prop-types";
import ContactAdminItem from "../../components/ContactAdmin/ContactAdminItemComponent";

const ContactAdminItemContainer = ({ item }) => (
  <tr>
    <ContactAdminItem item={item} />
  </tr>
);

ContactAdminItemContainer.defaultProps = {
  item: {},
};

ContactAdminItemContainer.propTypes = {
  item: PropTypes.object,
};

export default ContactAdminItemContainer;
