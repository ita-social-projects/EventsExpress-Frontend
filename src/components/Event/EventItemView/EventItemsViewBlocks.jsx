import React from "react";
import Moment from "react-moment";
import { EVENT_ITEM_VIEW_CONSTS } from "../../../constants/eventConstants";
import { USER_STATUS_ENUM } from "../../../constants/userConstants";
import { isAppropriateAge } from "../../../services/EventItemViewService";

const INT32_MAX_VALUE = 2147483647;

const approvedUsers = visitors => visitors.filter(x => x.userStatusEvent === 0);

export const eventStatusBlock = isPublic => {
  return (
    <>
      {isPublic ? (
        <span>{EVENT_ITEM_VIEW_CONSTS.PUBLIC_EVENT}</span>
      ) : (
        <span>{EVENT_ITEM_VIEW_CONSTS.PRIVATE_EVENT}</span>
      )}
    </>
  );
};

const getUserEventStatus = visitor => {
  if (visitor !== undefined) {
    switch (visitor.userStatusEvent) {
      case USER_STATUS_ENUM.APPROVED:
        return (
          <span className="alert alert-success shadow" role="alert">
            {EVENT_ITEM_VIEW_CONSTS.YOU_GONNA_VISIT}
          </span>
        );
      case USER_STATUS_ENUM.DENIED:
        return (
          <span className="alert alert-danger shadow" role="alert">
            {EVENT_ITEM_VIEW_CONSTS.DENIED_PARTICIPATION}
          </span>
        );
      case USER_STATUS_ENUM.PENDING:
        return (
          <span className="alert alert-warning shadow" role="alert">
            {EVENT_ITEM_VIEW_CONSTS.WAIT_ADMIN_APROVE}
          </span>
        );
      default:
        return null;
    }
  }
  return (
    <span className="alert alert-secondary shadow" role="alert">
      {EVENT_ITEM_VIEW_CONSTS.YOU_NOT_IN_EVENT}
    </span>
  );
};

export const maxParticipantsBlock = (maxParticipants, visitors) => {
  return (
    <>
      {maxParticipants < INT32_MAX_VALUE ? (
        <span className="max-participants">
          {approvedUsers(visitors).length}
          {"/"}
          {maxParticipants}
          <span className="pl-2">{EVENT_ITEM_VIEW_CONSTS.PARTICIPANTS}</span>
        </span>
      ) : (
        <span className="max-participants">
          {approvedUsers.length}
          <span className="pl-2">{EVENT_ITEM_VIEW_CONSTS.PARTICIPANTS}</span>
        </span>
      )}
    </>
  );
};

export const isAppropriateAgeBlock = (
  isOnlyForAdults,
  isAdult,
  visitors,
  currentUser,
) => {
  return (
    <div className="d-flex justify-content-center">
      {isAppropriateAge(isOnlyForAdults, isAdult) ? (
        getUserEventStatus(visitors.find(x => x.id === currentUser.id))
      ) : (
        <span className="alert alert-warning shadow" role="alert">
          {EVENT_ITEM_VIEW_CONSTS.AGE_REQUIREMENTS}
        </span>
      )}
    </div>
  );
};

export const dateBlock = (dateTo, dateFrom) => {
  return (
    <span>
      <Moment format="D MMM YYYY" withTitle>
        {dateFrom}
      </Moment>
      {dateTo !== dateFrom && (
        <>
          <Moment format="D MMM YYYY" withTitle>
            {dateTo}
          </Moment>
        </>
      )}
    </span>
  );
};
