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
