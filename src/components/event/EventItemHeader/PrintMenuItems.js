import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";

import ContainerCustomAvatar from "../../avatar/custom-avatar";

const PrintMenuItems = ({ owners, handleSetAnchorEl, setAnchorElO }) =>
  owners.map(user => (
    <MenuItem
      onClick={() => handleSetAnchorEl(null, setAnchorElO)}
      key={user.id}
    >
      <div className="d-flex align-items-center border-bottom">
        <div className="flex-grow-1">
          <Link to={`/user/${user.id}`} className="btn-custom">
            <div className="d-flex align-items-center border-bottom">
              <ContainerCustomAvatar userId={user.id} name={user.username} />
              <div>
                <h5 className="pl-2">{user.username}</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MenuItem>
  ));

export default PrintMenuItems;
