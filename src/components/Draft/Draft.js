import React from "react";
import PropTypes from "prop-types";
import EventDraftListWrapper from "../../containers/event-draft-list";

const Draft = ({ location }) => {
  return (
    <>
      <EventDraftListWrapper location={location} />
    </>
  );
};
// !Didn`t find this component in proj, so don`t know about props
// Draft.defaultProps = {
// 	location:
// };

Draft.propTypes = {
  location: PropTypes.any.isRequired,
};
export default Draft;
