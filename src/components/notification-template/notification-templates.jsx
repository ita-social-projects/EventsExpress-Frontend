import React from "react";
import PropTypes from "prop-types";
import NotificationTemplateItem from "./notification-template-item";

const NotificationTemplates = ({ templates }) => {
  return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Subject</th>
          <th scope="col">Message</th>
        </tr>
      </thead>
      <tbody>
        {templates.map(template => (
          <NotificationTemplateItem key={template.id} template={template} />
        ))}
      </tbody>
    </table>
  );
};

NotificationTemplates.defaultProps = {
  templates: [],
};

NotificationTemplates.propTypes = {
  templates: PropTypes.array,
};

export default NotificationTemplates;
