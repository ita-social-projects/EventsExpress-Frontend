/* eslint-disable no-magic-numbers */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "moment-timezone";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import GENDERS from "../../constants/gendersVarietyConstants";
import CustomAvatar from "../CustomAvatar/CustomAvatar";
import RatingAverage from "../Rating/RatingAverage";
import "./UserProfile.scss";
import AuthComponent from "../../security/authComponent";
import getAge from "../helpers/userAgeHelper/getUserAge";
import UserProfileTabs from "./UserProfileTabs";
import UserProfileRoutes from "./UserProfileRoutes";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";

const UserProfile = ({
  currentUser,
  events,
  data,
  setAttitude,
  getEventsByType,
  history,
}) => {
  // const useComponentWillMount = () => {
  //   const { id } = props.match.params;
  //   const willMount = useRef(true);

  //   if (willMount.current) getUser(id);

  //   willMount.current = false;
  // };
  const {
    name,
    email,
    birthday,
    gender,
    categories,
    id: userId,
    attitude,
    rating,
  } = data;

  // componentWillUpdate = newProps => {
  //   if (newProps.match.params.id !== this.props.match.params.id)
  //     this.props.getUser(newProps.match.params.id);
  //   if (newProps.currentUser !== this.props.currentUser)
  //     this.props.getUser(newProps.match.params.id);
  // };

  // componentDidUpdate(_, prevState) {
  //   const tabName =
  //     indexToTabName[this.splitPath(this.props.history.location.pathname)];
  //   if (prevState.value !== tabName) this.handleChange(_, tabName);
  // }

  const onLike = () => {
    setAttitude({
      userFromId: currentUser,
      userToId: userId,
      attitude: 0,
    });
  };

  const onDislike = () => {
    setAttitude({
      userFromId: currentUser,
      userToId: userId,
      attitude: 1,
    });
  };

  const onReset = () => {
    setAttitude({
      userFromId: currentUser,
      userToId: userId,
      attitude: 2,
    });
  };

  const renderCategories = arr =>
    arr.map(item => (
      <div key={item.id}>
        {"#"}
        {item.name}
      </div>
    ));

  // const renderEvents = arr =>
  //   arr.map(item => (
  //     <div className="col-4" key={item.id}>
  //       <Event item={item} />
  //     </div>
  //   ));
  const categoriesList = renderCategories(categories);
  const renderProp = (propName, value) => (
    <div className="row mb-3 font-weight-bold">
      <div className="col-4">{`${propName}:`}</div>
      <div className="col-8">{value || ""}</div>
    </div>
  );
  return (
    <SpinnerContainer showContent={data !== null}>
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
        <div className="col-sm-12  col-md-6">
          {renderProp("User Name", name)}
          {renderProp("Age", getAge(birthday))}
          {renderProp("Gender", GENDERS[gender])}
          {renderProp("Email", email)}
          {renderProp("Interests", categoriesList)}
        </div>
      </div>
      <div className="mt-2">
        <UserProfileTabs
          userId={userId}
          getEventsByType={getEventsByType}
          history={history}
        />
        <UserProfileRoutes
          events={events}
          currentUser={currentUser}
          userId={userId}
          getEventsByType={getEventsByType}
        />
      </div>
    </SpinnerContainer>
  );
};

UserProfile.propTypes = {
  history: PropTypes.object,
  data: PropTypes.object,
  events: PropTypes.object,
  currentUser: PropTypes.string,
  setAttitude: PropTypes.func,
  getEventsByType: PropTypes.func,
};

UserProfile.defaultProps = {
  history: {},
  data: {},
  events: {},
  currentUser: "",
  setAttitude: () => {},
  getEventsByType: () => {},
};

export default UserProfile;
