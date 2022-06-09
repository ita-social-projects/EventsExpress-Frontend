import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Member from "./Member";
import { MEMBERS_TITLE } from "../../../constants/AboutUs";
import "./Members.scss";
import SpinnerWrapper from "../../../containers/spinner";

const Members = ({ members, hasMembers, showContent, getMembers }) => {
  useEffect(() => {
    if (!hasMembers) {
      getMembers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SpinnerWrapper showContent={showContent}>
      <div className="about-members">
        <h3 className="members-title">{MEMBERS_TITLE}</h3>
        <div className="members-container">
          {members.map(member => (
            <Member key={member.id} {...member} />
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
