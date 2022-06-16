import React from "react";
import { useLocation } from "react-router-dom";
import EventListContainer from "../../containers/EventListContainer/EventListContainer";
import "./Home.scss";
import Filter from "../Event/filter/filter";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <div className="events-container">
        <EventListContainer location={location} />
      </div>
      <Filter />
    </>
  );
};

export default Home;
