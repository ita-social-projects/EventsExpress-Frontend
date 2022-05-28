import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutUs.scss";
import { INFO_CARDS, MEMBERS, PARAGRAPHS_HEADINGS_TEXT } from "./AboutContent";

const {
  BANNER_QUOTE,
  EVENTS_BTN_TEXT,
  TEXT_BLOCK1_HEADING,
  TEXT_BLOCK1_BODY,
  TEXT_BLOCK2_HEADING,
  TEXT_BLOCK2_BODY,
  MEMBERS_TITLE,
} = PARAGRAPHS_HEADINGS_TEXT;

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <h1 className="banner-content__quote">{BANNER_QUOTE}</h1>
        <NavLink to="/home/events" className="btn-events">
          {EVENTS_BTN_TEXT}
        </NavLink>
      </div>

      <div className="about-info">
        <div className="info-text__left">
          <h1 className="info-text__header">{TEXT_BLOCK1_HEADING}</h1>
          <p className="info-text__body">{TEXT_BLOCK1_BODY}</p>
        </div>
        <div className="info-images">
          {INFO_CARDS.map(({ img, text }) => (
            <div key={text} className="info-images__item">
              <img className="info-images__item-img" src={img} alt={text} />
              <div className="info-images__text">{text}</div>
            </div>
          ))}
        </div>

        <div className="info-text__right">
          <h1 className="info-text__header">{TEXT_BLOCK2_HEADING}</h1>
          <p className="info-text__body">{TEXT_BLOCK2_BODY}</p>
        </div>
      </div>

      <div className="about-members">
        <h3 className="members-title">{MEMBERS_TITLE}</h3>
        <div className="members-container">
          {MEMBERS.map(({ name, description, img }) => (
            <div className="member" key={name}>
              <div className="member__image-container">
                <img className="member__image" src={img} alt={name} />
              </div>
              <div className="member__info">
                <h2 className="member__name">{name}</h2>
                <p className="member__description">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
