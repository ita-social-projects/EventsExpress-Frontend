import React, { Component } from "react";
import PropTypes from "prop-types";
import PagePagination from "../../shared/pagePagination";

class RenderList extends Component {
  renderItems = arr => arr.map(item => this.props.renderSingleItem(item));

  render() {
    const { page, totalPages, dataList, customNoResultsMessage } = this.props;

    return (
      <>
        <div className="row">
          {dataList.length > 0 ? (
            this.renderItems(dataList)
          ) : (
            <div id="notfound" className="w-100">
              <div className="notfound mw-100">
                <div className="notfound-404">
                  <div className="h1">
                    {customNoResultsMessage || "No Results"}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <br />
        {totalPages > 1 && (
          <PagePagination
            currentPage={page}
            totalPages={totalPages}
            callback={this.props.handlePageChange}
          />
        )}
      </>
    );
  }
}

RenderList.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  dataList: PropTypes.array,
  customNoResultsMessage: PropTypes.string,
  handlePageChange: PropTypes.func,
  renderSingleItem: PropTypes.func,
};

RenderList.defaultProps = {
  page: null,
  totalPages: null,
  dataList: [],
  customNoResultsMessage: "",
  handlePageChange: () => {},
  renderSingleItem: () => {},
};

export default RenderList;
