﻿import React, { Component } from "react";
import { connect } from "react-redux";
import EventList from "../components/event/event-list";
import SpinnerWrapper from "./spinner";
import { get_events } from "../actions/event/event-list-action";

class AdminEventListWrapper extends Component {
  componentWillMount() {
    this.props.get_events(this.props.params);
  }

  render() {
    const current_user =
      this.props.current_user.id !== null ? this.props.current_user : {};
    const { data } = this.props.events;
    const { items } = data;

    return (
      <SpinnerWrapper showContent={data != undefined}>
        <EventList
          current_user={current_user}
          data_list={items}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          callback={this.props.get_events}
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
    get_events: page => dispatch(get_events(page)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminEventListWrapper);
