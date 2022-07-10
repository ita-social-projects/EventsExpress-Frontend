import React from "react";
import Accordion from "@material-ui/core/Accordion";
import { AccordionSummary } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import UserView from "../UserView/UserView";

const ParticipantGroup = ({ label, disabled, users, renderUserActions }) => {
  return (
    <Accordion disabled={disabled}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="w-100">
          {users.map(user => (
            <UserView key={user.id} user={user}>
              {renderUserActions(user)}
            </UserView>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

ParticipantGroup.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  users: PropTypes.array,
  renderUserActions: PropTypes.func,
  map: PropTypes.func,
};

ParticipantGroup.defaultProps = {
  label: "",
  disabled: false,
  users: [],
  renderUserActions: () => {},
  map: () => {},
};

export default ParticipantGroup;
