import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MEMBERS_TITLE } from "../../../constants/AboutUs";
import "./Members.scss";

const Members = ({ aboutUs: { members, loading, error }, getMembers }) => {
  useEffect(() => {
    if (members.length === 0) {
      getMembers();
    }
  }, [members, getMembers]);

  if (loading || error) {
    return null;
  }
  return (
    <div className="about-members">
      <h3 className="members-title">{MEMBERS_TITLE}</h3>
      <div className="members-container">
        {members.map(({ name, description, img }) => (
          <div className="member" key={name}>
            <img className="member__image" src={img} alt={name} />
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

Members.defaultProps = {
  aboutUs: {
    members: [],
    loading: false,
    error: null,
  },
  getMembers: () => {},
};

Members.propTypes = {
  getMembers: PropTypes.func,
  aboutUs: PropTypes.object,
};

export default Members;
