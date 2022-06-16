import React from "react";
import PropTypes from "prop-types";
import { SIDEBAR_LIST_ITEMS } from "../../../constants/leftSidebarConstants";
import AuthComponent from "../../../security/authComponent";
import LeftSidebarItems from "./LeftSidebarItems";
import Roles from "../../../constants/userRoles";
import LeftSidebarListItem from "./LeftSidebarListItem";

const getSecurity = {
  DEFAULT: {},
  USER: { rolesMatch: Roles.User },
  ADMIN: { rolesMatch: Roles.ADMIN },
  ANONYMOUS: { onlyAnonymous: true },
};

const LeftSidebarItemsSecurity = ({
  handleSidebarToggle,
  user,
  msgForRead,
}) => (
  <>
    <AuthComponent rolesMatch={Roles.User}>
      <LeftSidebarListItem
        handleSidebarToggle={handleSidebarToggle}
        link={`/user/${user.id}`}
        pageName="Profile"
        faviconIconClass="fa fa-user"
      />
    </AuthComponent>
    {SIDEBAR_LIST_ITEMS.map(({ securityState, items }) => {
      return (
        <AuthComponent key={securityState} {...getSecurity[securityState]}>
          <LeftSidebarItems
            items={items}
            handleSidebarToggle={handleSidebarToggle}
          />
        </AuthComponent>
      );
    })}
    <AuthComponent>
      <LeftSidebarListItem
        handleSidebarToggle={handleSidebarToggle}
        link="/user_chats"
        pageName="Comuna"
        faviconIconClass="fas fa-comments"
        badgeContent={msgForRead().length}
      />
    </AuthComponent>
  </>
);

LeftSidebarItemsSecurity.defaultProps = {
  handleSidebarToggle: () => {},
  user: {},
  msgForRead: () => null,
};

LeftSidebarItemsSecurity.propTypes = {
  handleSidebarToggle: PropTypes.func,
  user: PropTypes.object,
  msgForRead: PropTypes.func,
};

export default LeftSidebarItemsSecurity;
