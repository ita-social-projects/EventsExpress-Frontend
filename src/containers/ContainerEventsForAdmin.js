import { connect } from "react-redux";
import EventsForAdmin from "../components/Event/EventsForAdmin/EventsForAdmin";

const mapStateToProps = ({ user }) => {
  return { id: user.id };
};

export default connect(mapStateToProps)(EventsForAdmin);
