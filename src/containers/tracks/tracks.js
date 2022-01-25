import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Tracks from "../../components/tracks/track";

const mapStateToProps = state => ({
  tracks: state.tracks,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(null, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
