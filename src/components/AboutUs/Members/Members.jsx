import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Member from "./Member";
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
        {members.map(({ id, name, description, img }) => (
          <Member key={id} name={name} description={description} img={img} />
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
