import React from "react";
import PropTypes from "prop-types";
import EventDraftListContainer from "../../containers/EventDraftContainer/EventDraftListContainer";

const Draft = ({ location }) => <EventDraftListContainer location={location} />;

Draft.defaultProps = {
  location: {},
};

Draft.propTypes = {
  location: PropTypes.object,
};
export default Draft;
