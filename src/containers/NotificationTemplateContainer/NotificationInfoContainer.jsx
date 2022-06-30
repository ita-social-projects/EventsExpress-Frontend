import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getTemplate,
  getTemplateProperties,
  updateTemplate,
} from "../../actions/notification-templates";
import NotificationTemplateForm from "../../components/NotificationTemplate/NotificationTemplateForm/NotificationTemplateForm";

// TODO Refactor class component
class NotificationInfoWrapper extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getNotificationTemplate(id);
    this.props.getProperties(id);
  }

  handleSubmit = async values => {
    await this.props.updateNotificationTemplate(values);
    this.props.history.push("/admin/notificationTemplates");
  };

  render() {
    const { notificationTemplate, availableProperties } = this.props;

    return (
      <>
        <NotificationTemplateForm
          initialValues={notificationTemplate}
          availableProps={availableProperties}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  notificationTemplate: state.NotificationTemplate,
});

const mapDispatchToProps = dispatch => ({
  getNotificationTemplate: id => dispatch(getTemplate(id)),
  getProperties: templateId => dispatch(getTemplateProperties(templateId)),
  updateNotificationTemplate: template => dispatch(updateTemplate(template)),
});

NotificationInfoWrapper.propTypes = {
  match: PropTypes.object,
  getNotificationTemplate: PropTypes.func,
  getProperties: PropTypes.func,
  updateNotificationTemplate: PropTypes.func,
  history: PropTypes.array,
  notificationTemplate: PropTypes.object,
  availableProperties: PropTypes.bool,
};
NotificationInfoWrapper.defaultProps = {
  match: {},
  getNotificationTemplate: () => {},
  getProperties: () => {},
  updateNotificationTemplate: () => {},
  history: [],
  notificationTemplate: {},
  availableProperties: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationInfoWrapper);
