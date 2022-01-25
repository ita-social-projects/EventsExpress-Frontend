﻿import React, { Component } from "react";
import NotificationTemplateItem from "./notification-template-item";

export default class NotificationTemplates extends Component {
  renderTemplates = arr =>
    arr.map(template => (
      <NotificationTemplateItem key={template.id} template={template} />
    ));

  render() {
    const { templates } = this.props;

    return (
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>{this.renderTemplates(templates)}</tbody>
      </table>
    );
  }
}
