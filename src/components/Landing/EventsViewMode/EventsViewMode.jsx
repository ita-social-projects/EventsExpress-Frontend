import React from "react";
import PropTypes from "prop-types";
import { EVENT_VIEW_MODE_MAPPER } from "../../../constants/eventConstants";
import "./EventsViewMode.scss";

const EventsViewMode = ({ setViewMode }) => (
  <div className="menu-view-mode">
    {EVENT_VIEW_MODE_MAPPER.map(({ id, control, viewMode }) => (
      <label
        key={id}
        htmlFor={control}
        className={`menu-view-mode__button menu-view-mode__button_${viewMode}`}
      >
        <button
          type="button"
          name={control}
          id={control}
          onClick={() => {
            setViewMode(viewMode);
          }}
        >
          {" "}
        </button>
      </label>
    ))}
  </div>
);

EventsViewMode.defaultProps = {
  setViewMode: () => {},
};

EventsViewMode.propTypes = {
  setViewMode: PropTypes.func,
};
export default EventsViewMode;
