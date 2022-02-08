import React from "react";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Badge from "@material-ui/core/Badge";
import ContainerCustomAvatar from "../avatar/custom-avatar";

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
    title={owners[0].username}
    className="btn-custom"
    onClick={handleClickOnOwners}
  >
    <Badge overlap="circle" badgeContent={owners.length} color="primary">
      <ContainerCustomAvatar
        className={avatar}
        userId={owners[0].id}
        name={owners[0].username}
      />
    </Badge>
  </Button>
);
