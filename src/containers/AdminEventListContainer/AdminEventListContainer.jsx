import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventList from "../../components/Event/EventList/EventList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import { getEvents } from "../../actions/event/event-list-action";

// TODO Refactor class component

class AdminEventListContainer extends Component {
  componentWillMount() {
    this.props.getEventsForAdmin(this.props.params);
  }

  render() {
    const currentUser =
      this.props.currentUser.id !== null ? this.props.currentUser : {};
    const { data } = this.props.events;
    const { items } = data;

    return (
      <SpinnerContainer showContent={data !== undefined}>
        <EventList
          current_user={currentUser}
          dataList={items}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          callback={this.props.getEventsForAdmin}
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
    getEventsForAdmin: page => dispatch(getEvents(page)),
  };
};

AdminEventListContainer.propTypes = {
  getEventsForAdmin: PropTypes.func,
  currentUser: PropTypes.object,
  pageViewModel: PropTypes.object,
  data: PropTypes.object,
  params: PropTypes.string,
  events: PropTypes.object,
};

AdminEventListContainer.defaultProps = {
  getEventsForAdmin: () => {},
  currentUser: {},
  pageViewModel: {},
  data: {},
  params: "",
  events: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminEventListContainer);
