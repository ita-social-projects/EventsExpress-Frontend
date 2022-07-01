import React, { useEffect } from "react";

import PropTypes from "prop-types";
import TrackList from "./TrackList";
import TracksFilter from "./TracksFilter";
import SpinnerContainer from "../../containers/SpinnerContainer/SpinnerContainer";

const Tracks = ({
  tracks,
  formValues,
  getAllTracks,
  getEntityNames,
  resetFilters,
}) => {
  useEffect(() => {
    getAllTracks({
      page: 1,
      userName: "",
      changesType: [],
      dateFrom: null,
      dateTo: null,
      entityName: [],
    });
    getEntityNames();
  }, []);

  const handleFunc = async (data, pages) => {
    const { entityNames = [], changesType, dateFrom, dateTo } = data;
    await getAllTracks({
      entityName: entityNames ? entityNames.map(x => x.entityName) : null,
      changesType,
      dateFrom,
      dateTo,
      page: pages,
    });
  };

  const handleSubmit = async filters => {
    const currentFilters = filters || {};
    await handleFunc(currentFilters, 1);
  };

  const handlePageChange = async page => {
    const currentFilters = formValues || {};
    await handleFunc(currentFilters, page);
  };

  const onReset = async () => {
    resetFilters();
    await handleFunc({}, 1);
  };
  const { data, entityNames } = tracks;
  return (
    <SpinnerContainer showContent={data}>
      <table className="table w-100 m-auto">
        <tbody>
          <div className="d-flex">
            {data?.items && (
              <div className="w-75">
                <TrackList
                  dataList={data}
                  handlePageChange={handlePageChange}
                />
              </div>
            )}
            <div className="w-25">
              <TracksFilter
                entityNames={entityNames}
                onSubmit={handleSubmit}
                onReset={onReset}
                formValues={formValues}
              />
            </div>
          </div>
        </tbody>
      </table>
    </SpinnerContainer>
  );
};

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
