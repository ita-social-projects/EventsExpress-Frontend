import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";

const UserRoleDisplay = ({ user, isCurrentUser, callback }) => {
  //! TODO : ARRAY INDEX USE AS A KEY (temporary solution)
  // eslint-disable-next-line react/no-array-index-key
  const roles = user.roles.map((r, i) => <div key={i}>{r.name}</div>);

  return (
    <>
      <td className="align-middle">{roles}</td>

      <td className="align-middle">
        {!isCurrentUser ? (
          <IconButton className="text-info" size="small" onClick={callback}>
            <i className="fas fa-edit" />
          </IconButton>
        ) : null}
      </td>
    </>
  );
};

UserRoleDisplay.defaultProps = {
  user: {},
  callback: () => {},
  isCurrentUser: false,
};

UserRoleDisplay.propTypes = {
  user: PropTypes.object,
  callback: PropTypes.func,
  isCurrentUser: PropTypes.bool,
};

export default UserRoleDisplay;
