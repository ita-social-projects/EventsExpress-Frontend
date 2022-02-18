import React from "react";
import "./AboutUs.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import aboutImg1 from "../../assets/images/aboutUs/aboutImg-1.png";
import aboutImg2 from "../../assets/images/aboutUs/aboutImg-2.png";
import aboutImg3 from "../../assets/images/aboutUs/aboutImg-3.png";
import aboutImg4 from "../../assets/images/aboutUs/aboutImg-4.png";
import aboutImg5 from "../../assets/images/aboutUs/aboutImg-5.png";
import constants from "../../constants/AboutUs";
import ModalWind from "../modal-wind";

const {
  JOIN_US,
  ABOUT_US,
  CONTACT_US,
  SEARCH_EVENTS,
  CREATE_YOUR_EVENT,
  FIND_EVENTS,
  GET_CONNECTED,
  HAVE_FUN_TOGETHER,
} = constants;

const AboutUs = ({ user }) => {
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
        {!user.id ? (
          <ModalWind
            renderButton={action => (
              <button
                className="about__info__button"
                onClick={action}
                type="button"
              >
                {JOIN_US}
              </button>
            )}
          />
        ) : (
          <NavLink to="/contactAdmin" className="about__info__button">
            {CONTACT_US}
          </NavLink>
        )}
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

AboutUs.defaultProps = {
  user: {},
};

AboutUs.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, {})(AboutUs);
