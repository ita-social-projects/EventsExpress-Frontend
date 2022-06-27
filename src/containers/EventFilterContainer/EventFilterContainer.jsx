import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFormValues, reset } from "redux-form";
import { withRouter } from "react-router-dom";
import EventFilter from "../../components/Event/EventFilter/EventFilter";
import getСategoriesList from "../../actions/category/category-list-action";
import { EVENTS_FILTER } from "../../constants/eventConstants";
import {
  getDefaultEventFilter,
  trimUndefinedKeys,
  getQueryStringByFilter,
} from "../../components/helpers/filterHelper/filterHelper";

// TODO Refactor class component
class EventFilterContainer extends Component {
  componentWillMount() {
    this.props.getСategoriesList();
  }

  onReset = () => {
    this.props.resetEvents();
    this.props.history.push(`${this.props.history.location.pathname}?page=1`);
  };

  onLoadUserDefaults = () => {
    this.props.resetEvents();
    const defaultFilter = {
      ...getDefaultEventFilter(),
      categories: this.props.currentUser.categories.map(item => item.id),
    };
    const favoriteFilter = getQueryStringByFilter(defaultFilter);
    this.props.history.push(
      this.props.history.location.pathname +
        this.trimRadiusFromQueryString(favoriteFilter),
    );
  };

  onSubmit = initialFilters => {
    const filters = trimUndefinedKeys(initialFilters);
    const filterCopy = { ...this.props.events.filter };
    Object.entries(filters).forEach(([key, value]) => {
      switch (key) {
        case EVENTS_FILTER.PAGE:
          filterCopy[key] = value;
          break;
        case EVENTS_FILTER.DATE_TO:
          filterCopy[key] = new Date(value).toDateString();
          break;
        case EVENTS_FILTER.CATEGORIES:
          filterCopy[key] = value.map(item => item.id);
          break;
        case EVENTS_FILTER.STATUSES:
          filterCopy[key] = value;
          break;
        case EVENTS_FILTER.RADIUS:
          filterCopy[key] = value;
          break;
        case EVENTS_FILTER.SELECTED_POS:
          filterCopy.x = value.latitude;
          filterCopy.y = value.longitude;
          filterCopy[key] = undefined;
          break;
        default:
          filterCopy[key] = value;
          break;
      }
    });
    const queryString = getQueryStringByFilter(filterCopy);

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
    const filter = trimUndefinedKeys(this.props.events.filter);
    const values = { ...filter };

    if (filter.categories.length) {
      values.categories = this.props.allCategories.data.filter(item =>
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
          allCategories={this.props.allCategories}
          onLoadUserDefaults={this.onLoadUserDefaults}
          onSubmit={this.onSubmit}
          onReset={this.onReset}
          formValues={this.props.formValues}
          currentUser={this.props.currentUser}
          initialFormValues={initialFormValues}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  allCategories: state.categories,
  events: state.events,
  formValues: getFormValues("event-filter-form")(state),
  currentUser: state.user,
});

const mapDispatchToProps = dispatch => {
  return {
    getСategoriesList: () => dispatch(getСategoriesList()),
    resetEvents: () => dispatch(reset("event-filter-form")),
  };
};

EventFilterContainer.propTypes = {
  getСategoriesList: PropTypes.func,
  history: PropTypes.array,
  resetEvents: PropTypes.func,
  currentUser: PropTypes.object,
  events: PropTypes.object,
  allCategories: PropTypes.object,
  formValues: PropTypes.object,
};
EventFilterContainer.defaultProps = {
  getСategoriesList: () => {},
  resetEvents: () => {},
  history: [],
  currentUser: {},
  events: [],
  allCategories: {},
  formValues: {},
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventFilterContainer),
);
