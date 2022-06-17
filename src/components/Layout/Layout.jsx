import React from "react";
import PropTypes from "prop-types";
import LeftSidebarContainer from "../../containers/LeftSidebarContainer/LeftSidebarContainer";
import "./Layout.scss";
import "./Colorlib.scss";

const Layout = ({ children }) => {
  return (
    <>
      <LeftSidebarContainer />
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
