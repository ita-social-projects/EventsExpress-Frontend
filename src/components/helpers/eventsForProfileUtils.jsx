import React from "react";
import Event from "../Event/EventItem/EventItem";

const renderItems = (arr, currentUser) =>
  arr.map(item => (
    <Event key={item.id} item={item} currentUser={currentUser} />
  ));
export default renderItems;
