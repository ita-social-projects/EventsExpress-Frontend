import React from "react";
import { connect } from "react-redux";
import "./IconsEventCard.scss";

const IconsEventCard = ({ styleForIcon, userId }) => {
  const MAPPER = [
    {
      id: 1,
      visibility: true,
      nameControl: "favorite",
      styles: `heart__icon add-favorite-${styleForIcon}`,
      todo: "TODO: CREATE FUNCTIONAL FOR ADD FAVORITE EVENT",
    },
    {
      id: 2,
      visibility: userId,
      nameControl: "joinToEvent",
      styles: `join-to-event__icon join-to-event-${styleForIcon}`,
      todo: "TODO: CREATE FUNCTIONAL FOR JOIN TO EVENT",
    },
  ];

  return MAPPER.map(
    ({ id, nameControl, styles, todo, visibility }) =>
      visibility !== null && (
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
      ),
  );
};

const mapStateToProps = ({ user }) => ({ userId: user.id });

export default connect(mapStateToProps, {})(IconsEventCard);
