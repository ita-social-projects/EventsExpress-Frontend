import React from "react";
import PropTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";
import SpinnerWrapper from "../../../containers/SpinnerContainer/SpinnerContainer";
import NoResult from "../../shared/NoResult/NoResult";
import "./RenderList.scss";
import { EMPTY_DRAFT } from "../../../constants/draftConstants";
import DraftEventCard from "../../Draft/DraftEventCard";

const RenderList = ({
  page,
  totalPages,
  dataList,
  handlePageChange,
  onDelete,
}) => {
  const pageChange = (event, value) => {
    handlePageChange(value);
  };

  return (
    <div className="container">
      <SpinnerWrapper showContent={dataList !== null}>
        {dataList.length > 0 ? (
          <div className="eventsBlock">
            {dataList.map(item => (
              <DraftEventCard key={item.id} event={item} onDelete={onDelete} />
            ))}
          </div>
        ) : (
          <NoResult
            title={EMPTY_DRAFT.TITLE}
            subTitle={EMPTY_DRAFT.SUB_TITLE}
            photo={EMPTY_DRAFT.IMG}
            btnTitle={EMPTY_DRAFT.BUTTON_TITLE}
          />
        )}
      </SpinnerWrapper>
      <div className="draftPagination">
        {totalPages > 1 && (
          <Pagination count={totalPages} page={page} onChange={pageChange} />
        )}
      </div>
    </div>
  );
};

RenderList.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  dataList: PropTypes.array,
  handlePageChange: PropTypes.func,
  onDelete: PropTypes.func,
};

RenderList.defaultProps = {
  page: null,
  totalPages: null,
  dataList: [],
  handlePageChange: () => {},
  onDelete: () => {},
};

export default RenderList;
