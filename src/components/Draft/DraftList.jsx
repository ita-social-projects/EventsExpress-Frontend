import React, { useEffect } from "react";
import PropTypes from "prop-types";
import RenderList from "../Event/RenderList/RenderList";

const DraftList = ({
  items,
  isDeleted,
  pageNumber,
  totalPages,
  isItemsAvaliable,
  isPages,
  isItemsFetched,
  deleteEvent,
  getDraftsAction,
}) => {
  useEffect(() => {
    getDraftsAction(pageNumber);
  }, [isDeleted]);
  return (
    <RenderList
      isItemsAvaliable={isItemsAvaliable}
      isPages={isPages}
      drafts={items}
      isItemsFetched={isItemsFetched}
      totalPages={totalPages}
      page={pageNumber}
      handlePageChange={getDraftsAction}
      onDelete={deleteEvent}
    />
  );
};

DraftList.propTypes = {
  getDraftsAction: PropTypes.func,
  items: PropTypes.array,
  isItemsFetched: PropTypes.bool,
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  deleteEvent: PropTypes.func,
  isItemsAvaliable: PropTypes.bool,
  isPages: PropTypes.bool,
  isDeleted: PropTypes.bool,
};

DraftList.defaultProps = {
  getDraftsAction: () => {},
  deleteEvent: () => {},
  isItemsFetched: false,
  isDeleted: false,
  items: [],
  totalPages: null,
  pageNumber: 1,
  isItemsAvaliable: false,
  isPages: false,
};

export default DraftList;
