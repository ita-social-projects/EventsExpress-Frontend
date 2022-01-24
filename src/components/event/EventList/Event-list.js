import React, { useEffect } from 'react';
import RenderList from '../RenderList/RenderList';
import EventCard from '../EventItem/Event-item';
import { parse as queryStringParse } from 'query-string';
import filterHelper from '../../helpers/filterHelper';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import eventStatusEnum from '../../../constants/eventStatusEnum';
import { reset_events, updateEventsFilters } from '../../../actions/event/event-list-action';
import { change_event_status } from '../../../actions/event/event-item-view-action';

const EventList = ({totalPages, history, current_user, onBlock, onUnBlock, ...props }) => {
	useEffect(() => {
		(totalPages > 1 && history.location.search == "") &&
			history.push(history.location.pathname + `?page=1`)
	}, [totalPages, history.location.search])

	const handlePageChange = page => {
        const queryStringToObject = queryStringParse(history.location.search);
		history.location.search == ""
		? 
		    history.push(history.location.pathname + `?page=${page}`)
        :
            queryStringToObject.page = page;
            history.location.search = filterHelper.getQueryStringByFilter(queryStringToObject);
            history.push(history.location.pathname + history.location.search);
			
    };
	
	const renderSingleItem = item => (
        <EventCard
            key={item.id + item.Active}
            item={item}
            current_user={current_user}
            onBlock={onBlock}
            onUnBlock={onUnBlock}
        />
    )
	return <RenderList {...props} renderSingleItem={renderSingleItem} handlePageChange={handlePageChange} />
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset_events: () => dispatch(reset_events()),
        updateEventsFilters: (filter) => dispatch(updateEventsFilters(filter)),
        onBlock: (eventId, reason) => dispatch(change_event_status(eventId, reason, eventStatusEnum.Blocked)),
        onUnBlock: (eventId, reason) => dispatch(change_event_status(eventId, reason, eventStatusEnum.Active))
    }
};

export default withRouter(connect(
    null,
    mapDispatchToProps
)(EventList));
