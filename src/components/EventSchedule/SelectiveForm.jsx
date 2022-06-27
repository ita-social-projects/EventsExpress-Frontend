import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./EventSchedule.scss";
import AddFromParentEventContainer from "../../containers/AddEventFromParentContainer/AddFromParentEventContainer";
import EditFromParentEventContainer from "../../containers/EventEditContainer/EditFromParentEventContainer";
import CancelNextEventContainer from "../../containers/CancelEventsContainer/CancelNextEventContainer";
import CancelAllEventsContainer from "../../containers/CancelEventsContainer/CancelAllEventsContainer";
import EventSchedulePopover from "./EventSchedulePopover";
import EventScheduleModal from "./EventScheduleModal";

export default class SelectiveForm extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      submit: false,
    };
  }

  cancelHandler = () => {
    this.setState({
      show: false,
      submit: false,
    });
  };

  onEdit = () => {
    this.setState({
      show: true,
    });
  };

  submitHandler = () => {
    this.setState({
      show: false,
      submit: true,
    });
  };

  render() {
    return (
      <>
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <div className="row">
            <div className="col-11">
              <DropdownButton title="Select Option For Event">
                <Dropdown.Item as={AddFromParentEventContainer}></Dropdown.Item>
                <Dropdown.Item onClick={this.onEdit}>
                  {"Create with editing"}
                </Dropdown.Item>
                <Dropdown.Item as={CancelNextEventContainer}></Dropdown.Item>
                <Dropdown.Item as={CancelAllEventsContainer}></Dropdown.Item>
              </DropdownButton>
            </div>
            <EventSchedulePopover />
          </div>
          <EventScheduleModal
            cancelHandler={this.cancelHandler}
            message="Are you sure you want to create the event with editing?"
            show={this.state.show}
            submitHandler={this.submitHandler}
          />
          {this.state.submit && (
            <div className="mt-3">
              <EditFromParentEventContainer
                onCancelEditing={this.cancelHandler}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}
