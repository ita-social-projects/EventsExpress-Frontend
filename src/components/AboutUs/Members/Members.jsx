import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Member from "./Member";
import { MEMBERS_TITLE } from "../../../constants/AboutUs";
import "./Members.scss";
import SpinnerWrapper from "../../../containers/spinner";

const Members = ({ members, loading, error, getMembers }) => {
  useEffect(() => {
    if (members.length === 0) {
      getMembers();
    }
  }, [members, getMembers]);

  return (
    <SpinnerWrapper showContent={!loading || !error}>
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
  loading: false,
  error: null,
  getMembers: () => {},
};

Members.propTypes = {
  getMembers: PropTypes.func,
  members: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default Members;
