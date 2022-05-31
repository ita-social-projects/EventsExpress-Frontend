import React from "react";
import PropTypes from "prop-types";
import LeftSidebarWrapper from "../../containers/left-sidebar";
import "./layout.css";
import "./colorlib.css";

const Layout = ({ children }) => {
  return (
    <>
      <LeftSidebarWrapper />
      <div className="main">{children}</div>
    </>
  );
};

Layout.defaultProps = {
  children: {},
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
