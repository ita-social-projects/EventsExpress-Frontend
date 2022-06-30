import React from "react";
import PropTypes from "prop-types";
import externalLoginTypeEnum from "../../../constants/externalLoginTypeEnumConstants";

const renderType = type => {
  const renderData = {
    Google: <i className="fab fa-google" />,
    Facebook: <i className="fab fa-facebook" />,
    Twitter: <i className="fab fa-twitter" />,
    dafault: <i className="fas fa-at" />,
  };
  const { Google, Facebook, Twitter } = externalLoginTypeEnum;
  let element = renderData.dafault;

  if (type === Google) {
    element = renderData.Google;
  } else if (type === Facebook) {
    element = renderData.Facebook;
  } else if (type === Twitter) {
    element = renderData.Twitter;
  }
  return element;
};

const LinkedAuths = ({ item }) => {
  return (
    <div>
      <div className="btn-group m-1" role="group" disabled>
        <a
          href="/#"
          className="btn btn-secondary disabled"
          aria-disabled="true"
          type="button"
        >
          {renderType(item.type)}
        </a>
        <a
          href="/#"
          className="btn btn-outline-secondary disabled"
          type="button"
          aria-disabled="true"
        >
          {item.email}
        </a>
      </div>
    </div>
  );
};

LinkedAuths.defaultProps = {
  item: {},
};

LinkedAuths.propTypes = {
  item: PropTypes.object,
};

export default LinkedAuths;
