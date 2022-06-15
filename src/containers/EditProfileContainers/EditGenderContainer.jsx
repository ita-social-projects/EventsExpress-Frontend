import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EditGender from "../../components/Profile/EditProfile/EditGender";
import editGender from "../../actions/redactProfile/gender-edit-action";

// TODO Refactor class component
class EditGenderContainer extends React.Component {
  submit = value => {
    return this.props.editGender(value);
  };

  render() {
    return <EditGender onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => {
  return { gender: state.gender };
};

const mapDispatchToProps = dispatch => {
  return {
    editGender: gender => dispatch(editGender(gender)),
  };
};

EditGenderContainer.propTypes = {
  editGender: PropTypes.func,
};

EditGenderContainer.defaultProps = {
  editGender: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGenderContainer);
