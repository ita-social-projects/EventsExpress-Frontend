import React, { useState } from "react";
import Split from "react-split";
import PropTypes from "prop-types";
import "./SplitPanels.scss";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { Link } from "react-router-dom";
import constantsSplitScreens from "../../constants/SplitScreens";
import CollapseButton from "./CollapseButton";

const SplitPanels = () => {
  const {
    CREATE_PART,
    RESHAPE,
    INDUSTRIES,
    INTO,
    INSPIRED,
    COMMUNITIES,
    RIGTH_HEADER,
    RIGTH_TEXT,
    DISCOVER_MORE,
  } = constantsSplitScreens;

  const [collapsedIndex, setCollapsedIndex] = useState(null);

  return (
    <Split
      direction="horizontal"
      collapsed={collapsedIndex}
      sizes={[50, 50]}
      className="split-panels"
      style={{ height: "780px" }}
    >
      <div
        className={[
          "left-side",
          collapsedIndex === 0 ? "collapsed" : "",
          collapsedIndex === 1 ? "full-size" : "",
        ].join(" ")}
      >
        <div className="left-side__text header-text">
          <span>{CREATE_PART}</span>
          <span className="left-side__text__highlights first-square">
            {RESHAPE}&nbsp;
          </span>
          <span className="left-side__text__highlights second-square">
            {INDUSTRIES}
          </span>
          <span>{INTO}</span>
          <span className="left-side__text__highlights third-square">
            {INSPIRED}
          </span>
          <span className="left-side__text__highlights fourth-square">
            {COMMUNITIES}
          </span>
        </div>
        <div className="discover-button-container">
          <Link className="discover-button" to="/about">
            <button type="button" className="discover-button__about">
              {DISCOVER_MORE}
              <IoIosArrowRoundForward className="discover-button__icon" />
            </button>
          </Link>
        </div>
        <div className="option-button">
          <Options>
            <CollapseButton
              onClick={() => setCollapsedIndex(1)}
              icon={
                collapsedIndex === 0 ? (
                  <IoIosArrowForward className="collapse-button-icon" />
                ) : (
                  <IoIosArrowBack className="collapse-button-icon" />
                )
              }
            />
          </Options>
        </div>
      </div>
      <div
        className={["right-side", collapsedIndex === 1 ? "collapsed" : ""].join(
          " "
        )}
      >
        <div className="option-button">
          <Options>
            <CollapseButton
              onClick={() => setCollapsedIndex(0)}
              icon={
                collapsedIndex === 1 ? (
                  <IoIosArrowBack
                    className="collapse-button-icon"
                    style={{ color: "white" }}
                  />
                ) : (
                  <IoIosArrowForward
                    className="collapse-button-icon"
                    style={{ color: "white" }}
                  />
                )
              }
            />
          </Options>
        </div>
        <div className="right-side__text header-text">
          <div>
            {RIGTH_HEADER}
            <br />
            <br />
            {RIGTH_TEXT}
          </div>
        </div>
        <div className="discover-button-container">
          <Link className="discover-button" to="/landing">
            <button type="button" className="discover-button__events">
              <IoIosArrowRoundBack className="discover-button__icon" />
              {DISCOVER_MORE}
            </button>
          </Link>
        </div>
      </div>
      {/* </Split> */}
    </Split>
  );
};

const Options = ({ children }) => {
  return (
    <div className="options-div">
      <div>{children}</div>
    </div>
  );
};

Options.propTypes = {
  children: PropTypes.object,
};

Options.defaultProps = {
  children: {},
};

export default SplitPanels;
