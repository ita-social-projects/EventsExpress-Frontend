import React from "react";
import PropTypes from "prop-types";

const Member = ({ name, age, img, description }) => (
  <div className="member">
    <img className="member__image" src={img} alt={name} />
    <div className="member__info">
      <h2 className="member__name">
        {name}, {age}
      </h2>
      <p className="member__description">{description}</p>
    </div>
  </div>
);

Member.defaultProps = {
  name: ``,
  img: ``,
  description: ``,
  age: 18,
};

Member.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  age: PropTypes.number,
};

export default Member;
