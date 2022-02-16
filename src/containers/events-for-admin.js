import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventList from "../components/event/EventList/Event-list";
import SpinnerWrapper from "./spinner";
import { getEvents } from "../actions/event/event-list-action";

class AdminEventListWrapper extends Component {
  componentWillMount() {
    this.props.getEvents(this.props.params);
  }

  render() {
    const currentUser =
      this.props.current_user.id !== null ? this.props.current_user : {};
    const { data } = this.props.events;
    const { items } = data;

    return (
      <SpinnerWrapper showContent={data !== undefined}>
        <EventList
          current_user={currentUser}
          dataList={items}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          callback={this.props.getEvents}
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
    get_events: page => dispatch(getEvents(page)),
  };
};

AdminEventListWrapper.propTypes = {
  getEvents: PropTypes.func,
  current_user: PropTypes.object,
  pageViewModel: PropTypes.object,
  data: PropTypes.object,
  params: PropTypes.string,
  events: PropTypes.object,
};

AdminEventListWrapper.defaultProps = {
  getEvents: () => {},
  current_user: {},
  pageViewModel: {},
  data: {},
  params: "",
  events: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminEventListWrapper);
