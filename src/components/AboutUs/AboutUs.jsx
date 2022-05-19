import React from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import aboutImg1 from "../../assets/images/aboutUs/aboutImg-1.png";
import aboutImg2 from "../../assets/images/aboutUs/aboutImg-2.png";
import aboutImg3 from "../../assets/images/aboutUs/aboutImg-3.png";
import aboutImg4 from "../../assets/images/aboutUs/aboutImg-4.png";
import constants from "../../constants/AboutUs";
import "./AboutUs.scss";

const {
  BANNER_QUOTE,
  EVENTS_BTN_TEXT,
  TEXT_BLOCK1_HEADING,
  TEXT_BLOCK1_BODY,
  GET_CONNECTED,
  CREATE_YOUR_EVENT,
  HAVE_FUN_TOGETHER,
  NEW_CONTACTS,
  TEXT_BLOCK2_HEADING,
  TEXT_BLOCK2_BODY,
  MEMBER1,
  MEMBER2,
  MEMBER3,
} = constants;

const INFO_CARDS = [
  { img: aboutImg1, text: GET_CONNECTED },
  { img: aboutImg2, text: CREATE_YOUR_EVENT },
  { img: aboutImg3, text: HAVE_FUN_TOGETHER },
  { img: aboutImg4, text: NEW_CONTACTS },
];

const MEMBERS = [MEMBER1, MEMBER2, MEMBER3];

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <div className="banner-content">
          <h1 className="banner-content__quote">{BANNER_QUOTE}</h1>
          <NavLink to="/home/events" className="btn-events">
            {EVENTS_BTN_TEXT}
          </NavLink>
        </div>
      </div>

      <div className="about-info">
        <div className="info-text__left">
          <h1 className="info-text__header">{TEXT_BLOCK1_HEADING}</h1>
          <p className="info-text__body">{TEXT_BLOCK1_BODY}</p>
        </div>
        <div className="info-images">
          {INFO_CARDS.map(({ img, text }) => (
            <div key={text} className="info-images__item">
              <img src={img} alt={text} />
              <div className="info-images__text">{text}</div>
            </div>
          ))}
        </div>
        <div className="right-container">
          <div className="info-text__right">
            <h1 className="info-text__header">{TEXT_BLOCK2_HEADING}</h1>
            <p className="info-text__body">{TEXT_BLOCK2_BODY}</p>
          </div>
        </div>
      </div>

      <div className="about-members">
        {MEMBERS.map(({ name, description, img }) => (
          <div className="member" key={name}>
            <div className="member__image">
              <img src={img} alt={name} />
            </div>
            <div className="member__info">
              <h1 className="member__name">{name}</h1>
              <p className="member__description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// AboutUs.defaultProps = {
//   user: {},
// };

// AboutUs.propTypes = {
//   user: PropTypes.object,
// };

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(AboutUs);
