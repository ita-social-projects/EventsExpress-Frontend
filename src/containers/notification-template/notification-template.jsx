import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllTemplates } from "../../actions/notification-templates";
import NotificationTemplates from "../../components/notification-template";

class NotificationTemplateWrapper extends Component {
  componentDidMount = () => {
    this.props.getAllTemplates();
  };

  render() {
    const { data } = this.props.notificationTemplates;
    return <NotificationTemplates templates={data} />;
  }
}

const mapStateToProps = state => ({
  notificationTemplates: state.NotificationTemplates,
});

const mapDispatchToProps = dispatch => ({
  get_all_templates: () => dispatch(getAllTemplates()),
});

NotificationTemplateWrapper.propTypes = {
  getAllTemplates: PropTypes.func,
  notificationTemplates: PropTypes.object,
};

NotificationTemplateWrapper.defaultProps = {
  getAllTemplates: () => {},
  notificationTemplates: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationTemplateWrapper);
