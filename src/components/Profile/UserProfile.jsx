import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "moment-timezone";
import CustomAvatar from "../CustomAvatar/CustomAvatar";
import RatingAverage from "../Rating/RatingAverage";
import "./UserProfile.scss";
import AuthComponent from "../../security/authComponent";
import UserProfileTabs from "./UserProfileTabs";
import UserProfileRoutes from "./UserProfileRoutes";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";
import UserProfileInfo from "./UserProfileInfo";
import UserInteraction from "./UserInteraction";

const UserProfile = ({
  currentUserId,
  isDataReady,
  getUser,
  resetUser,
  events,
  name,
  email,
  birthday,
  gender,
  categories,
  userId,
  attitude,
  rating,
  setAttitude,
  getEventsByType,
  history,
  ...props
}) => {
  const { id } = props.match.params;
  useEffect(() => {
    if (!isDataReady) {
      getUser(id);
    }
    return () => {
      resetUser();
    };
  }, []);

  const onLike = () => {
    setAttitude({
      userFromId: currentUserId,
      userToId: id,
      attitude: 0,
    });
  };

  const onDislike = () => {
    setAttitude({
      userFromId: currentUserId,
      userToId: id,
      attitude: 1,
    });
  };

  const onReset = () => {
    setAttitude({
      userFromId: currentUserId,
      userToId: id,
      attitude: 2,
    });
  };
  return (
    <SpinnerContainer showContent={isDataReady}>
      <div className="info">
        <AuthComponent>
          <div className="col-4 user">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="user-profile-avatar">
                <CustomAvatar size="big" name={name} userId={id} />
                <RatingAverage value={rating} direction="row" />
              </div>
              <UserInteraction
                attitude={attitude}
                id={id}
                onDislike={onDislike}
                onLike={onLike}
                onReset={onReset}
              />
            </div>
          </div>
        </AuthComponent>
        <UserProfileInfo
          name={name}
          email={email}
          birthday={birthday}
          gender={gender}
          categories={categories}
        />
      </div>
      <div className="mt-2">
        <UserProfileTabs
          userId={id}
          getEventsByType={getEventsByType}
          history={history}
        />
        <UserProfileRoutes
          events={events}
          currentUser={currentUserId}
          userId={id}
          getEventsByType={getEventsByType}
        />
      </div>
    </SpinnerContainer>
  );
};

UserProfile.propTypes = {
  history: PropTypes.object,
  events: PropTypes.object,
  currentUserId: PropTypes.string,
  name: PropTypes.string,
  userId: PropTypes.string,
  email: PropTypes.string,
  setAttitude: PropTypes.func,
  getEventsByType: PropTypes.func,
  getUser: PropTypes.func,
  resetUser: PropTypes.func,
  isDataReady: PropTypes.bool,
  birthday: PropTypes.string,
  gender: PropTypes.number,
  rating: PropTypes.number,
  attitude: PropTypes.number,
  categories: PropTypes.array,
  match: PropTypes.object,
};

UserProfile.defaultProps = {
  history: {},
  events: {},
  currentUserId: "",
  name: "",
  userId: "",
  email: "",
  setAttitude: () => {},
  getUser: () => {},
  resetUser: () => {},
  getEventsByType: () => {},
  isDataReady: false,
  birthday: "",
  gender: 0,
  rating: 0,
  attitude: 0,
  categories: [],
  match: {},
};

export default UserProfile;
