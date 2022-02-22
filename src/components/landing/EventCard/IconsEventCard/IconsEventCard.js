import React from "react";
import "./IconsEventCard.scss";

const IconsEventCard = ({ styleForIcon }) => {
  const MAPPER = [
    {
      id: 1,
      nameControl: "favorite",
      styles: `heart__icon add-favorite-${styleForIcon}`,
      todo: "TODO: CREATE FUNCTIONAL FOR ADD FAVORITE EVENT",
    },
    {
      id: 2,
      nameControl: "joinToEvent",
      styles: `join-to-event__icon join-to-event-${styleForIcon}`,
      todo: "TODO: CREATE FUNCTIONAL FOR JOIN TO EVENT",
    },
  ];

  return MAPPER.map(({ id, nameControl, styles, todo }) => (
    <label key={id} htmlFor={nameControl} className={styles}>
      <button
        type="button"
        name={nameControl}
        id={nameControl}
        onClick={() => {
          console.log(todo);
        }}
      >
        {" "}
      </button>
    </label>
  ));
};

export default IconsEventCard;
