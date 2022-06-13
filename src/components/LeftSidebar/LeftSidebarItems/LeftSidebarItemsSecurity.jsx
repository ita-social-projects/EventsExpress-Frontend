import React from "react";
import PropTypes from "prop-types";
import { SIDEBAR_LIST_ITEMS } from "../../../constants/leftSidebarConstants";
import AuthComponent from "../../../security/authComponent";
import LeftSidebarItems from "./LeftSidebarItems";
import Roles from "../../../constants/userRoles";
import LeftSidebarListItem from "./LeftSidebarListItem";

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
      switch (securityState) {
        case "DEFAULT":
          return (
            <AuthComponent>
              <LeftSidebarItems
                items={items}
                handleSidebarToggle={handleSidebarToggle}
              />
            </AuthComponent>
          );
        case "USER":
          return (
            <AuthComponent rolesMatch={Roles.User}>
              <LeftSidebarItems
                items={items}
                handleSidebarToggle={handleSidebarToggle}
              />
            </AuthComponent>
          );
        case "ADMIN":
          return (
            <AuthComponent rolesMatch={Roles.Admin}>
              <LeftSidebarItems
                items={items}
                handleSidebarToggle={handleSidebarToggle}
              />
            </AuthComponent>
          );
        case "ANONYMOUS":
          return (
            <AuthComponent onlyAnonymous>
              <LeftSidebarItems
                items={items}
                handleSidebarToggle={handleSidebarToggle}
              />
            </AuthComponent>
          );
        default:
          return (
            <LeftSidebarItems
              items={items}
              handleSidebarToggle={handleSidebarToggle}
            />
          );
      }
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
