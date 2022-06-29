export const EVENT_DEFAULT_IMAGE =
  "data:image/svg+xml,%3Csvg%20width%3D%22344%22%20height%3D%22194%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cdefs%3E%3Cpath%20id%3D%22a%22%20d%3D%22M-1%200h344v194H-1z%22%2F%3E%3C%2Fdefs%3E%3Cg%20transform%3D%22translate(1)%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cmask%20id%3D%22b%22%20fill%3D%22%23fff%22%3E%3Cuse%20xlink%3Ahref%3D%22%23a%22%2F%3E%3C%2Fmask%3E%3Cuse%20fill%3D%22%23BDBDBD%22%20xlink%3Ahref%3D%22%23a%22%2F%3E%3Cg%20mask%3D%22url(%23b)%22%3E%3Cpath%20d%3D%22M173.65%2069.238L198.138%2027%20248%20112.878h-49.3c.008.348.011.697.011%201.046%200%2028.915-23.44%2052.356-52.355%2052.356C117.44%20166.28%2094%20142.84%2094%20113.924c0-28.915%2023.44-52.355%2052.356-52.355%2010%200%2019.347%202.804%2027.294%207.669zm0%200l-25.3%2043.64h50.35c-.361-18.478-10.296-34.61-25.05-43.64z%22%20fill%3D%22%23757575%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

export const LEAVE_MODAL = {
  LEAVE: "Leave",
  EXIT_EVENT: "Exiting from event",
  ALERT_LEAVE_EVENT:
    'Are you sure that you want to leave this event. If you leave, your statement will be deleted. Press "Agree" if you want to leave  event and "Disagree" if not.`',
  AGREE: "Agree",
  DISAGREE: "Disagree",
};

export const ENUM_LOCATION_TYPE = {
  MAP: 0,
  ONLINE: 1,
};

export const FORMATS = {
  MONTH_FORMAT: "MMMM",
  DAY_FORMAT: "DD",
};

export const EVENTS_FILTER = {
  RADIUS: "Radius:",
  RADIUS_KM: "km",
  LOCATION: "Location:",
  BUTTON_LESS: "less...",
  BUTTON_MORE_FILTERS: "more filters...",
  BUTTON_RESET: "Reset",
  BUTTON_FAVORITE: "Favorite",
  BUTTON_SEARCH: "Search",
  OPTIONS_ACTIVE: "Active",
  OPTIONS_BLOCKED: "Blocked",
  OPTIONS_CANCELED: "Canceled",
};

export const EVENT_ITEM_CONSTANTS = {
  PARTICIPANTS: "Participants",
};

export const EVENT_STATUS_BUTTON = {
  TEXT_SUCCESS: "text-success",
  TEXT_DANGER: "text-danger",
};

export const EVENT_STATUS_ENUM = {
  ACTIVE: 0,
  BLOCKED: 1,
  CANCELED: 2,
  DRAFT: 3,
  DELETED: 4,
};

export const EVENT_STATUS_ICON = {
  ACTIVE: "fas fa-unlock",
  BLOCKED: "fas fa-lock",
  CANCELED: "far fa-calendar-times",
};

export const EVENT_STATUS_TITLE = {
  ACTIVE: "Active event",
  BLOCKED: "Blocked event",
  CANCELED: "Canceled event",
};

export const EVENT_VIEW_MODE_MAPPER = [
  { id: 1, control: `menu-view-mode__matrix`, viewMode: "matrix" },
  { id: 2, control: `menu-view-mode__list`, viewMode: "list" },
  { id: 3, control: `menu-view-mode__slider`, viewMode: "slider" },
];

export const VIEW_MODE_TYPES = {
  MATRIX: "matrix",
  LIST: "list",
  SLIDER: "slider",
};

export const VIEW_MODE_KEY_FOR_LOCAL_STORAGE = "viewModeEvents";

export const EVENT_VISITORS = {
  ADMIN: "Admin",
  VISITORS: "Visitors",
  PENDING_USERS: "Pending users",
  DENIED_USERS: "Denied users",
};

export const CARD_TYPE = {
  DRAFT: "draft",
  LANDING: "landing",
  HOME: "home",
  RECCURENT_EVENTS: "eventSchedules",
};
export const EVENT_NO_RESULT = {
  TITLE: "Нou have no events yet",
  SUB_TITLE: "You have not yet created events with the ability to repeat them",
  PHOTO:
    "https://res.cloudinary.com/wunu/image/upload/v1654537602/eventexpress/folder-is-empty-4064360-3363921_y9cgvg.png",
  BTN_TITLE: "Back",
};

export const CANCEL_EVENTS = {
  CANCEL_ONE: "Cancel one",
  CANCEL: "Cancel",
};

export const CREATE_WITHOUT_EDITING = "Create without editing";
export const CREATE_WITH_EDITING = "Create with editing";
export const CONFIRMATION = "Confirmation";
export const ENTER_LOCATION = "Enter an https:// URL:";
export const CURRENT_POSITION_ON_MAP = "Current position on the Map is:";
export const ONLINE_MEETING_HERE = "Online meeting here";
export const RUN = {
  LAST: "Last run",
  NEXT: "Next run",
};
export const FILTERS = "Filters";

export const EVENT_ITEM_VIEW_CONSTS = {
  YOU_GONNA_VISIT: "You are gonna visit.",
  DENIED_PARTICIPATION: "Denied participation.",
  WAIT_ADMIN_APROVE: "Wait until admin approve your request.",
  YOU_NOT_IN_EVENT: "You are not in event yet.",
  PARTICIPANTS: "Participants",
  PUBLIC_EVENT: "Public event",
  PRIVATE_EVENT: "Private event",
  ADULT_LABEL: "18+",
  EVENTS_FOR_ADULTS: "This event is only for adults.",
  AGE_REQUIREMENTS: "You do not meet age requirements for this event.",
};

export const EVENT_SCHEDULE_CONSTS = {
  CLICK: "Click",
  CANCEL_ONE: "Cancel Once",
  CANCEL: "Cancel",
  EDITING: "editing.",
  TO_CREATE_WITH: "to create the event with",
  TO_CREATE_WITHOUT: "to create the event without",
  TO_CANCEL_ALL: "to cancel all events.",
  TO_CANCEL_NEXT: "to cancel the next event.",
};

export const EVENT_CARD_TITLE_SLICE = 30;
export const EVENT_LIST_TITLE_SLICE = 35;
export const EVENT_LIST_DESC_SLICE = 100;

export const EVENT_ITEM_DESC_SLICE = 570;
export const EVENT_ITEM_MAX_DESC = 128;

export const EVENT_OPACITY = {
  HALF: 0.5,
  FULL: 1,
};

export const EVENT_FILTER_Z_INDEX = 2;

export const EVENT_SLICE_CATEGORIES_PARAM = 2;
