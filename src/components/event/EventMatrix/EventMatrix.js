import React from "react";
import EventCardV2 from "./EventCardV2";
import eventMockup from "../../../mockup-db/events";
import "./EventMatrix.scss";

export default function EventMatrix() {
  return (
    <div className="event-matrix">
      <div className="event-matrix__body">
        {eventMockup.map(item => (
          <EventCardV2 key={item.id} title={item.title} src={item.photo} />
        ))}
      </div>
    </div>
  );
}
