import React from "react";
import PropTypes from "prop-types";
import { eventViewModeMapper } from "../../../constants/EventsViewModeConstants";
import "./EventsViewMode.scss";

const EventsViewMode = ({ setViewMode }) => (
  <div className="menu-view-mode">
    {eventViewModeMapper.map(({ id, control, viewMode }) => (
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
