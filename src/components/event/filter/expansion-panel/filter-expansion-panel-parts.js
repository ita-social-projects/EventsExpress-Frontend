<<<<<<< HEAD
import { withStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
=======
import { withStyles } from '@material-ui/core/styles';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2

export const FilterExpansionPanelWrapper = withStyles({
  root: {
    boxShadow: "none",
    margin: 0,
    "&:before": {
      display: "none",
    },
<<<<<<< HEAD
    borderBottom: "1px solid #bbbbbb",
    "&$expanded": {
      margin: 0,
      borderBottom: "none",
    },
  },
  expanded: {},
=======
    expanded: {}
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2
})(Accordion);

export const FilterExpansionPanelSummary = withStyles({
  root: {
    minHeight: 0,
    "&$expanded": {
      minHeight: 0,
    },
  },
  content: {
    margin: "6px 0",
    "&$expanded": {
      margin: "6px 0",
    },
<<<<<<< HEAD
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expanded: {},
})(AccordionSummary);

export const FilterExpansionPanelDetails = withStyles({
  root: {},
=======
    expanded: {}
})(AccordionSummary);

export const FilterExpansionPanelDetails = withStyles({
    root: {}
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2
})(AccordionDetails);
