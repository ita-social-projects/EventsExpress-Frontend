import {
  EVENT_STATUS_ENUM,
  VISITORS_STATUS,
} from "../constants/eventConstants";

const deniedUsers = visitors =>
  visitors.filter(x => x.userStatusEvent === VISITORS_STATUS.DENIED);

export const canEdit = (isFutureEvent, isMyEvent) => isFutureEvent && isMyEvent;

export const isMyPrivateEvent = (isMyEvent, isPublic) => isMyEvent && !isPublic;

export const canDeleted = (isMyEvent, eventStatus) =>
  isMyEvent && eventStatus === EVENT_STATUS_ENUM.CANCELED;

export const canUncancel = isFutureEvent => isFutureEvent && canDeleted();

export const isAppropriateAge = (isOnlyForAdults, isAdult) =>
  !isOnlyForAdults || isAdult;

export const canJoin = (
  isFutureEvent,
  isFreePlace,
  iWillVisitIt,
  isMyEvent,
  eventStatus,
  isOnlyForAdults,
  isAdult,
) => {
  return (
    isFutureEvent &&
    isFreePlace &&
    !iWillVisitIt &&
    !isMyEvent &&
    eventStatus === EVENT_STATUS_ENUM.ACTIVE &&
    isAppropriateAge(isOnlyForAdults, isAdult)
  );
};

export const canLeave = (
  isFutureEvent,
  isMyEvent,
  iWillVisitIt,
  currentUser,
  visitors,
  eventStatus,
) => {
  return (
    isFutureEvent &&
    !isMyEvent &&
    iWillVisitIt &&
    deniedUsers(visitors).find(x => x.id === currentUser.id) == null &&
    eventStatus === EVENT_STATUS_ENUM.ACTIVE
  );
};

export const canCancel = (
  isFutureEvent,
  currentUser,
  isMyEvent,
  eventStatus,
) => {
  return (
    isFutureEvent &&
    currentUser.id != null &&
    isMyEvent &&
    eventStatus !== EVENT_STATUS_ENUM.CANCELED
  );
};
