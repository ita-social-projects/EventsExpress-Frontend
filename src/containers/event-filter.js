import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFormValues, reset } from "redux-form";
import { withRouter } from "react-router-dom";
import EventFilter from "../components/event/EventFilter/Event-filter";
import getСategoriesList from "../actions/category/category-list-action";
import filterHelper from "../components/helpers/filterHelper";
import EventFilterConstants from "../constants/EventFilterConstants";

class EventFilterWrapper extends Component {
  componentWillMount() {
    this.props.getСategoriesList();
  }

  onReset = () => {
    this.props.reset_events();
    this.props.history.push(`${this.props.history.location.pathname}?page=1`);
  };

  onLoadUserDefaults = () => {
    this.props.reset_events();
    const defaultFilter = {
      ...filterHelper.getDefaultEventFilter(),
      categories: this.props.current_user.categories.map(item => item.id),
    };
    const favoriteFilter = filterHelper.getQueryStringByFilter(defaultFilter);
    this.props.history.push(
      this.props.history.location.pathname +
        this.trimRadiusFromQueryString(favoriteFilter),
    );
  };

  onSubmit = initialFilters => {
    const filters = filterHelper.trimUndefinedKeys(initialFilters);
    const filterCopy = { ...this.props.events.filter };
    Object.entries(filters).forEach(([key, value]) => {
      switch (key) {
        case EventFilterConstants.PAGE:
          filterCopy[key] = value;
          break;
        case EventFilterConstants.DATE_TO:
          filterCopy[key] = new Date(value).toDateString();
          break;
        case EventFilterConstants.CATEGORIES:
          filterCopy[key] = value.map(item => item.id);
          break;
        case EventFilterConstants.STATUSES:
          filterCopy[key] = value;
          break;
        case EventFilterConstants.RADIUS:
          filterCopy[key] = value;
          break;
        case EventFilterConstants.SELECTED_POS:
          filterCopy.x = value.latitude;
          filterCopy.y = value.longitude;
          filterCopy[key] = undefined;
          break;
        default:
          filterCopy[key] = value;
          break;
      }
    });
    const queryString = filterHelper.getQueryStringByFilter(filterCopy);

    if (filterCopy.x !== undefined && filterCopy.y !== undefined)
      this.props.history.push(
        this.props.history.location.pathname + queryString,
      );
    else
      this.props.history.push(
        this.props.history.location.pathname +
          this.trimRadiusFromQueryString(queryString),
      );
  };

  trimRadiusFromQueryString = queryString => {
    return queryString.toString().replace("&radius=8", "");
  };

  buildInitialFormValues = () => {
    const filter = filterHelper.trimUndefinedKeys(this.props.events.filter);
    const values = { ...filter };

    if (filter.categories.length) {
      values.categories = this.props.all_categories.data.filter(item =>
        filter.categories.some(filterItem => filterItem === item.id),
      );
    }
    return values;
  };

  render() {
    const initialFormValues = this.buildInitialFormValues();
    return (
      <>
        <EventFilter
          allCategories={this.props.all_categories}
          onLoadUserDefaults={this.onLoadUserDefaults}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
          formValues={this.props.form_values}
          currentUser={this.props.current_user}
          initialFormValues={initialFormValues}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  all_categories: state.categories,
  events: state.events,
  form_values: getFormValues("event-filter-form")(state),
  current_user: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    getСategoriesList: () => dispatch(getСategoriesList()),
    reset_events: () => dispatch(reset("event-filter-form")),
  };
};

EventFilterWrapper.propTypes = {
  getСategoriesList: PropTypes.func,
  history: PropTypes.array,
  reset_events: PropTypes.func,
  current_user: PropTypes.object,
  events: PropTypes.object,
  all_categories: PropTypes.object,
  form_values: PropTypes.object,
};
EventFilterWrapper.defaultProps = {
  getСategoriesList: () => {},
  reset_events: () => {},
  history: [],
  current_user: {},
  events: [],
  all_categories: {},
  form_values: {},
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventFilterWrapper),
);
