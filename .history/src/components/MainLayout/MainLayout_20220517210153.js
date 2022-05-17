import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/header";
import AlertContainer from "../../containers/alert";
import "./main-layout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <div className="main">{children}</div>
      {/* <Footer /> */}
      <AlertContainer />
    </div>
  );
};

MainLayout.defaultProps = {
  children: {},
};

MainLayout.propTypes = {
  children: PropTypes.object,
};
export default MainLayout;
