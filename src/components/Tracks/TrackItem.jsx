/* eslint-disable no-magic-numbers */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import SimpleModal from "../Event/SimpleModal/SimpleModal";

// TODO: Reword this component
export default class TrackItem extends Component {
  getChangesType = changesType => {
    switch (changesType) {
      case 0:
        return "Undefined";
      case 1:
        return "Modified";
      case 2:
        return "Created";
      case 3:
        return "Deleted";
      default:
        //! TODO : MAYBE SOMETHING BETTER IS FOR DEFAULT
        return null;
    }
  };

  getPropertyChangesText = propertyChangesText => {
    const test = JSON.parse(propertyChangesText);
    return test.map(x => (
      //! TODO : MAYBE, X.ID IS NOT DEFINED. IT NEED TO CHECK
      <tr key={x.id}>
        <td className="text-center">{x.entityName}</td>
        <td className="text-center">
          {"Old value: "}
          {x.OldValue}
        </td>
        <td className="text-center">
          {"New value: "}
          {x.NewValue}
        </td>
      </tr>
    ));
  };

  render() {
    const { propertyChangesText, time, name, changesType, user } =
      this.props.item;

    return (
      <tr>
        <td className="text-center">{name}</td>
        <td className="text-center">
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </td>
        <td className="text-center">{new Date(time).toLocaleString()}</td>
        <td className="text-center">{this.getChangesType(changesType)}</td>
        <td className="text-center">
          <SimpleModal
            id={user.id}
            data={this.getPropertyChangesText(propertyChangesText)}
            button={
              <IconButton aria-label="delete">
                <i className="fas fa-info-circle" />
              </IconButton>
            }
          />
        </td>
      </tr>
    );
  }
}

TrackItem.defaultProps = {
  item: {},
};

TrackItem.propTypes = {
  item: PropTypes.object,
};
