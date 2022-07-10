/* eslint-disable no-magic-numbers */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import SimpleModal from "../Event/SimpleModal/SimpleModal";

const TrackItem = ({ item }) => {
  const { propertyChangesText, time, name, changesType, user } = item;

  const getChangesType = type => {
    switch (type) {
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

  const getPropertyChangesText = changesText => {
    const test = JSON.parse(changesText);
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

  return (
    <tr>
      <td className="text-center">{name}</td>
      <td className="text-center">
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </td>
      <td className="text-center">{new Date(time).toLocaleString()}</td>
      <td className="text-center">{getChangesType(changesType)}</td>
      <td className="text-center">
        <SimpleModal
          id={user.id}
          data={getPropertyChangesText(propertyChangesText)}
          button={
            <IconButton aria-label="delete">
              <i className="fas fa-info-circle" />
            </IconButton>
          }
        />
      </td>
    </tr>
  );
};

TrackItem.defaultProps = {
  item: {},
};

TrackItem.propTypes = {
  item: PropTypes.object,
};

export default TrackItem;
