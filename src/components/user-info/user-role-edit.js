import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import IconButton from "@material-ui/core/IconButton";
import getRoles from "../../actions/roles";
import { renderMultiselect } from "../helpers/form-helpers";
import ErrorMessages from "../shared/errorMessage";

class UserRoleEdit extends Component {
  componentDidMount = () => {
    this.props.getRolesDispatch();
  };

  render() {
    const { pristine, submitting, handleSubmit, error, roles, cancel } =
      this.props;
    return (
      <>
        <td className="align-middle">
          <form onSubmit={handleSubmit} id="user-role">
            <Field
              className="form-control"
              name="roles"
              component={renderMultiselect}
              data={roles}
              valueField="id"
              textField="name"
            />
            {error && <ErrorMessages error={error} />}
          </form>
        </td>

        <td className="align-middle align-items-stretch">
          <div className="d-flex align-items-center">
            <IconButton
              className="text-success"
              size="small"
              type="submit"
              form="user-role"
              disabled={pristine || submitting}
            >
              <i className="fas fa-check" />
            </IconButton>
            <IconButton className="text-danger" size="small" onClick={cancel}>
              <i className="fas fa-times" />
            </IconButton>
          </div>
        </td>
      </>
    );
  }
}
UserRoleEdit.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  submitting: false,
  error: [],
  cancel: () => {},
  roles: [],
  getRolesDispatch: () => {},
};

UserRoleEdit.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  error: PropTypes.array,
  cancel: PropTypes.func,
  roles: PropTypes.array,
  getRolesDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  roles: state.roles.data,
});

const mapDispatchToProps = dispatch => ({
  getRolesDispatch: () => dispatch(getRoles()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "user-role" }),
)(UserRoleEdit);
