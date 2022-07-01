import React, { Component } from "react";
import propTypes from "prop-types";
import DeleteCommentContainer from "../../containers/CommentContainer/DeleteCommentContainer";
import PagePagination from "../shared/PagePagination/PagePagination";

export default class CommentList extends Component {
  handlePageChange = page => {
    this.props.callback(this.props.evId, page);
  };

  render() {
    const { dataList } = this.props;
    const { page, totalPages } = this.props;

    return (
      <>
        {dataList.map(item => (
          <DeleteCommentContainer key={item.id} item={item} />
        ))}
        {totalPages > 1 && (
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
