import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PagePagination from "../../shared/pagePagination";
import LocalSpinnerWrapper from "../../../containers/local-spinner";
import renderItems from "../../helpers/eventsForProfileUtils";

const EventsForProfile = ({
  page,
  totalPages,
  callback,
  notificationEvents,
  currentUser,
  dataList,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (notificationEvents === null) callback(currentPage);
    // TODO: Check useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <LocalSpinnerWrapper showContent={dataList !== null}>
        <div className="row">{renderItems(dataList, currentUser)}</div>
        <br />
        {totalPages > 1 && (
          <PagePagination
            currentPage={page}
            totalPages={totalPages}
            callback={handlePageChange}
          />
        )}
      </LocalSpinnerWrapper>
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
