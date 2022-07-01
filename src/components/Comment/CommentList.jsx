import React, { Component } from "react";
import propTypes from "prop-types";
import Pagination from "@material-ui/lab/Pagination";
import DeleteCommentContainer from "../../containers/CommentContainer/DeleteCommentContainer";

export default class CommentList extends Component {
  handlePageChange = (_, page) => {
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
        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={page}
            onChange={this.handlePageChange}
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
