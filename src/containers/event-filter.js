import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormValues, reset } from "redux-form";
import { withRouter } from "react-router";
import EventFilter from "../components/event/EventFilter/Event-filter";
import get_categories from "../actions/category/category-list-action";
import filterHelper from "../components/helpers/filterHelper";

class EventFilterWrapper extends Component {
  componentWillMount() {
    this.props.get_categories();
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

  onSubmit = filters => {
    filters = filterHelper.trimUndefinedKeys(filters);
    const filterCopy = { ...this.props.events.filter };
    Object.entries(filters).forEach(function ([key, value]) {
      switch (key) {
        case "page":
          filterCopy[key] = value;
        case "dateFrom":
        case "dateTo":
          filterCopy[key] = new Date(value).toDateString();
          break;
        case "categories":
          filterCopy[key] = value.map(item => item.id);
          break;
        case "statuses":
          filterCopy[key] = value;
          break;
        case "radius":
          filterCopy[key] = value;
          break;
        case "selectedPos":
          var x = value.latitude;
          var y = value.longitude;
          filterCopy.x = x;
          filterCopy.y = y;
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
    get_categories: () => dispatch(get_categories()),
    reset_events: () => dispatch(reset("event-filter-form")),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventFilterWrapper),
);
