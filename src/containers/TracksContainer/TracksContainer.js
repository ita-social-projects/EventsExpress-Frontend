import { getFormValues, reset } from "redux-form";
import { connect } from "react-redux";
import Tracks from "../../components/Tracks/Tracks";
import getAllTracks, {
  getEntityNames,
} from "../../actions/tracks/track-list-action";

const mapStateToProps = state => ({
  tracks: state.tracks,
  formValues: getFormValues("tracks-filter-form")(state),
});

const mapDispatchToProps = dispatch => {
  return {
    getAllTracks: filter => dispatch(getAllTracks(filter)),
    getEntityNames: () => dispatch(getEntityNames()),
    resetFilters: () => dispatch(reset("tracks-filter-form")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
