import React from "react";
import {
  TEXT_BLOCK1_BODY,
  TEXT_BLOCK1_HEADING,
  TEXT_BLOCK2_HEADING,
  TEXT_BLOCK2_BODY,
  INFO_CARDS,
} from "../../../constants/AboutUs";
import "./InfoSection.scss";

const InfoSection = () => {
  return (
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
  );
};

export default InfoSection;
