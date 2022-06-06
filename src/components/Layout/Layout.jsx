import React from "react";
import PropTypes from "prop-types";
import LeftSidebarWrapper from "../../containers/left-sidebar";
import "./Layout.css";
import "./Colorlib.scss";

const Layout = ({ children }) => {
  return (
    <>
      <LeftSidebarWrapper />
      <div id="main" className="container-fluid h-100 pl-5">
        {children}
      </div>
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
