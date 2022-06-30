import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PagePagination from "../../shared/PagePagination/PagePagination";
import LocalSpinnerContainer from "../../../containers/SpinnerContainer/LocalSpinnerContainer";
import renderItems from "../../helpers/eventsForProfileUtils";
import {
  DEFAULT_PAGE,
  PAGINATION_PAGES_TRIGGER,
} from "../../../constants/paginationConstants";

const EventsForProfile = ({
  page,
  totalPages,
  callback,
  notificationEvents,
  currentUser,
  dataList,
}) => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  useEffect(() => {
    if (notificationEvents === null) callback(currentPage);
    // TODO: Check useEffect
  }, []);

  const handlePageChange = pageEl => {
    setCurrentPage(pageEl);
    if (notificationEvents !== null) {
      callback(notificationEvents, pageEl);
    } else {
      callback(pageEl);
    }
  };

  return (
    <>
      <LocalSpinnerContainer showContent={dataList !== null}>
        <div className="row">{renderItems(dataList, currentUser)}</div>
        <br />
        {totalPages > PAGINATION_PAGES_TRIGGER && (
          <PagePagination
            currentPage={page}
            totalPages={totalPages}
            callback={handlePageChange}
          />
        )}
      </LocalSpinnerContainer>
    </>
  );
};

EventsForProfile.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  callback: PropTypes.func,
  notificationEvents: PropTypes.string,
  currentUser: PropTypes.string,
  dataList: PropTypes.array,
};

EventsForProfile.defaultProps = {
  page: null,
  totalPages: null,
  callback: () => {},
  notificationEvents: "",
  currentUser: "",
  dataList: [],
};

export default EventsForProfile;
