/* eslint-disable no-magic-numbers */
import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const UserInteraction = ({ attitude, onLike, onReset, onDislike, id }) => {
  return (
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
        <Link to={`/chat/${id}`}>
          <IconButton>
            <i className="far fa-comments" />
          </IconButton>
        </Link>
      </Tooltip>
    </div>
  );
};

UserInteraction.propTypes = {
  attitude: PropTypes.number,
  onLike: PropTypes.func,
  onReset: PropTypes.func,
  onDislike: PropTypes.func,
  id: PropTypes.string,
};

UserInteraction.defaultProps = {
  attitude: 2,
  onReset: () => {},
  id: "",
  onLike: () => {},
  onDislike: () => {},
};

export default UserInteraction;
