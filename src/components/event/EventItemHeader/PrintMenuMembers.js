import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import getAttitudeClassName from "../attitude/attitude";
import ContainerCustomAvatar from "../../avatar/custom-avatar";

const PrintMenuMembers = ({ members, handleSetAnchorEl, setAnchorElM }) =>
  members.map(user => (
    <MenuItem
      key={user.id}
      onClick={() => handleSetAnchorEl(null, setAnchorElM)}
      style={{ overflow: "visible" }}
    >
      <div
        className={`d-flex align-items-center border-bottom w-100 ${getAttitudeClassName(
          user.attitude,
        )}`}
      >
        <div className="flex-grow-1">
          <Link to={`/user/${user.id}`} className="btn-custom">
            <div className="d-flex align-items-center border-bottom">
              <ContainerCustomAvatar
                userId={user.photoUrl}
                name={user.username}
              />
              <div>
                <h5 className="pl-2">{user.username}</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </MenuItem>
  ));

export default PrintMenuMembers;
