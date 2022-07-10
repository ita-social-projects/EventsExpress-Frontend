import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import IconButton from "@material-ui/core/IconButton";
import { renderMultiselect } from "../helpers/form-helpers";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";

// TODO: to function
const UserRoleEdit = ({
  pristine,
  submitting,
  handleSubmit,
  error,
  roles,
  cancel,
  getRolesDispatch,
}) => {
  useEffect(() => {
    getRolesDispatch();
  }, []);

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
};
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

export default UserRoleEdit;
