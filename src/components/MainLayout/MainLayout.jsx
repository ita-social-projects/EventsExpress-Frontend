import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/MainHeader";
import Footer from "../Footer/Footer";
import AlertContainer from "../../containers/alert";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      {children}
      <Footer />
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
