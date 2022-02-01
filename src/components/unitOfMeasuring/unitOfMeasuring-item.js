import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

class UnitOfMeasuringItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editUnit: false,
    };
  }

  displayEditedUnit = () => {
    this.setState(prevState => ({ editUnit: !prevState.editUnit }));
  };

  render() {
    const { item } = this.props;
    return (
      <>
        <td>
          <i className="mr-1" />
          {item.category.categoryName}
        </td>
        <td>
          <i className="fas fa-hashtag mr-1" />
          {item.unitName}
        </td>
        <td className="d-flex align-items-center justify-content-left">
          {item.shortName}
        </td>
        <td className="align-middle align-items-stretch">
          <div className="d-flex align-items-center justify-content-center">
            <IconButton
              className="text-info"
              size="small"
              onClick={() => this.props.callback(item.id)}
            >
              <i className="fas fa-edit" />
            </IconButton>
          </div>
        </td>
      </>
    );
  }
}

UnitOfMeasuringItem.defaultProps = {
  item: {},
  callback: () => {},
};

UnitOfMeasuringItem.propTypes = {
  item: PropTypes.object,
  callback: PropTypes.func,
};

export default UnitOfMeasuringItem;
