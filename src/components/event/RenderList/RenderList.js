import React from "react";
import PropTypes from "prop-types";
import PagePagination from "../../shared/pagePagination";
import renderListConstants from "../../../constants/RenderListConstants";

const { NO_RESULTS } = renderListConstants;

const RenderList = ({
  page,
  totalPages,
  dataList,
  customNoResultsMessage,
  renderSingleItem,
  handlePageChange,
}) => {
  const renderItems = arr => arr.map(item => renderSingleItem(item));

  return (
    <>
      <div className="row">
        {dataList.length ? (
          renderItems(dataList)
        ) : (
          <div id="notfound" className="w-100 notfound mw-100 notfound-404 h1">
            {customNoResultsMessage || NO_RESULTS}
          </div>
        )}
      </div>
      <br />
      {totalPages > 1 && (
        <PagePagination
          currentPage={page}
          totalPages={totalPages}
          callback={handlePageChange}
        />
      )}
    </>
  );
};

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
