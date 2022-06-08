// import { createBrowserHistory } from "history";
import React from "react";
import { useHistory } from "react-router-dom";
import "./NoResult.scss";

const NoResult = () => {
  // const history = createBrowserHistory({ forceRefresh: true });
  // onClick={() => history.push("/landing")}
  const history = useHistory();
  return (
    <>
      <div className="containerText">
        <h1 className="headText">Нou have no events yet</h1>
        <h4 className="subTitleText">
          You have not yet created events with the ability to repeat them
        </h4>
      </div>
      <img
        src="https://res.cloudinary.com/wunu/image/upload/v1654537602/eventexpress/folder-is-empty-4064360-3363921_y9cgvg.png"
        alt="No Result"
        className="image"
      />
      <button
        className="bannerButton"
        onClick={() => history.push("/landing")}
        type="button"
      >
        Back
      </button>
    </>
  );
};

export default NoResult;
