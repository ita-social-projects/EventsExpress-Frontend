import React from "react";
import "./AboutUs.scss";
import aboutImg1 from "./images/aboutImg-1.png";
import aboutImg2 from "./images/aboutImg-2.png";
import aboutImg3 from "./images/aboutImg-3.png";
import aboutImg4 from "./images/aboutImg-4.png";
import aboutImg5 from "./images/aboutImg-5.png";
import constants from "../../constants/AboutUs";

const {
  ABOUT_US,
  SEARCH_EVENTS,
  CREATE_YOUR_EVENT,
  FIND_EVENTS,
  GET_CONNECTED,
  HAVE_FUN_TOGETHER,
} = constants;

const AboutUs = () => {
  const MAPPER = [
    { img: aboutImg1, text: SEARCH_EVENTS },
    { img: aboutImg2, text: CREATE_YOUR_EVENT },
    { img: aboutImg3, text: FIND_EVENTS },
    { img: aboutImg4, text: GET_CONNECTED },
    { img: aboutImg5, text: HAVE_FUN_TOGETHER },
  ];

  return (
    <div className="container about__container">
      <div className="about__info">
        <h1 className="about__header"> {ABOUT_US} </h1>
        <div className="about__info_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <button
          className="about__info__button"
          type="button"
          onClick={() => {
            console.log(123);
          }}
        >
          Join us
        </button>
      </div>
      <div className="about__photos">
        {MAPPER.map(({ img, text }) => (
          <div key={text} className="about__photos_item">
            <img src={img} alt={text} />
            <div className="about__photos_text">{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
