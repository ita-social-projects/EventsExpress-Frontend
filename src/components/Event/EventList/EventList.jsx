import React, { useEffect } from "react";
import PropTypes from "prop-types";
import RenderList from "../RenderList/RenderList";
import { CARD_TYPE } from "../../../constants/eventConstants";

const EventList = ({ items, getEvents, isItemsAvaliable, isItemsFetched }) => {
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <RenderList
      cardType={CARD_TYPE.HOME}
      events={items}
      isItemsAvaliable={isItemsAvaliable}
      isItemsFetched={isItemsFetched}
    />
  );
};

EventList.propTypes = {
  getEvents: PropTypes.func,
  items: PropTypes.array,
  isItemsAvaliable: PropTypes.bool,
  isItemsFetched: PropTypes.bool,
};

EventList.defaultProps = {
  getEvents: () => {},
  items: [],
  isItemsAvaliable: false,
  isItemsFetched: false,
};

export default EventList;
