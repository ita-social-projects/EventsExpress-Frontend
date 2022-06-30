import React, { Component } from "react";
import propTypes from "prop-types";
import DeleteCommentContainer from "../../containers/CommentContainer/DeleteCommentContainer";
import PagePagination from "../shared/PagePagination/PagePagination";
import { PAGINATION_PAGES_TRIGGER } from "../../constants/paginationConstants";

export default class CommentList extends Component {
  handlePageChange = page => {
    this.props.callback(this.props.evId, page);
  };

  renderItems = arr =>
    arr.map(item => <DeleteCommentContainer key={item.id} item={item} />);

  render() {
    const { dataList } = this.props;
    const items = this.renderItems(dataList);
    const { page, totalPages } = this.props;

    return (
      <>
        {items}
        {totalPages > PAGINATION_PAGES_TRIGGER && (
          <PagePagination
            currentPage={page}
            totalPages={totalPages}
            callback={this.handlePageChange}
          />
        )}
      </>
    );
  }
}

CommentList.propTypes = {
  callback: propTypes.func,
  evId: propTypes.number,
  dataList: propTypes.array,
  page: propTypes.number,
  totalPages: propTypes.number,
};

CommentList.defaultProps = {
  callback: () => {},
  evId: null,
  dataList: [],
  page: null,
  totalPages: null,
};
