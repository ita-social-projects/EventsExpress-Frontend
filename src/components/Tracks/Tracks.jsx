import React, { Component } from "react";

import PropTypes from "prop-types";
import TrackList from "./TrackList";
import TracksFilter from "./TracksFilter";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";

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
    const currentFilters = this.props.formValues || {};
    await this.handleFunc(currentFilters, page);
  };

  onReset = async () => {
    this.props.resetFilters();
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
      <SpinnerContainer showContent={data}>
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
                  formValues={this.props.formValues}
                />
              </div>
            </div>
          </tbody>
        </table>
      </SpinnerContainer>
    );
  }
}

Tracks.defaultProps = {
  tracks: {},
  resetFilters: () => {},
  getAllTracks: () => {},
  getEntityNames: () => {},
  formValues: {},
};

Tracks.propTypes = {
  tracks: PropTypes.object,
  resetFilters: PropTypes.func,
  getAllTracks: PropTypes.func,
  getEntityNames: PropTypes.func,
  formValues: PropTypes.object,
};

export default Tracks;
