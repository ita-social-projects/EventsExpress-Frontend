// TODO: fix eslint
import { PUBLIC, USER, ADMIN, ANONYMOUS } from "./securityConstants";
import {
  CIRCLE_ICON,
  CLONE_ICON,
  EDIT_ICON,
  HOME_ICON,
  SECRET_ICON,
  TRIANGLE_ICON,
  USERS_ICON,
} from "./iconsConstants";
import {
  CONTACT_ADMIN,
  DRAFTS,
  EVENT_SCHEDULES,
  HOME,
  ISSUES,
  SEARCH_USERS,
} from "./routesConstants";
import { ROLES } from "./userConstants";

export const PROFILE_PAGE_NAME = "Profile";
export const COMUNA_NAME = "Comuna";
export const HOME_PAGE_NAME = "Home";
export const SEARCH_USERS_NAME = "Search Users";
export const DRAFT_NAME = "Draft";
export const RECURRENT_EVENTS_NAME = "Recurrent Events";
export const ADMIN_NAME = "Admin";
export const ISSUES_NAME = "Issues";
export const CONTACT_ADMIN_NAME = "Issues";

// eslint-disable-next-line import/prefer-default-export
export const SIDEBAR_LIST_ITEMS = [
  {
    securityState: PUBLIC,
    items: [
      {
        link: HOME,
        faviconIconClass: HOME_ICON,
        pageName: HOME_PAGE_NAME,
      },
    ],
  },
  {
    securityState: USER,
    items: [
      {
        link: SEARCH_USERS,
        faviconIconClass: USERS_ICON,
        pageName: SEARCH_USERS_NAME,
      },
      {
        link: DRAFTS,
        faviconIconClass: EDIT_ICON,
        pageName: DRAFT_NAME,
      },
      {
        link: EVENT_SCHEDULES,
        faviconIconClass: CLONE_ICON,
        pageName: RECURRENT_EVENTS_NAME,
      },
      {
        link: CONTACT_ADMIN,
        faviconIconClass: CIRCLE_ICON,
        pageName: CONTACT_ADMIN_NAME,
      },
    ],
  },
  {
    securityState: ADMIN,
    items: [
      {
        link: ADMIN,
        faviconIconClass: SECRET_ICON,
        pageName: ADMIN_NAME,
      },
      {
        link: ISSUES,
        faviconIconClass: TRIANGLE_ICON,
        pageName: ISSUES_NAME,
      },
    ],
  },
  {
    securityState: ANONYMOUS,
    items: [
      {
        link: CONTACT_ADMIN,
        faviconIconClass: CIRCLE_ICON,
        pageName: CONTACT_ADMIN_NAME,
      },
    ],
  },
];

export const SECURITY_TYPES = {
  DEFAULT: {},
  USER: { rolesMatch: ROLES.USER },
  ADMIN: { rolesMatch: ROLES.ADMIN },
  ANONYMOUS: { onlyAnonymous: true },
};
