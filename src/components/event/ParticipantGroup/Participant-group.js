import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import UserView from "../UserView/UserView";

const ParticipantGroup = ({label, disabled, users, renderUserActions}) => {
    return (
      <ExpansionPanel disabled={disabled}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{label}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className="w-100">
            {users.map(user => (
              <UserView key={user.id} user={user}>{renderUserActions(user)}</UserView>
            ))}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }

  ParticipantGroup.propTypes = {
    label: PropTypes.string, 
    disabled:PropTypes.bool, 
    users:PropTypes.object, 
    renderUserActions:PropTypes.func,
    map:PropTypes.func,
  }

  ParticipantGroup.defaultProps = {
    label: "", 
    disabled: false, 
    users:{}, 
    renderUserActions: () => {},
    map: () => {}
  }

export default ParticipantGroup;