import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";
import LocalSpinnerContainer from "../../../containers/SpinnerContainer/LocalSpinnerContainer";
import renderItems from "../../helpers/eventsForProfileUtils";

const EventsForProfile = ({
  page,
  totalPages,
  pageNumber,
  callback,
  notificationEvents,
  currentUser,
  dataList,
}) => {
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // if (notificationEvents === null)
    callback(pageNumber);
    // TODO: Check useEffect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("PAGENUMBER", pageNumber);
  const handlePageChange = (_, pageElement) => {
    // setCurrentPage(pageElement);
    if (notificationEvents !== null) {
      callback(notificationEvents, pageElement);
    } else {
      callback(pageElement);
    }
  };

  return (
    <>
      <LocalSpinnerContainer showContent={dataList !== null}>
        <div className="row">{renderItems(dataList, currentUser)}</div>
        <br />
        {totalPages > 1 && (
          <Pagination
            page={page}
            count={totalPages}
            onChange={handlePageChange}
          />
        )}
      </LocalSpinnerContainer>
    </>
  );
};

EventsForProfile.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  pageNumber: PropTypes.number,
  callback: PropTypes.func,
  notificationEvents: PropTypes.string,
  currentUser: PropTypes.string,
  dataList: PropTypes.array,
};

EventsForProfile.defaultProps = {
  page: null,
  totalPages: null,
  pageNumber: null,
  callback: () => {},
  notificationEvents: "",
  currentUser: "",
  dataList: [],
};

export default EventsForProfile;
