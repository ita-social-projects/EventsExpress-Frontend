import React from "react";
import { useLocation } from "react-router-dom";
import EventListWrapper from "../../containers/event-list";
import "./Home.scss";
import Filter from "../Event/filter/filter";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <div className="events-container">
        <EventListWrapper location={location} />
      </div>
      <Filter />
    </>
  );
};

export default Home;
