import React from "react";
import PropTypes from "prop-types";
import externalLoginTypeEnum from "../../../constants/externalLoginTypeEnum";

const renderType = type => {
  switch (type) {
    case externalLoginTypeEnum.Google:
      return <i className="fab fa-google" />;
    case externalLoginTypeEnum.Facebook:
      return <i className="fab fa-facebook" />;
    case externalLoginTypeEnum.Twitter:
      return <i className="fab fa-twitter" />;
    default:
      return <i className="fas fa-at" />;
  }
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
