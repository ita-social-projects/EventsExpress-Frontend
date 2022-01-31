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

const LinkedAuths = props => {
  const { item } = props;
  return (
    <div>
      <div className="btn-group m-1" role="group" disabled>
        <a
          href="/#"
          className="btn btn-secondary disabled"
          role="button"
          aria-disabled="true"
        >
          {renderType(item.type)}
        </a>
        <a
          href="/#"
          className="btn btn-outline-secondary disabled"
          role="button"
          aria-disabled="true"
        >
          {item.email}
        </a>
      </div>
    </div>
  );
};

export default LinkedAuths;

LinkedAuths.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      email: PropTypes.string,
    }),
  ),
};

LinkedAuths.defaultProps = {
  item: [
    {
      type: "",
      email: "",
    },
  ],
};
