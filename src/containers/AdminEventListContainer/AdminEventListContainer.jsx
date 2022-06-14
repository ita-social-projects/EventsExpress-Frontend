import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventList from "../../components/Event/EventList/EventList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import { getEvents } from "../../actions/event/event-list-action";

class AdminEventListContainer extends Component {
  componentWillMount() {
    this.props.getEvents(this.props.params);
  }

  render() {
    const currentUser =
      this.props.current_user.id !== null ? this.props.current_user : {};
    const { data } = this.props.events;
    const { items } = data;

    return (
      <SpinnerContainer showContent={data !== undefined}>
        <EventList
          current_user={currentUser}
          dataList={items}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          callback={this.props.getEvents}
        />
      </SpinnerContainer>
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

AdminEventListContainer.propTypes = {
  getEvents: PropTypes.func,
  current_user: PropTypes.object,
  pageViewModel: PropTypes.object,
  data: PropTypes.object,
  params: PropTypes.string,
  events: PropTypes.object,
};

AdminEventListContainer.defaultProps = {
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
)(AdminEventListContainer);
