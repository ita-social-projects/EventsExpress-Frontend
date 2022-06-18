﻿import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DraftList from "../../components/Draft/DraftList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import { getDrafts, resetEvents } from "../../actions/event/event-list-action";
import filterHelper from "../../components/helpers/filterHelper";

// TODO Refactor class component
class EventDraftListContainer extends Component {
  constructor(props) {
    super(props);
    this.objCurrentQueryParams = Object.create(null);
  }

  componentDidMount() {
    this.props.getDrafts(1);
  }

  componentDidUpdate() {
    const objFilterParams = filterHelper.trimUndefinedKeys(
      this.props.events.filter,
    );
    if (this.hasUpdateSearchParams(objFilterParams)) {
      this.objCurrentQueryParams = objFilterParams;
    }
  }

  hasUpdateSearchParams = objFilterParams => {
    return !filterHelper.compareObjects(
      objFilterParams,
      this.objCurrentQueryParams,
    );
  };

  render() {
    const currentUser =
      this.props.currentUser.id !== null ? this.props.currentUser : {};
    const { data } = this.props.events;
    const { items } = this.props.events.data;

    return (
      <SpinnerContainer showContent={data !== undefined}>
        <DraftList
          currentUser={currentUser}
          data_list={items}
          filter={this.props.events.filter}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          reset_events={this.props.resetEvents}
          get_drafts={this.props.getDrafts}
          match={this.props.match}
        />
      </SpinnerContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    currentUser: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_drafts: page => dispatch(getDrafts(page)),
    reset_events: () => dispatch(resetEvents()),
  };
};

EventDraftListContainer.propTypes = {
  getDrafts: PropTypes.func,
  pageViewModel: PropTypes.object,
  resetEvents: PropTypes.func,
  events: PropTypes.object,
  currentUser: PropTypes.object,
  pageNumber: PropTypes.number,
  match: PropTypes.object,
};

EventDraftListContainer.defaultProps = {
  getDrafts: () => {},
  pageViewModel: {},
  resetEvents: () => {},
  events: {},
  currentUser: {},
  pageNumber: null,
  match: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventDraftListContainer);
