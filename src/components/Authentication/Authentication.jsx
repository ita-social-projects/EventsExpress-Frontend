import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { CONGRATULATION_CAUSE_REGISTER } from "../../constants/authConstants";

const Authentication = ({ auth, user }) => {
  const { id, token } = user;
  useEffect(() => {
    auth({ userId: id, token });
  }, []);

  return (
    <div className="mt-5 b-inline-block">
      <div className="h3 text-center alert alert-success">
        {CONGRATULATION_CAUSE_REGISTER}
      </div>
    </div>
  );
};

Authentication.defaultProps = {
  user: {},
  auth: () => {},
};

Authentication.propTypes = {
  user: PropTypes.object,
  auth: PropTypes.func,
};

export default Authentication;
