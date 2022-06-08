// import { createBrowserHistory } from "history";
import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./NoResult.scss";

const NoResult = ({ title, subTitle, photo }) => {
  // const history = createBrowserHistory({ forceRefresh: true });
  // onClick={() => history.push("/landing")}
  const history = useHistory();
  return (
    <>
      <div className="containerText">
        <h1 className="headText">{title}</h1>
        <h4 className="subTitleText">{subTitle}</h4>
      </div>
      <img src={photo} alt="No Result" className="image" />
      <button
        className="bannerButton"
        onClick={() => history.push("/landing")}
        type="button"
      >
        Back
      </button>
    </>
  );
};

NoResult.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  photo: PropTypes.string,
};

NoResult.defaultProps = {
  title: "",
  subTitle: "",
  photo: "",
};

export default NoResult;
