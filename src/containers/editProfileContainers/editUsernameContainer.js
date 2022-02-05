import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EditUsername from "../../components/profile/editProfile/editUsername";
import editUsername from "../../actions/redactProfile/userName-edit-action";

class EditUsernameContainer extends React.Component {
  submit = value => {
    return this.props.editUsername(value);
  };

  render() {
    return <EditUsername onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => {
  return { editUsername: state.editUsername };
};

const mapDispatchToProps = dispatch => {
  return {
    editUsername: name => dispatch(editUsername(name)),
  };
};
EditUsernameContainer.propTypes = {
  editUsername: PropTypes.func,
};

EditUsernameContainer.defaultProps = {
  editUsername: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUsernameContainer);
