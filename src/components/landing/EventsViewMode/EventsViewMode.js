import React from "react";
import PropTypes from "prop-types";
import "./EventsViewMode.scss";

const EventsViewMode = ({ setViewMode }) => {
  const MAPPER = [
    { id: 1, control: `menu-view-mode__matrix`, viewMode: "matrix" },
    { id: 2, control: `menu-view-mode__list`, viewMode: "list" },
    { id: 3, control: `menu-view-mode__slider`, viewMode: "slider" },
  ];

  return (
    <div className="menu-view-mode">
      {MAPPER.map(({ id, control, viewMode }) => (
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
};

EventsViewMode.defaultProps = {
  setViewMode: () => {},
};

EventsViewMode.propTypes = {
  setViewMode: PropTypes.func,
};
export default EventsViewMode;
