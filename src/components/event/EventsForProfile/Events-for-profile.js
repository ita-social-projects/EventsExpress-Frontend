﻿import React, { Component } from 'react';
import Event from '../EventItem/Event-item';
import PagePagination from '../../shared/pagePagination';
import LocalSpinnerWrapper from '../../../containers/local-spinner';

export default class EventsForProfile extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1
        };
        
    }

    componentDidMount = (props) => {
        if (this.props.notification_events == null) {
            this.props.callback( this.state.currentPage);          
        }
    }

    handlePageChange = (page, e) => {
        this.setState({
            currentPage: page
        });

        if (this.props.notification_events != null) {
            this.props.callback(this.props.notification_events, page);
        } else {
            this.props.callback(page);
        }
    };

    renderItems = (arr) => {
        return arr.map((item) => {

            return (
                <Event key={item.id} item={item} current_user={this.props.current_user} />
            );
        });
    }

    render() {
        const { data_list } = this.props;
        const items = this.renderItems(data_list);
        const { page, totalPages } = this.props;

        return <>
            <LocalSpinnerWrapper showContent={ data_list !== null}>
                <div className="row">
                    {items}
                </div>
            
                <br />
                {totalPages > 1 &&
                    <PagePagination
                        currentPage={page}
                        totalPages={totalPages}
                        callback={this.handlePageChange}
                    />
                }   
            </LocalSpinnerWrapper>
        </>
    }
}
