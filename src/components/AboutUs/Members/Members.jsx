import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Member from "./Member";
import { MEMBERS_TITLE } from "../../../constants/aboutUsConstants";
import "./Members.scss";
import SpinnerWrapper from "../../../containers/SpinnerContainer/SpinnerContainer";

const Members = ({ members, hasMembers, showContent, getMembers }) => {
  useEffect(() => {
    if (!hasMembers) {
      getMembers();
    }
  }, []);

  return (
    <SpinnerWrapper showContent={showContent}>
      <div className="about-members">
        <h3 className="members-title">{MEMBERS_TITLE}</h3>
        <div className="members-container">
          {members.map(member => (
            <Member
              key={member.id}
              name={member.name}
              age={member.age}
              img={member.img}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </SpinnerWrapper>
  );
};

Members.defaultProps = {
  members: [],
  hasMembers: false,
  showContent: false,
  getMembers: () => {},
};

Members.propTypes = {
  getMembers: PropTypes.func,
  members: PropTypes.array,
  hasMembers: PropTypes.bool,
  showContent: PropTypes.bool,
};

export default Members;
