import React, { Component } from "react";
import { getFormValues, reset } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TrackList from "./track-list";
import TracksFilter from "./tracks-filter";
import SpinnerWrapper from "../../containers/spinner";
import getAllTracks, {
  getEntityNames,
} from "../../actions/tracks/track-list-action";

class Tracks extends Component {
  componentDidMount = () => {
    this.props.getAllTracks({
      page: 1,
      userName: "",
      changesType: [],
      dateFrom: null,
      dateTo: null,
      entityName: [],
    });
    this.props.getEntityNames();
  };

  handleSubmit = async filters => {
    const currentFilters = filters || {};
    await this.handleFunc(currentFilters, 1);
  };

  handlePageChange = async page => {
    const currentFilters = this.props.form_values || {};
    await this.handleFunc(currentFilters, page);
  };

  onReset = async () => {
    this.props.reset_filters();
    await this.handleFunc({}, 1);
  };

  handleFunc = async (data, pages) => {
    const { entityNames = [], changesType, dateFrom, dateTo } = data;
    await this.props.getAllTracks({
      entityName: entityNames ? entityNames.map(x => x.entityName) : null,
      changesType,
      dateFrom,
      dateTo,
      page: pages,
    });
  };

  render() {
    const { data, entityNames } = this.props.tracks;
    return (
      <SpinnerWrapper showContent={data}>
        <table className="table w-100 m-auto">
          <tbody>
            <div className="d-flex">
              {data?.items && (
                <div className="w-75">
                  <TrackList
                    dataList={data}
                    handlePageChange={this.handlePageChange}
                  />
                </div>
              )}
              <div className="w-25">
                <TracksFilter
                  entityNames={entityNames}
                  onSubmit={this.handleSubmit}
                  onReset={this.onReset}
                  formValues={this.props.form_values}
                />
              </div>
            </div>
          </tbody>
        </table>
      </SpinnerWrapper>
    );
  }
}

Tracks.defaultProps = {
  tracks: {},
  reset_filters: () => {},
  getAllTracks: () => {},
  getEntityNames: () => {},
  form_values: {},
};

Tracks.propTypes = {
  tracks: PropTypes.object,
  reset_filters: PropTypes.func,
  getAllTracks: PropTypes.func,
  getEntityNames: PropTypes.func,
  form_values: PropTypes.object,
};

const mapStateToProps = state => ({
  tracks: state.tracks,
  form_values: getFormValues("tracks-filter-form")(state),
});

const mapDispatchToProps = dispatch => {
  return {
    getAllTracks: filter => dispatch(getAllTracks(filter)),
    getEntityNames: () => dispatch(getEntityNames()),
    reset_filters: () => dispatch(reset("tracks-filter-form")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
