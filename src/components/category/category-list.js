import React, { Component } from "react";
import propTypes from "prop-types";
import CategoryItemWrapper from "../../containers/categories/category-item";

export default class CategoryList extends Component {
  renderItems = arr =>
    arr.map(item => <CategoryItemWrapper key={item.id} item={item} />);

  render() {
    const { dataList } = this.props;

    return (
      <>
        <tr>
          <td>Name</td>
          <td className="justify-content-center">Group</td>
          <td className="d-flex align-items-center justify-content-center">
            Users
          </td>
          <td className="justify-content-center">Events</td>
          <td></td>
          <td></td>
        </tr>
        {this.renderItems(dataList)}
      </>
    );
  }
}

CategoryList.propTypes = {
  dataList: propTypes.array,
};

CategoryList.defaultProps = {
  dataList: [],
};
