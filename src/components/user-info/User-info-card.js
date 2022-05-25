import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import genders from "../../constants/GenderConstants";
import CustomAvatar from "../avatar/custom-avatar";
import RatingAverage from "../rating/rating-average";
import getAge from "../helpers/get-age-string";

import "./UserInfoCard.scss";

const UserInfoCard = ({ user }) => {
  let attitudeColor;

  switch (user.attitude) {
    case 0:
      attitudeColor = "#c2ffc2";
      break;
    case 1:
      attitudeColor = "#ffc6c2";
      break;
    default:
      attitudeColor = "";
  }

  return (
    <div
      // className="offset-3 col-6 mt-4 mb-4"
      style={{ border: "1px solid red", width: "100%", margin: "10px" }}
    >
      <Paper style={{ backgroundColor: attitudeColor }}>
        <div className="d-flex" style={{ alignItems: "center" }}>
          <Link to={`/user/${user.id}`}>
            <CustomAvatar
              size="little"
              userId={user.id}
              name={user.username}
              style={{ padding: 10 }}
            />
          </Link>
          <div className="d-flex flex-column">
            <Link to={`/user/${user.id}`}>{user.username}</Link>
            <div>{genders[user.gender]}</div>
            <div>Age: {getAge(user.birthday) || "not specified"}</div>
          </div>
          <div className="ml-auto">
            <RatingAverage value={user.rating} direction="col" />
            {user.attitude === 0 && (
              <Tooltip
                title="You like this user"
                placement="bottom"
                TransitionComponent={Zoom}
              >
                <div className="retreat">
                  <i className="far fa-thumbs-up Size" />
                </div>
              </Tooltip>
            )}
            {user.attitude === 1 && (
              <Tooltip
                title="You dislike this user"
                placement="bottom"
                TransitionComponent={Zoom}
              >
                <div className="retreat">
                  <i className="far fa-thumbs-down Size" />
                </div>
              </Tooltip>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
};

UserInfoCard.defaultProps = {
  user: {},
};

UserInfoCard.propTypes = {
  user: PropTypes.object,
};

export default UserInfoCard;
