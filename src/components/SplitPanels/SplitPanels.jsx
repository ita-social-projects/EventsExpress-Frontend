import React, { useState } from "react";
import Split from "react-split";
import "./SplitPanels.scss";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { Link } from "react-router-dom";
import {
  COLLAPSED_INDEX_OFF,
  COLLAPSED_INDEX_ON,
  SPLIT_SCREENS,
} from "../../constants/splitScreensConstants";
import CollapseButton from "./CollapseButton";
import Options from "../shared/Options/Options";
import { SQUARE_STANDART } from "../../constants/imageSizesConstants";

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
  } = SPLIT_SCREENS;

  const [collapsedIndex, setCollapsedIndex] = useState(null);

  return (
    <Split
      direction="horizontal"
      collapsed={collapsedIndex}
      sizes={[SQUARE_STANDART, SQUARE_STANDART]}
      className="split-panels"
      style={{ height: "780px" }}
    >
      <div
        className={`left-side ${
          collapsedIndex === COLLAPSED_INDEX_OFF ? "collapsed" : "full-size"
        }`}
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
              onClick={() => setCollapsedIndex(COLLAPSED_INDEX_ON)}
              icon={
                collapsedIndex === COLLAPSED_INDEX_OFF ? (
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
        className={`right-side ${
          collapsedIndex === COLLAPSED_INDEX_ON ? "collapsed" : ""
        }`}
      >
        <div className="option-button">
          <Options>
            <CollapseButton
              onClick={() => setCollapsedIndex(COLLAPSED_INDEX_OFF)}
              icon={
                collapsedIndex === COLLAPSED_INDEX_ON ? (
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
    </Split>
  );
};

export default SplitPanels;
