import React from "react";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import ContainerCustomAvatar from "../CustomAvatar/CustomAvatar";
import { ZERO_INDEX } from "../../constants/numberConstants";

export const handleSetAnchorEl = (e, setEvent) => {
  const event = e?.currentTarget || null;
  setEvent(event);
};

export const renderMembers = (
  first,
  visitorsCount,
  avatar,
  handleClickOnMember,
) => {
  return first ? (
    <Button
      title="Visitors"
      className="btn-custom"
      onClick={handleClickOnMember}
    >
      <Badge overlap="circle" badgeContent={visitorsCount} color="primary">
        <ContainerCustomAvatar
          className={avatar}
          userId={first.id}
          name={first.username}
        />
      </Badge>
    </Button>
  ) : (
    <Tooltip title="Visitors">
      <IconButton>
        <Badge badgeContent={visitorsCount} color="primary">
          <i className="fa fa-users" />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

export const renderOwners = (owners, avatar, handleClickOnOwners) => (
  <Button
    title={owners[ZERO_INDEX].username}
    className="btn-custom"
    onClick={handleClickOnOwners}
  >
    <Badge overlap="circle" badgeContent={owners.length} color="primary">
      <ContainerCustomAvatar
        className={avatar}
        userId={owners[ZERO_INDEX].id}
        name={owners[ZERO_INDEX].username}
      />
    </Badge>
  </Button>
);
