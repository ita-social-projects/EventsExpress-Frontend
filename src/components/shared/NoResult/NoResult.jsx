import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./NoResult.scss";

const NoResult = ({ title, subTitle, photo, btnTitle }) => {
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
        {btnTitle}
      </button>
    </>
  );
};

NoResult.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  photo: PropTypes.string,
  btnTitle: PropTypes.string,
};

NoResult.defaultProps = {
  title: "",
  subTitle: "",
  photo: "",
  btnTitle: "",
};

export default NoResult;
