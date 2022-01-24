import React, { useEffect, useState } from 'react';
import PagePagination from '../../shared/pagePagination';
import LocalSpinnerWrapper from '../../../containers/local-spinner';
import { renderItems } from '../../helpers/eventsForProfileUtils';

const EventsForProfile = ({
  page,
  totalPages,
  callback,
  notification_events,
  current_user,
  data_list,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    return notification_events === null ? callback(currentPage) : null;
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    notification_events !== null
      ? callback(notification_events, page)
      : callback(page);
  };

  return (
    <>
      <LocalSpinnerWrapper showContent={data_list !== null}>
        <div className="row">{renderItems(data_list, current_user)}</div>
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

export default EventsForProfile;
