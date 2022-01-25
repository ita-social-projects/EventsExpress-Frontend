import React from "react";
import { connect } from "react-redux";
import EditGender from "../../components/profile/editProfile/editGender";
import edit_Gender from "../../actions/redactProfile/gender-edit-action";

class EditGenderContainer extends React.Component {
  submit = value => {
    return this.props.editGender(value);
  };

  render() {
    return <EditGender onSubmit={this.submit} />;
  }
}

const mapStateToProps = state => {
  return state.gender;
};

const mapDispatchToProps = dispatch => {
  return {
    editGender: gender => dispatch(edit_Gender(gender)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGenderContainer);
