import React, { Component } from "react";
import PropTypes from "prop-types";
import PagePagination from "../shared/pagePagination";
import TrackItem from "./track-item";

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
                    Entity Name
                  </th>
                  <th scope="col" className="text-center">
                    User name
                  </th>
                  <th scope="col" className="text-center">
                    Date
                  </th>
                  <th scope="col" className="text-center">
                    Changes type
                  </th>
                  <th aria-label="Data about user name" />
                </tr>
              </thead>
              <tbody>
                {dataList?.items?.length > 0 ? (
                  this.renderItems(dataList.items)
                ) : (
                  <div id="notfound" className="w-100">
                    <div className="notfound">
                      <div className="notfound-404">
                        <div className="h1">No Results</div>
                      </div>
                    </div>
                  </div>
                )}
              </tbody>
            </table>
            {dataList?.pageViewModel?.totalPages > 1 && (
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
