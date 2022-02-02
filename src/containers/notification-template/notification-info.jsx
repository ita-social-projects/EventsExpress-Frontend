import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getTemplate,
  getTemplateProperties,
  updateTemplate,
} from "../../actions/notification-templates";
import NotificationTemplateForm from "../../components/notification-template/notification-template-form";

class NotificationInfoWrapper extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getTemplate(id);
    this.props.get_properties(id);
  }

  handleSubmit = async values => {
    await this.props.updateTemplate(values);
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
  get_template: id => dispatch(getTemplate(id)),
  get_properties: templateId => dispatch(getTemplateProperties(templateId)),
  update_template: template => dispatch(updateTemplate(template)),
});

NotificationInfoWrapper.propTypes = {
  match: PropTypes.object,
  getTemplate: PropTypes.func,
  get_properties: PropTypes.func,
  updateTemplate: PropTypes.func,
  history: PropTypes.array,
  notificationTemplate: PropTypes.object,
  availableProperties: PropTypes.bool,
};
NotificationInfoWrapper.defaultProps = {
  match: {},
  getTemplate: () => {},
  get_properties: () => {},
  updateTemplate: () => {},
  history: [],
  notificationTemplate: {},
  availableProperties: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationInfoWrapper);
