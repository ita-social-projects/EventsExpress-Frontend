import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

const UserBlock = ({ user, isCurrentUser, block, unblock }) => {
  return isCurrentUser ? (
    <td> </td>
  ) : (
    <>
      {" "}
      <td className="align-middle">
        <div className="d-flex justify-content-center align-items-center">
          {user.isBlocked ? (
            <IconButton className="text-success" size="small" onClick={unblock}>
              <i className="fas fa-lock" />
            </IconButton>
          ) : (
            <IconButton className="text-danger" size="small" onClick={block}>
              <i className="fas fa-unlock-alt" />
            </IconButton>
          )}
        </div>
      </td>
    </>
  );
};

UserBlock.defaultProps = {
  block: () => {},
  unblock: () => {},
  isCurrentUser: false,
  user: {},
};

UserBlock.propTypes = {
  block: PropTypes.func,
  unblock: PropTypes.func,
  isCurrentUser: PropTypes.bool,
  user: PropTypes.object,
};

export default UserBlock;
