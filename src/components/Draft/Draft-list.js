﻿/* eslint-disable react/no-unused-state */
import React, { Component } from "react";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
import DraftEventCard from "./DraftEventCard";
import RenderList from "../event/RenderList/RenderList";
import { changeEventStatus } from "../../actions/event/event-item-view-action";
import eventStatusEnum from "../../constants/eventStatusEnum";
import { setSuccessAllert } from "../../actions/alert-action";

const history = createBrowserHistory({ forceRefresh: true });

class DraftList extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
  }

  handlePageChange = page => {
    this.props.get_drafts(page);
    this.setState({
      currentPage: page,
    });
  };

  renderSingleItem = item => (
    <DraftEventCard
      key={item.id + item.isBlocked}
      item={item}
      current_user={this.props.current_user}
      onDelete={this.onDelete}
    />
  );

  onDelete = async (eventId, reason) => {
    await this.props.delete(eventId, reason);
    this.props.alert("Your event has been successfully deleted!");
    history.push(`/drafts`);
  };

  render() {
    return (
      <>
        <RenderList
          {...this.props}
          renderSingleItem={this.renderSingleItem}
          handlePageChange={this.handlePageChange}
        />
      </>
    );
  }
}

DraftList.defaultProps = {
  alert: () => {},
  delete: () => {},
  get_drafts: () => {},
  current_user: {},
};

DraftList.propTypes = {
  alert: PropTypes.func,
  delete: PropTypes.func,
  get_drafts: PropTypes.func,
  current_user: PropTypes.object,
};

const mapDispatchToProps = dispatch => {
  return {
    alert: msg => dispatch(setSuccessAllert(msg)),
    delete: (eventId, reason) =>
      dispatch(changeEventStatus(eventId, reason, eventStatusEnum.DELETED)),
  };
};

export default connect(null, mapDispatchToProps)(DraftList);
