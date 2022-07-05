import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "moment-timezone";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import CustomAvatar from "../CustomAvatar/CustomAvatar";
import RatingAverage from "../Rating/RatingAverage";
import "./UserProfile.scss";
import AuthComponent from "../../security/authComponent";
import UserProfileTabs from "./UserProfileTabs";
import UserProfileRoutes from "./UserProfileRoutes";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";
import UserProfileInfo from "./UserProfileInfo";

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
}) => {
  useEffect(() => {
    if (!isDataReady) {
      getUser(currentUserId);
    }

    return () => {
      resetUser();
    };
  }, []);

  // How to fix userID

  const onLike = () => {
    setAttitude({
      userFromId: currentUserId,
      userToId: userId,
      attitude: 0,
    });
  };

  const onDislike = () => {
    setAttitude({
      userFromId: currentUserId,
      userToId: userId,
      attitude: 1,
    });
  };

  const onReset = () => {
    setAttitude({
      userFromId: currentUserId,
      userToId: userId,
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
                <CustomAvatar size="big" name={name} userId={userId} />
              </div>
              <RatingAverage value={rating} direction="row" />

              <div className="row justify-content-center">
                <Tooltip
                  title="Like this user"
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    className={!attitude ? "text-success" : ""}
                    onClick={attitude ? onLike : onReset}
                  >
                    <i className="fas fa-thumbs-up" />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Dislike this user"
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    className={attitude === 1 ? "text-danger" : ""}
                    onClick={attitude !== 1 ? onDislike : onReset}
                  >
                    <i className="fas fa-thumbs-down" />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="Start chat!"
                  placement="bottom"
                  TransitionComponent={Zoom}
                >
                  <Link to={`/chat/${userId}`}>
                    <IconButton>
                      <i className="far fa-comments" />
                    </IconButton>
                  </Link>
                </Tooltip>
              </div>
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
          userId={currentUserId}
          getEventsByType={getEventsByType}
          history={history}
        />
        <UserProfileRoutes
          events={events}
          currentUser={currentUserId}
          userId={currentUserId}
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
};

export default UserProfile;
