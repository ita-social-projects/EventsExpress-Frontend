import React, { useState } from "react";
import Split from "react-split";
import PropTypes from "prop-types";
import "./SplitPanels.scss";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
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
    MAIN_TEXT_SECOND,
    DISCOVER_MORE,
  } = constantsSplitScreens;

  const [collapsedIndex, setCollapsedIndex] = useState(false);

  return (
    <Split
      direction="vertical"
      // sizes={[80, 50]}
      style={{ width: "100%", height: "100%" }}
    >
      <Split
        collapsed={collapsedIndex}
        className="firstScreen"
        // sizes={[80, 50]}
        maxSize={[100, 100]}
      >
        <div className="firstSplit">
          <div className="firstSplit__text">
            <div className="main__text">
              {CREATE_PART}
              <span className="back-shape">{RESHAPE}</span>
              <span className="back-shape">{INDUSTRIES}</span>
              {INTO}
              <span className="back-shape">{INSPIRED}</span>
              <span className="back-shape">{COMMUNITIES}</span>
            </div>
            <Link className="discover__button" to="/about">
              <button className="about-us" type="button">
                {DISCOVER_MORE}
                <IoIosArrowRoundForward className="icon" />
              </button>
            </Link>
          </div>
          <div className="firstSplit__button">
            <Options className="option-icon__left">
              <CollapseButton
                onClick={() => setCollapsedIndex(1)}
                icon={<IoIosArrowDropleftCircle />}
              />
            </Options>
          </div>
        </div>
        {/* <div><AboutUs /></div> */}
        {/* </Split> */}
        <div className="secondSplit">
          <div className="second__text">
            <div>
              <Options>
                <CollapseButton
                  onClick={() => setCollapsedIndex(0)}
                  icon={
                    <IoIosArrowDroprightCircle style={{ color: "white" }} />
                  }
                />
              </Options>
            </div>
            <h1 className="header__text">{MAIN_TEXT_SECOND}</h1>
            <Link className="discover__button" to="/landing">
              <button type="button">
                <IoIosArrowRoundBack className="icon" />
                {DISCOVER_MORE}
              </button>
            </Link>
          </div>
        </div>
        {/* </Split> */}
      </Split>
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
