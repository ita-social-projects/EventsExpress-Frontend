import React from "react";
import PropTypes from "prop-types";
import { SECURITY_TYPES } from "../../../constants/leftSidebarConstants";
import AuthComponent from "../../../security/authComponent";
import LeftSidebarNavigation from "./LeftSidebarNavigation";
import { sidebarNavigationAuth } from "../../helpers/leftSidebarAuthHelper";

const LeftSidebarNavigationSecurity = ({
  handleSidebarToggle,
  user,
  msgForRead,
}) =>
  sidebarNavigationAuth(msgForRead, user).map(({ securityState, items }) => (
    <AuthComponent key={securityState} {...SECURITY_TYPES[securityState]}>
      <LeftSidebarNavigation
        items={items}
        handleSidebarToggle={handleSidebarToggle}
      />
    </AuthComponent>
  ));

LeftSidebarNavigationSecurity.defaultProps = {
  handleSidebarToggle: () => {},
  user: {},
  msgForRead: () => null,
};

LeftSidebarNavigationSecurity.propTypes = {
  handleSidebarToggle: PropTypes.func,
  user: PropTypes.object,
  msgForRead: PropTypes.func,
};

export default LeftSidebarNavigationSecurity;
