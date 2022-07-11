import { makeStyles } from "@material-ui/core/styles";
import { EVENT_FILTER_Z_INDEX } from "../../../constants/eventConstants";

const drawerWidth = 320;
const drawerIndex = 250;

const useFilterStyles = makeStyles({
  drawerPaper: {
    zIndex: drawerIndex,
    paddingTop: "53px",
    paddingBottom: "40px",
    width: drawerWidth,
  },
  openButton: {
    zIndex: drawerIndex - EVENT_FILTER_Z_INDEX,
    top: "56px",
    position: "fixed",
    right: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontWeight: "bold",
  },
  filterHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    position: "sticky",
    top: 0,
    backgroundColor: "#fff",
    zIndex: drawerIndex + EVENT_FILTER_Z_INDEX,
  },
  filterHeaderPart: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  filterHeading: {
    margin: 0,
  },
});

export default useFilterStyles;
