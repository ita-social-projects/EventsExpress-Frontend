import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { AccordionSummary } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import profileConstants from "../../constants/profileConstants";

const { TYPE_LIST } = profileConstants;

const getContentByType = (type, content) => {
  if (type === TYPE_LIST) {
    return (
      <>
        {content.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </>
    );
  }

  return content;
};
const ProfileItem = ({ item, handleChange, expanded }) => {
  const { panelId, title, type, content, accordionDetailsContent } = item;
  const acrodionContent = getContentByType(type, content);
  const hasContent =
    acrodionContent || (type === TYPE_LIST && acrodionContent.length !== 0);

  return (
    <Accordion expanded={expanded === panelId} onChange={handleChange(panelId)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={panelId}
        id={panelId}
      >
        <Typography style={{ flexBasis: "33.33%" }}>{title}</Typography>
        {hasContent && (
          <Typography component="div">{acrodionContent}</Typography>
        )}
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="div" className="w-100">
          <MuiThemeProvider>{accordionDetailsContent}</MuiThemeProvider>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

ProfileItem.defaultProps = {
  item: {},
  handleChange: () => {},
  expanded: false,
};

ProfileItem.propTypes = {
  item: PropTypes.object,
  handleChange: PropTypes.func,
  expanded: PropTypes.bool,
};

export default ProfileItem;
