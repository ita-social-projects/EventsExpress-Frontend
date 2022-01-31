import React from "react";
import Event from "../event/EventItem/Event-item";

const renderItems = (arr, currentUser) =>
  arr.map(item => (
    <Event key={item.id} item={item} current_user={currentUser} />
  ));

  export default renderItems;