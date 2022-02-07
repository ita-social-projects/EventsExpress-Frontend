import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import propTypes from "prop-types";
import userDefaultImage from "../../constants/userDefaultImage";
import PhotoService from "../../services/PhotoService";

const photoService = new PhotoService();

class CustomAvatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarImage: null,
    };
  }

  componentDidMount() {
    this.uploadPhoto();
  }

  componentDidUpdate(prevProps) {
    if (this.props.changeAvatarCounter !== prevProps.changeAvatarCounter)
      this.uploadPhoto();
  }

  componentWillUnmount() {
    URL.revokeObjectURL(this.state.avatarImage);
  }

  uploadPhoto() {
    photoService.getUserPhoto(this.props.userId).then(avatarImage => {
      if (avatarImage != null) {
        this.setState({ avatarImage: URL.createObjectURL(avatarImage) });
      }
    });
  }

  render() {
    const { name } = this.props;

    const size = `${this.props.size}Avatar`;

    return (
      <>
        <Avatar
          alt={`${name}avatar`}
          src={this.state.avatarImage}
          className={size}
          imgProps={{
            onError: e => {
              e.target.onerror = null;
              e.target.src = `${userDefaultImage}`;
            },
          }}
        />
      </>
    );
  }
}

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
  size: "change this",
  changeAvatarCounter: "change this",
};

const mapStateToProps = state => {
  return {
    changeAvatarCounter: state.changeAvatar.Update,
  };
};

const CustomAvatarContainer = connect(mapStateToProps, null)(CustomAvatar);
export default CustomAvatarContainer;
