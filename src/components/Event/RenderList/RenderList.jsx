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
  isPages,
  totalPages,
  drafts,
  isItemsFetched,
  isItemsAvaliable,
  handlePageChange,
  onDelete,
}) => {
  const pageChange = (event, value) => {
    handlePageChange(value);
  };

  return (
    <div className="container">
      {isItemsFetched ? (
        <SpinnerWrapper showContent={isItemsAvaliable}>
          <div className="eventsBlock">
            {drafts.map(item => (
              <DraftEventCard key={item.id} event={item} onDelete={onDelete} />
            ))}
          </div>
        </SpinnerWrapper>
      ) : (
        <NoResult
          title={EMPTY_DRAFT.TITLE}
          subTitle={EMPTY_DRAFT.SUB_TITLE}
          photo={EMPTY_DRAFT.IMG}
          btnTitle={EMPTY_DRAFT.BUTTON_TITLE}
        />
      )}
      <div className="draftPagination">
        {isPages ? (
          <Pagination count={totalPages} page={page} onChange={pageChange} />
        ) : null}
      </div>
    </div>
  );
};

RenderList.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  isPages: PropTypes.bool,
  drafts: PropTypes.array,
  isItemsFetched: PropTypes.bool,
  isItemsAvaliable: PropTypes.bool,
  handlePageChange: PropTypes.func,
  onDelete: PropTypes.func,
};

RenderList.defaultProps = {
  page: null,
  totalPages: null,
  isPages: false,
  drafts: [],
  isItemsFetched: false,
  isItemsAvaliable: false,
  handlePageChange: () => {},
  onDelete: () => {},
};

export default RenderList;
