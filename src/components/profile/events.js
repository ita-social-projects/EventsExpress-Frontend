import React, { Component } from 'react';
import EventsForProfile from '../event/EventsForProfile/EventsForProfile';
import 'moment-timezone';
import './User-profile.css';

export default class Events extends Component {
  render() {
    const { data } = this.props.events;

    return (
      <div className="shadow pl-2 pr-2 pb-2 mb-5 bg-white rounded">
        <EventsForProfile
          data_list={data.items}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          current_user={this.props.current_user}
          callback={this.props.typeOfEvents}
        />

        {!(data.items && data.items.length > 0) && (
          <div id="notfound" className="w-100">
            <div className="notfound">
              <div className="notfound-404">
                <div className="h1">No Results</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
