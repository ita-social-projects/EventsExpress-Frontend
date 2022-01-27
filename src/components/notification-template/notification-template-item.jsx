import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotificationTemplateItem = ({ template }) => {
  return (
    <tr key={template.id}>
      <td>{template.id}</td>
      <td>{template.title}</td>
      <td>{template.subject}</td>
      <td>{template.message}</td>
      <td>
        <Link to={`/admin/notificationTemplate/${template.id}`}>
          <IconButton className="text-info" size="small">
            <i className="fas fa-edit" />
          </IconButton>
        </Link>
      </td>
    </tr>
  );
};

NotificationTemplateItem.defaultProps = {
  template: {},
};

NotificationTemplateItem.propTypes = {
  template: PropTypes.object,
};

export default NotificationTemplateItem;
