import React, { Component } from "react";
import PropTypes from "prop-types";
import PagePagination from "../shared/PagePagination/PagePagination";
import TrackItem from "./TrackItem";
import {
  EMPTY_TRACKS_ARRAY,
  TRACKS_TABLE_FIELDS,
} from "../../constants/tracksConstants";
import { NO_RESULT } from "../../constants/labelConstants";
import { PAGINATION_PAGES_TRIGGER } from "../../constants/paginationConstants";

class TrackList extends Component {
  renderItems = arr => {
    //! TODO : MAYBE, item.id IS NOT DEFINED. IT NEED TO CHECK
    return arr.map(item => <TrackItem key={item.id} item={item} />);
  };

  render() {
    const { dataList, handlePageChange } = this.props;

    return (
      <>
        <div className="d-flex">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="text-center">
                    {TRACKS_TABLE_FIELDS.ENTITY_NAME}
                  </th>
                  <th scope="col" className="text-center">
                    {TRACKS_TABLE_FIELDS.USER_NAME}
                  </th>
                  <th scope="col" className="text-center">
                    {TRACKS_TABLE_FIELDS.DATE}
                  </th>
                  <th scope="col" className="text-center">
                    {TRACKS_TABLE_FIELDS.CHANGES_TYPE}
                  </th>
                  <th aria-label="Data about user name" />
                </tr>
              </thead>
              <tbody>
                {dataList?.items?.length > EMPTY_TRACKS_ARRAY ? (
                  this.renderItems(dataList.items)
                ) : (
                  <div id="notfound" className="w-100">
                    <div className="notfound">
                      <div className="notfound-404">
                        <div className="h1">{NO_RESULT}</div>
                      </div>
                    </div>
                  </div>
                )}
              </tbody>
            </table>
            {dataList?.pageViewModel?.totalPages > PAGINATION_PAGES_TRIGGER && (
              <PagePagination
                currentPage={dataList?.pageViewModel?.pageNumber}
                totalPages={dataList?.pageViewModel?.totalPages}
                callback={handlePageChange}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

TrackList.defaultProps = {
  handlePageChange: () => {},
  dataList: {},
};

TrackList.propTypes = {
  handlePageChange: PropTypes.func,
  dataList: PropTypes.object,
};

export default TrackList;
