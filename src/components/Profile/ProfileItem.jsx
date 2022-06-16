import React from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { AccordionSummary } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const getContentByType = (type, content) => {
  if (type === "list") {
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
const ProfileItem = ({ item, handleChange, expanded, classes }) => {
  const { panelId, title, type, content, accordionDetailsContent } = item;
  const acrodionContent = getContentByType(type, content);
  const hasContent =
    acrodionContent || (type === "list" && acrodionContent.length !== 0);

  return (
    <Accordion expanded={expanded === panelId} onChange={handleChange(panelId)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={panelId}
        id={panelId}
      >
        <Typography className={classes.heading}>{title}</Typography>
        {hasContent && (
          <Typography component="div" className={classes.secondaryHeading}>
            {acrodionContent}
          </Typography>
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
  classes: {},
};

ProfileItem.propTypes = {
  item: PropTypes.object,
  handleChange: PropTypes.func,
  expanded: PropTypes.bool,
  classes: PropTypes.object,
};

export default ProfileItem;
