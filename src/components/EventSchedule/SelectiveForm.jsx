import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./EventSchedule.scss";
import AddFromParentEventContainer from "../../containers/AddEventFromParentContainer/AddFromParentEventContainer";
import EditFromParentEventContainer from "../../containers/EventEditContainer/EditFromParentEventContainer";
import CancelNextEventContainer from "../../containers/CancelEventsContainer/CancelNextEventContainer";
import CancelAllEventsContainer from "../../containers/CancelEventsContainer/CancelAllEventsContainer";
import EventSchedulePopover from "./EventSchedulePopover";
import EventScheduleModal from "./EventScheduleModal";
import { CREATE_WITH_EDITING } from "../../constants/eventConstants";

const SelectiveForm = () => {
  const [options, setOptions] = useState({
    show: false,
    submit: false,
  });

  const cancelHandler = () => {
    setOptions({
      show: false,
      submit: false,
    });
  };

  const onEdit = () => {
    setOptions({
      show: true,
    });
  };

  const submitHandler = () => {
    setOptions({
      show: false,
      submit: true,
    });
  };
  return (
    <>
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <div className="row">
          <div className="col-11">
            <DropdownButton title="Select Option For Event">
              <Dropdown.Item as={AddFromParentEventContainer}></Dropdown.Item>
              <Dropdown.Item onClick={onEdit}>
                {CREATE_WITH_EDITING}
              </Dropdown.Item>
              <Dropdown.Item as={CancelNextEventContainer}></Dropdown.Item>
              <Dropdown.Item as={CancelAllEventsContainer}></Dropdown.Item>
            </DropdownButton>
          </div>
          <EventSchedulePopover />
        </div>
        <EventScheduleModal
          cancelHandler={cancelHandler}
          message="Are you sure you want to create the event with editing?"
          show={options.show}
          submitHandler={submitHandler}
        />
        {options.submit && (
          <div className="mt-3">
            <EditFromParentEventContainer onCancelEditing={cancelHandler} />
          </div>
        )}
      </div>
    </>
  );
};

export default SelectiveForm;
