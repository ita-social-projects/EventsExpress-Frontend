import React, { Component } from "react";
import propTypes from "prop-types";
import CategoryItemWrapper from "../../containers/CategoryContainers/CategoryItemContainer";
import { CATEGORY_LIST_FIELDS } from "../../constants/categoriesConstatns";

export default class CategoryList extends Component {
  renderItems = arr =>
    arr.map(item => <CategoryItemWrapper key={item.id} item={item} />);

  render() {
    const { dataList } = this.props;

    return (
      <>
        <tr>
          <td>{CATEGORY_LIST_FIELDS.NAME}</td>
          <td className="justify-content-center">
            {CATEGORY_LIST_FIELDS.GROUP}
          </td>
          <td className="d-flex align-items-center justify-content-center">
            {CATEGORY_LIST_FIELDS.USERS}
          </td>
          <td className="justify-content-center">
            {CATEGORY_LIST_FIELDS.EVENTS}
          </td>
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
