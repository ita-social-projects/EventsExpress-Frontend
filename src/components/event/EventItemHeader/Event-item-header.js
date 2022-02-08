import React, { useState } from "react";
import { Menu } from "@material-ui/core";
import Moment from "react-moment";
import propTypes from "prop-types";
import CardHeader from "@material-ui/core/CardHeader";
import useStyle from "../CardStyle/CardStyle";
import PrintMenuMembers from "./PrintMenuMembers";
import PrintMenuItems from "./PrintMenuItems";
import "./event-item-header.css";
import {
  renderOwners,
  renderMembers,
  handleSetAnchorEl,
} from "../../helpers/EventItemHeaderUtils";

const EventHeader = ({ members, countVisitor, owners, dateFrom, title }) => {
  const [anchorElM, setAnchorElM] = useState(null);
  const [anchorElO, setAnchorElO] = useState(null);
  const firstMember = members ? members[0] : null;
  const { avatar } = useStyle;
  const MAPPER = [
    {
      id: 1,
      anchorEl: anchorElO,
      onClose: setAnchorElO,
      children: (
        <PrintMenuItems
          owners={owners}
          handleSetAnchorEl={handleSetAnchorEl}
          setAnchorElO={setAnchorElO}
        />
      ),
    },
    {
      id: 2,
      anchorEl: anchorElM,
      onClose: setAnchorElM,
      children: (
        <PrintMenuMembers
          members={members}
          handleSetAnchorEl={handleSetAnchorEl}
          setAnchorElM={setAnchorElM}
        />
      ),
    },
  ];
  return (
    <>
      {MAPPER.map(el => (
        <Menu
          key={el.id}
          id="menu-for-members"
          anchorEl={el.anchorElO}
          keepMounted
          open={Boolean(el.anchorElO)}
          onClose={() => handleSetAnchorEl(null, el.setAnchorElO)}
        >
          {el.children}
        </Menu>
      ))}

      <CardHeader
        avatar={renderOwners(owners, avatar, e =>
          handleSetAnchorEl(e, setAnchorElO),
        )}
        action={renderMembers(firstMember, countVisitor, avatar, e =>
          handleSetAnchorEl(e, setAnchorElM),
        )}
        title={title}
        subheader={
          <Moment format="D MMM YYYY" withTitle>
            {dateFrom}
          </Moment>
        }
        classes={{ title: "title" }}
      />
    </>
  );
};

EventHeader.propTypes = {
  members: propTypes.array,
  countVisitor: propTypes.number,
  owners: propTypes.array,
  dateFrom: propTypes.string,
  title: propTypes.string,
};

EventHeader.defaultProps = {
  members: [],
  countVisitor: null,
  owners: [],
  dateFrom: "",
  title: "",
};

export default EventHeader;
