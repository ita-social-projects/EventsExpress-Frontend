import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";

const UserProfileWrapper = ({
  getUser,
  resetUser,
  setAttitude,
  getEventsByType,
  data,
  currentUser,
  events,
  ...props
}) => {
  useEffect(() => {
    getUser(props.match.params.id);

    return () => {
      resetUser();
    };
  }, []);
  return (
    <SpinnerContainer showContent={data !== null}>
      <UserProfile
        setAttitude={setAttitude}
        getEventsByType={getEventsByType}
        data={data}
        currentUser={currentUser}
        events={events}
        {...props}
      />
    </SpinnerContainer>
  );
};

UserProfileWrapper.propTypes = {
  match: PropTypes.object,
  data: PropTypes.object,
  currentUser: PropTypes.string,
  events: PropTypes.object,
  getUser: PropTypes.func,
  resetUser: PropTypes.func,
  setAttitude: PropTypes.func,
  getEventsByType: PropTypes.func,
};

UserProfileWrapper.defaultProps = {
  match: {},
  data: {},
  currentUser: "",
  events: {},
  getUser: () => {},
  resetUser: () => {},
  setAttitude: () => {},
  getEventsByType: () => {},
};

export default withRouter(UserProfileWrapper);
