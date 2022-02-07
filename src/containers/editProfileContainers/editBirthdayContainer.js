import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EditBirthday from "../../components/profile/editProfile/editBirthday";
import editBirthday from "../../actions/redactProfile/birthday-edit-action";

class EditBirthdayContainer extends React.Component {
  submit = value => {
    return this.props.editBirthday(value);
  };

  render() {
    return <EditBirthday onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => {
  return { editBirthday: state.editBirthday };
};

const mapDispatchToProps = dispatch => {
  return {
    editBirthday: date => dispatch(editBirthday(date)),
  };
};

EditBirthdayContainer.propTypes = {
  editBirthday: PropTypes.func,
};

EditBirthdayContainer.defaultProps = {
  editBirthday: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditBirthdayContainer);
