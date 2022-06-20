import React, { useEffect } from "react";
import PropTypes from "prop-types";
import RenderList from "../Event/RenderList/RenderList";

const DraftList = ({
  items,
  pageNumber,
  totalPages,
  isItemsAvaliable,
  isPages,
  deleteEvent,
  getDraftsAction,
}) => {
  const handlePageChange = page => {
    getDraftsAction(page);
  };

  useEffect(() => {
    getDraftsAction(pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <RenderList
      isItemsAvaliable={isItemsAvaliable}
      isPages={isPages}
      drafts={items}
      totalPages={totalPages}
      page={pageNumber}
      handlePageChange={handlePageChange}
      onDelete={deleteEvent}
    />
  );
};

DraftList.propTypes = {
  getDraftsAction: PropTypes.func,
  items: PropTypes.array,
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  deleteEvent: PropTypes.func,
  isItemsAvaliable: PropTypes.bool,
  isPages: PropTypes.bool,
};

DraftList.defaultProps = {
  getDraftsAction: () => {},
  deleteEvent: () => {},
  items: [],
  totalPages: null,
  pageNumber: 1,
  isItemsAvaliable: false,
  isPages: false,
};

export default DraftList;
