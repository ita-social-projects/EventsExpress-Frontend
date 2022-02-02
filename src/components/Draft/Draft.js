import React from "react";
import PropTypes from "prop-types";
import EventDraftListWrapper from "../../containers/event-draft-list";

const Draft = ({ location }) => <EventDraftListWrapper location={location} />;

Draft.defaultProps = {
  location: {},
};

Draft.propTypes = {
  location: PropTypes.object,
};
export default Draft;
