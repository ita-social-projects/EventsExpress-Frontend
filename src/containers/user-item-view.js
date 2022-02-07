import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Profile from "../components/profile/user-profile";
import SpinnerWrapper from "./spinner";
import getUser, {
  setAttitude,
  resetUser,
} from "../actions/user/user-item-view-action";
import {
  getFutureEvents,
  getPastEvents,
  getVisitedEvents,
  getEventsTogo,
} from "../actions/events/events-for-profile-action";
// TODO Unused state field: 'flag'
class UserItemViewWrapper extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     flag: false,
  //   };
  // }

  componentWillMount = () => {
    const { id } = this.props.match.params;
    this.props.getUser(id);
  };

  componentWillUnmount() {
    this.props.resetUser();
  }

  componentWillUpdate = newProps => {
    if (newProps.match.params.id !== this.props.match.params.id)
      this.props.getUser(newProps.match.params.id);
    if (newProps.currentUser !== this.props.currentUser)
      this.props.getUser(newProps.match.params.id);
  };

  onLike = () => {
    this.props.setAttitude({
      userFromId: this.props.currentUser,
      userToId: this.props.profile.data.id,
      attitude: 0,
    });
  };

  onDislike = () => {
    this.props.setAttitude({
      userFromId: this.props.currentUser,
      userToId: this.props.profile.data.id,
      attitude: 1,
    });
  };

  onReset = () => {
    this.props.setAttitude({
      userFromId: this.props.currentUser,
      userToId: this.props.profile.data.id,
      attitude: 2,
    });
  };

  onFuture = page => {
    // this.setState({ flag: false });
    this.props.getFutureEvents(this.props.profile.data.id, page);
  };

  onPast = page => {
    // this.setState({ flag: false });
    this.props.getPastEvents(this.props.profile.data.id, page);
  };

  onVisited = page => {
    // this.setState({ flag: false });
    this.props.getVisitedEvents(this.props.profile.data.id, page);
  };

  onToGo = page => {
    // this.setState({ flag: false });
    this.props.getEventsTogo(this.props.profile.data.id, page);
  };

  render() {
    const { data } = this.props.profile;

    return (
      <SpinnerWrapper showContent={data !== null}>
        <Profile
          onLike={this.onLike}
          onDislike={this.onDislike}
          onReset={this.onReset}
          events={this.props.events}
          onFuture={this.onFuture}
          onPast={this.onPast}
          onVisited={this.onVisited}
          onToGo={this.onToGo}
          data={data}
          currentUser={this.props.currentUser}
          history={this.props.history}
        />
      </SpinnerWrapper>
    );
  }
}

UserItemViewWrapper.propTypes = {
  profile: PropTypes.object,
  currentUser: PropTypes.string,
  match: PropTypes.object,
  getEventsTogo: PropTypes.func,
  getVisitedEvents: PropTypes.func,
  getUser: PropTypes.func,
  resetUser: PropTypes.func,
  setAttitude: PropTypes.func,
  getFutureEvents: PropTypes.func,
  getPastEvents: PropTypes.func,
  events: PropTypes.object,
  history: PropTypes.object,
};

UserItemViewWrapper.defaultProps = {
  profile: {},
  currentUser: "",
  match: {},
  getEventsTogo: () => {},
  getVisitedEvents: () => {},
  getUser: () => {},
  resetUser: () => {},
  setAttitude: () => {},
  getFutureEvents: () => {},
  getPastEvents: () => {},
  events: {},
  history: {},
};

const mapStateToProps = state => ({
  profile: state.profile,
  currentUser: state.user.id,
  events: state.events_for_profile,
});

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    setAttitude: values => dispatch(setAttitude(values)),
    getPastEvents: (id, page) => dispatch(getPastEvents(id, page)),
    getFutureEvents: (id, page) => dispatch(getFutureEvents(id, page)),
    getVisitedEvents: (id, page) => dispatch(getVisitedEvents(id, page)),
    getEventsTogo: (id, page) => dispatch(getEventsTogo(id, page)),
    resetUser: () => dispatch(resetUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserItemViewWrapper);
