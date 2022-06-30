import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { EVENT_CARD_STYLE_WEIGHT_500 } from "../../constants/eventConstants";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    maxHeight: 200,
    backgroundColor: theme.palette.primary.dark,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[EVENT_CARD_STYLE_WEIGHT_500],
  },
  button: {},
}));

export default useStyles;
