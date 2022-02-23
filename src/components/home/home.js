<<<<<<< HEAD
import React from "react";
import { useLocation } from "react-router-dom";
import EventListWrapper from "../../containers/event-list";
import "./home.css";
import Filter from "../event/filter/filter";

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
=======
import React, { Component } from 'react';
import EventListWrapper from '../../containers/event-list';
import './home.css';
import { Filter } from '../event/filter/filter';
import QuickActions from '../event/quick-actions/quick-actions';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="events-container">
                    <QuickActions />
                    <EventListWrapper location={this.props.location} />
                </div>
                <Filter />
            </>
        );
    }
}
>>>>>>> 9f0202e6cb942d1752434bea98f2f1bb176395c2
