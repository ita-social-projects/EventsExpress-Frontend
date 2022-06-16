import React from "react";
import PropTypes from "prop-types";
import externalLoginTypeEnum from "../../../constants/externalLoginTypeEnumConstants";

const renderType = type => {
  const { Google, Facebook, Twitter } = externalLoginTypeEnum;
  let element = <i className="fas fa-at" />;

  if (type === Google) {
    element = <i className="fab fa-google" />;
  } else if (type === Facebook) {
    element = <i className="fab fa-facebook" />;
  } else if (type === Twitter) {
    element = <i className="fab fa-twitter" />;
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
