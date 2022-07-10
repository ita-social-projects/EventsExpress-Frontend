import React from "react";
import propTypes from "prop-types";
import ContactAdminListContainer from "../../containers/ContactAdminContainers/ContactAdminListContainer";
import ContactAdminFilterContainer from "../../containers/ContactAdminContainers/ContactAdminFilterContainer";

const Issues = ({ location }) => {
  return (
    <>
      <ContactAdminFilterContainer />
      <div className="events-container">
        <ContactAdminListContainer location={location} />
      </div>
    </>
  );
};

// TODO: Check this prop
Issues.propTypes = {
  location: propTypes.object,
};

Issues.defaultProps = {
  location: {},
};

export default Issues;
