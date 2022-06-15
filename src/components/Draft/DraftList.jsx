import React, { useEffect } from "react";
import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
import RenderList from "../Event/RenderList/RenderList";
import { ALERT_MESSAGES } from "../../constants/draftConstants";
import filterHelper from "../helpers/filterHelper";

const history = createBrowserHistory({ forceRefresh: true });

const DraftList = ({ events, deleteEvent, alert, getDraftsAction }) => {
  const { data, filter } = events;
  const { items, pageViewModel } = data;
  const { pageNumber, totalPages } = pageViewModel;
  let objCurrentQueryParams = null;
  const objFilterParams = filterHelper.trimUndefinedKeys(events.filter);

  const handlePageChange = page => {
    getDraftsAction(page);
  };

  const onDelete = async (eventId, reason) => {
    await deleteEvent(eventId, reason);
    alert(ALERT_MESSAGES.DELETE);
    history.push(`/drafts`);
  };
  useEffect(() => {
    getDraftsAction(pageNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!filterHelper.compareObjects(objFilterParams, objCurrentQueryParams)) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      objCurrentQueryParams = objFilterParams;
    }
  }, [filter]);
  return (
    <RenderList
      dataList={items}
      totalPages={totalPages}
      page={pageNumber}
      handlePageChange={handlePageChange}
      onDelete={onDelete}
    />
  );
};

DraftList.propTypes = {
  getDraftsAction: PropTypes.func,
  pageViewModel: PropTypes.object,
  events: PropTypes.object,
  pageNumber: PropTypes.number,
  alert: PropTypes.func,
  deleteEvent: PropTypes.func,
};

DraftList.defaultProps = {
  getDraftsAction: () => {},
  pageViewModel: {},
  alert: () => {},
  deleteEvent: () => {},
  events: {},
  pageNumber: null,
};

export default DraftList;
