import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";
import {
  EVENT_BUTTON_STYLE_WEIGHT_500,
  EVENT_BUTTON_STYLE_WEIGHT_700,
} from "../../../../constants/eventConstants";

const GreenButton = withStyles({
  root: {
    color: "#fff",
    backgroundColor: green[EVENT_BUTTON_STYLE_WEIGHT_500],
    "&:hover": {
      backgroundColor: green[EVENT_BUTTON_STYLE_WEIGHT_700],
    },
  },
});

export default GreenButton(Button);
