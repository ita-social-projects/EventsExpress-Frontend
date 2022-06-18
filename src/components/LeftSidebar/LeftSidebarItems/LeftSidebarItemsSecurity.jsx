import React from "react";
import PropTypes from "prop-types";
import {
  SIDEBAR_LIST_ITEMS,
  COMUNA_NAME,
  PROFILE_PAGE_NAME,
  SECURITY_TYPES,
} from "../../../constants/leftSidebarConstants";
import AuthComponent from "../../../security/authComponent";
import LeftSidebarItems from "./LeftSidebarItems";
import { ROLES } from "../../../constants/userConstants";
import LeftSidebarListItem from "./LeftSidebarListItem";
import { COMMENTS_ICON, USERS_ICON } from "../../../constants/iconsConstants";
import { USER, USER_CHATS } from "../../../constants/routesConstants";

const LeftSidebarItemsSecurity = ({
  handleSidebarToggle,
  user,
  msgForRead,
}) => (
  <>
    <AuthComponent rolesMatch={ROLES.USER}>
      <LeftSidebarListItem
        handleSidebarToggle={handleSidebarToggle}
        link={`${USER}/${user.id}`}
        pageName={PROFILE_PAGE_NAME}
        faviconIconClass={USERS_ICON}
      />
    </AuthComponent>
    {SIDEBAR_LIST_ITEMS.map(({ securityState, items }) => {
      return (
        <AuthComponent key={securityState} {...SECURITY_TYPES[securityState]}>
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
        link={USER_CHATS}
        pageName={COMUNA_NAME}
        faviconIconClass={COMMENTS_ICON}
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
