import React from "react";
import PropTypes from "prop-types";
import NotificationTemplateItem from "./NotificationTemplateItem";

const NotificationTemplate = ({ templates }) => {
  return (
    <table className="table table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">{"#"}</th>
          <th scope="col">{"Title"}</th>
          <th scope="col">{"Subject"}</th>
          <th scope="col">{"Message"}</th>
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
