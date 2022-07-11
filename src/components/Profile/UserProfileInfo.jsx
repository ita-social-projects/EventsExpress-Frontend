import React from "react";
import PropTypes from "prop-types";
import getAge from "../helpers/userAgeHelper/getUserAge";
import GENDERS from "../../constants/gendersVarietyConstants";

const UserProfileInfo = ({ name, email, birthday, gender, categories }) => {
  const renderProp = (propName, value) => (
    <div className="row mb-3 font-weight-bold">
      <div className="col-4">{`${propName}:`}</div>
      <div className="col-8">{value || ""}</div>
    </div>
  );
  const renderCategories = (arr = []) =>
    arr.map(item => (
      <div key={item.id}>
        {"#"}
        {item.name}
      </div>
    ));
  return (
    <div className="col-sm-12  col-md-6">
      {renderProp("User Name", name)}
      {renderProp("Age", getAge(birthday))}
      {renderProp("Gender", GENDERS[gender])}
      {renderProp("Email", email)}
      {renderProp("Interests", renderCategories(categories))}
    </div>
  );
};

UserProfileInfo.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  birthday: PropTypes.string,
  gender: PropTypes.number,
  categories: PropTypes.array,
};

UserProfileInfo.defaultProps = {
  name: "",
  email: "",
  birthday: "",
  gender: 0,
  categories: [],
};
export default UserProfileInfo;
