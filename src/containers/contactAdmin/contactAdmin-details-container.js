import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactAdminDetails from "../../components/contactAdmin/contactAdmin-details-component";
import changeIssueStatus from "../../actions/contactAdmin/contact-admin-issue-status-action";
import getMessageById from "../../actions/contactAdmin/contact-admin-item-action";
import issueStatusEnum from "../../constants/issue-status-enum";

class ContactAdminDetailsContainer extends React.Component {
  componentWillMount = () => {
    const { id } = this.props.match.params;
    this.props.getMessageByIdDispatch(id);
  };

  onResolve = resolutionDetails => {
    this.props.resolve(
      this.props.contactAdminData.messageId,
      resolutionDetails,
      this.props.contactAdminData.status,
    );
  };

  onInProgress = resolutionDetails => {
    this.props.inProgress(
      this.props.contactAdminData.messageId,
      resolutionDetails,
      this.props.contactAdminData.status,
    );
  };

  render() {
    return (
      <ContactAdminDetails
        items={this.props.contactAdminData}
        onResolve={this.onResolve}
        onInProgress={this.onInProgress}
      />
    );
  }
}

ContactAdminDetailsContainer.defaultProps = {
  inProgress: () => {},
  match: {},
  resolve: () => {},
  contactAdminData: {},
  getMessageByIdDispatch: () => {},
};

ContactAdminDetailsContainer.propTypes = {
  inProgress: PropTypes.func,
  match: PropTypes.object,
  resolve: PropTypes.func,
  contactAdminData: PropTypes.object,
  getMessageByIdDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  contactAdminData: state.contactAdminItem.data,
});

const mapDispatchToProps = dispatch => {
  return {
    getMessageByIdDispatch: id => dispatch(getMessageById(id)),
    resolve: (messageId, resolutionDetails) =>
      dispatch(
        changeIssueStatus(
          messageId,
          resolutionDetails,
          issueStatusEnum.Resolve,
        ),
      ),
    inProgress: (messageId, resolutionDetails) =>
      dispatch(
        changeIssueStatus(
          messageId,
          resolutionDetails,
          issueStatusEnum.InProgress,
        ),
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactAdminDetailsContainer);
