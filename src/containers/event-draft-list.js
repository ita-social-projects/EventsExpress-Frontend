﻿import React, { Component } from "react";
import { connect } from "react-redux";
import DraftList from "../components/Draft/Draft-list";
import SpinnerWrapper from "./spinner";
import { get_drafts, reset_events } from "../actions/event/event-list-action";
import filterHelper from "../components/helpers/filterHelper";

class EventDraftListWrapper extends Component {
  constructor(props) {
    super(props);
    this.objCurrentQueryParams = Object.create(null);
  }

  componentDidMount() {
    this.props.get_drafts(1);
  }

  componentDidUpdate(prevProps) {
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
    const current_user =
      this.props.current_user.id !== null ? this.props.current_user : {};
    const { data } = this.props.events;
    const { items } = this.props.events.data;

    return (
      <SpinnerWrapper showContent={data != undefined}>
        <DraftList
          current_user={current_user}
          data_list={items}
          filter={this.props.events.filter}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          reset_events={this.props.reset_events}
          get_drafts={this.props.get_drafts}
          match={this.props.match}
        />
      </SpinnerWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    current_user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_drafts: page => dispatch(get_drafts(page)),
    reset_events: () => dispatch(reset_events()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventDraftListWrapper);
