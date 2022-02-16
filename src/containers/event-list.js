import React, { Component } from "react";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { parse as queryStringParse } from "query-string";
import { withRouter } from "react-router-dom";
import EventList from "../components/event/EventList/Event-list";
import SpinnerWrapper from "./spinner";
import { getEvents } from "../actions/event/event-list-action";
import filterHelper from "../components/helpers/filterHelper";

class EventListWrapper extends Component {
  constructor(props) {
    super(props);
    this.objCurrentQueryParams = Object.create(null);
    this.prevQueryStringSearch = "";
  }

  componentDidMount() {
    this.setSearchParamsToEventFilter(this.props.history.location.search);
    const queryString = filterHelper.getQueryStringByFilter(
      this.objCurrentQueryParams,
    );
    this.props.getEvents(queryString);
  }

  componentDidUpdate() {
    if (this.props.history.location.search !== this.prevQueryStringSearch) {
      this.prevQueryStringSearch = this.props.history.location.search;
      this.props.getEvents(this.props.history.location.search);
    }
  }

  setSearchParamsToEventFilter = search => {
    const filterCopy = { ...this.props.events.filter };
    this.objCurrentQueryParams = queryStringParse(search);

    Object.entries(this.objCurrentQueryParams).forEach(function filter([
      key,
      value,
    ]) {
      filterCopy[key] = value;
    });
    this.objCurrentQueryParams = filterHelper.trimUndefinedKeys(filterCopy);
  };

  render() {
    const currentUser =
      this.props.current_user.id !== null ? this.props.current_user : {};
    const { data } = this.props.events;
    const { items } = this.props.events.data;
    return (
      <SpinnerWrapper showContent={data !== undefined}>
        <EventList
          current_user={currentUser}
          dataList={items}
          filter={this.props.events.filter}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          customNoResultsMessage="No events meet the specified criteria. Please make another choice."
        />
      </SpinnerWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    current_user: state.user,
    form_values: getFormValues("event-filter-form")(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: filter => dispatch(getEvents(filter)),
  };
};

EventListWrapper.propTypes = {
  history: PropTypes.object,
  events: PropTypes.object,
  getEvents: PropTypes.func,
  current_user: PropTypes.object,
};

EventListWrapper.defaultProps = {
  history: {},
  events: {},
  getEvents: () => {},
  current_user: {},
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventListWrapper),
);
