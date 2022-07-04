﻿import React, { useEffect } from "react";
import PropTypes from "prop-types";
import PagePagination from "../../shared/PagePagination/PagePagination";
import LocalSpinnerContainer from "../../../containers/SpinnerContainer/LocalSpinnerContainer";
import renderItems from "../../helpers/eventsForProfileUtils";

const EventsForProfile = ({
  page,
  totalPages,
  callback,
  notificationEvents,
  currentUser,
  dataList,
}) => {
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (notificationEvents === null) callback();
    // TODO: Check useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (_, pageEl) => {
    // setCurrentPage(pageEl);
    callback(currentUser, pageEl);
  };

  return (
    <>
      <LocalSpinnerContainer showContent={dataList !== null}>
        <div className="row">{renderItems(dataList, currentUser)}</div>
        <br />
        {totalPages > 1 && (
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
