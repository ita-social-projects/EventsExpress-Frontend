import React, { createContext } from 'react';
import { connect } from 'react-redux';
import { useFilterActions } from '../filter/filter-hooks';
import { OrderEvents } from './order/order-events';
import { JoinedEventsFilter } from './joined-events/joined-events-filter';
import { get_events } from '../../../actions/event/event-list-action';
import { BookmarkedEvents } from './bookmarks/bookmarked-events';

export const RefreshEventsContext = createContext();

const QuickActions = ({ userId, getEvents }) => {
    const { getQueryWithRequestFilters } = useFilterActions();

    const refreshEvents = () => {
        const filterQuery = getQueryWithRequestFilters();
        getEvents(filterQuery);
    };

    return (
        <div className="d-flex justify-content-end">
            <RefreshEventsContext.Provider value={refreshEvents}>
                <OrderEvents />
                {userId &&
                    <>
                        <JoinedEventsFilter />
                        <BookmarkedEvents />
                    </>
                }
            </RefreshEventsContext.Provider>
        </div>
    );
};

const mapStateToProps = state => ({
    userId: state.user.id,
});

const mapDispatchToProps = dispatch => ({
    getEvents: query => dispatch(get_events(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuickActions);
