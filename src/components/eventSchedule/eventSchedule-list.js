import React, { Component } from "react";
import PropTypes from "prop-types";
import EventSchedule from "./eventSchedule-item";

class EventSchedulesList extends Component {
  renderItems = arr =>
    arr.map(item => (
      <EventSchedule
        key={item.id}
        item={item}
        current_user={this.props.currentUser}
      />
    ));

  render() {
    const items = this.renderItems(this.props.dataList);
    const { dataList } = this.props;

    return (
      <>
        <div className="row">
          {dataList.length > 0 ? (
            items
          ) : (
            <div id="notfound" className="w-100">
              <div className="notfound">
                <div className="notfound-404">
                  <div className="h1">No Results</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

EventSchedulesList.propTypes = {
  dataList: PropTypes.array,
  currentUser: PropTypes.object,
};

EventSchedulesList.defaultProps = {
  dataList: [],
  currentUser: {},
};

export default EventSchedulesList;
