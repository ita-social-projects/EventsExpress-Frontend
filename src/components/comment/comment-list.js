import React, { Component } from "react";
import propTypes from "prop-types";
import CommentItemWrapper from "../../containers/delete-comment";
import PagePagination from "../shared/pagePagination";

export default class CommentList extends Component {
  handlePageChange = page => {
    this.props.callback(this.props.evId, page);
  };

  renderItems = arr =>
    arr.map(item => <CommentItemWrapper key={item.id} item={item} />);

  render() {
    const { data_list: dataList } = this.props;
    const items = this.renderItems(dataList);
    const { page, totalPages } = this.props;

    return (
      <>
        {items}
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
  data_list: propTypes.array,
  page: propTypes.number,
  totalPages: propTypes.number,
};

CommentList.defaultProps = {
  callback: () => {},
  evId: 0,
  data_list: [],
  page: 0,
  totalPages: 0,
};
