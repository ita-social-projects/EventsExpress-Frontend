import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { USER_DEFAULT_IMAGE } from "../../constants/userConstants";
import PhotoService from "../../services/PhotoService";
import "./CustomAvatar.scss";

const photoService = new PhotoService();

const CustomAvatar = ({ userId, name, size, changeAvatarCounter }) => {
  const [avatarImage, setAvatarImage] = useState(null);

  useEffect(() => {
    photoService.getUserPhoto(userId).then(avatar => {
      if (avatar != null) {
        setAvatarImage(URL.createObjectURL(avatar));
      }
    });
    return () => {
      URL.revokeObjectURL(avatarImage);
    };
  }, [changeAvatarCounter]);

  const sizeAvatar = `${size}Avatar`;

  return (
    <>
      <Avatar
        alt={`${name}avatar`}
        src={avatarImage}
        className={sizeAvatar}
        imgProps={{
          onError: e => {
            e.target.onerror = null;
            e.target.src = `${USER_DEFAULT_IMAGE}`;
          },
        }}
      />
    </>
  );
};

// TODO: change size and changeAvatarCounter in actual props
CustomAvatar.propTypes = {
  userId: propTypes.string,
  name: propTypes.string,
  size: propTypes.any,
  changeAvatarCounter: propTypes.any,
};

CustomAvatar.defaultProps = {
  userId: "",
  name: "",
  size: "",
  changeAvatarCounter: "change this",
};

const mapStateToProps = state => {
  return {
    changeAvatarCounter: state.changeAvatar.Update,
  };
};

const CustomAvatarContainer = connect(mapStateToProps, null)(CustomAvatar);
export default CustomAvatarContainer;
