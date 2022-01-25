import React, { Component } from "react";
import EventFilterWrapper from "../../../containers/event-filter";
import AdminEventListWrapper from "../../../containers/events-for-admin";

export default class EventsForAdmin extends Component {
  render() {
    const { location } = this.props;

    return (
      <>
        <EventFilterWrapper />
        <div className="admin-events-container">
          <AdminEventListWrapper params={location.search} />
        </div>
      </>
    );
  }
}
