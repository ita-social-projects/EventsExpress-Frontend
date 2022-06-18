import React from "react";
import Event from "../EventItem/EventItem";

const ProfileEvents = (arr, currentUser) =>
  arr.map(item => (
    <Event key={item.id} item={item} currentUser={currentUser} />
  ));
export default ProfileEvents;
