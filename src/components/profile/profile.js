import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { AccordionSummary } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditUsernameContainer from "../../containers/editProfileContainers/editUsernameContainer";
import EditGenderContainer from "../../containers/editProfileContainers/editGenderContainer";
import EditBirthdayContainer from "../../containers/editProfileContainers/editBirthdayContainer";
import ChangePasswordContainer from "../../containers/editProfileContainers/changePasswordContainer";
import SelectCategoriesWrapper from "../../containers/categories/SelectCategories";
import genders from "../../constants/GenderConstants";
import ChangeAvatarWrapper from "../../containers/editProfileContainers/change-avatar";
import "./profile.css";
import SelectNotificationTypesWrapper from "../../containers/notificationTypes/SelectNotificationTypes";
import LinkedAuthsWrapper from "../../containers/linked-auths-wrapper";
import getComments from "../../actions/comment/comment-list-action";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Profile = ({
  name,
  gender,
  birthday,
  categories,
  notificationTypes,
  canChangePassword,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel0"}
        onChange={handleChange("panel0")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Change Avatar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div" className="w-100">
            <MuiThemeProvider>
              <ChangeAvatarWrapper />
            </MuiThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Username</Typography>
          <Typography className={classes.secondaryHeading}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <MuiThemeProvider>
              <EditUsernameContainer />
            </MuiThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Gender</Typography>
          <Typography className={classes.secondaryHeading}>
            {genders[gender]}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <MuiThemeProvider>
              <EditGenderContainer />
            </MuiThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Date of Birth</Typography>
          <Typography className={classes.secondaryHeading}>
            <Moment format="D MMM YYYY" withTitle>
              {birthday}
            </Moment>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <MuiThemeProvider>
              <EditBirthdayContainer />
            </MuiThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Favorite Categories
          </Typography>
          <Typography component="div" className={classes.secondaryHeading}>
            {categories.map(category => (
              <div key={category.id}>{category.name}</div>
            ))}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <MuiThemeProvider>
              <SelectCategoriesWrapper />
            </MuiThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
            Manage notifications
          </Typography>
          <Typography component="div" className={classes.secondaryHeading}>
            {notificationTypes.map(notificatin => (
              <div key={notificatin.id}>{notificatin.name}</div>
            ))}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <MuiThemeProvider>
              <SelectNotificationTypesWrapper />
            </MuiThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>Linked accounts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <MuiThemeProvider>
              <LinkedAuthsWrapper />
            </MuiThemeProvider>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {canChangePassword && <ChangePasswordContainer />}
    </div>
  );
};

Profile.defaultProps = {
  name: "",
  gender: null,
  birthday: "",
  categories: [],
  notificationTypes: [],
  canChangePassword: false,
};

Profile.propTypes = {
  name: PropTypes.string,
  // TODO: CHANGE IT oneOfType ON ONE PROP TYPE
  gender: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  birthday: PropTypes.string,
  categories: PropTypes.array,
  notificationTypes: PropTypes.array,
  canChangePassword: PropTypes.bool,
};

const mapStateToProps = state => {
  return state.user;
};

const mapDispatchToProps = dispatch => ({
  getComments: (data, page) => dispatch(getComments(data, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
