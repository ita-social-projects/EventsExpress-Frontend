import React from "react";
import PropTypes from "prop-types";
import NotificationTemplateItem from "./NotificationTemplateItem";
import { NOTIFICATION_TEMPLATES } from "../../constants/notificationConstants";

const NotificationTemplate = ({ templates }) => {
  return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">{NOTIFICATION_TEMPLATES.DEFAULT}</th>
          <th scope="col">{NOTIFICATION_TEMPLATES.TITLE}</th>
          <th scope="col">{NOTIFICATION_TEMPLATES.SUBJECT}</th>
          <th scope="col">{NOTIFICATION_TEMPLATES.MESSAGE}</th>
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

NotificationTemplate.defaultProps = {
  templates: [],
};

NotificationTemplate.propTypes = {
  templates: PropTypes.array,
};

export default NotificationTemplate;
