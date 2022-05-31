import React from "react";
import { MEMBERS_TITLE } from "../../../constants/AboutUs";
import MEMBERS from "../../../mockup-db/aboutUsMembers";
import "./Members.scss";

const Members = () => {
  return (
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
  );
};

export default Members;
