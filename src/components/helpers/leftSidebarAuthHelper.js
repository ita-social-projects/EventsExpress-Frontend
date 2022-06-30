import {
  PUBLIC,
  USER,
  ADMIN,
  ANONYMOUS,
} from "../../constants/securityConstants";
import {
  CIRCLE_ICON,
  CLONE_ICON,
  COMMENTS_ICON,
  EDIT_ICON,
  HOME_ICON,
  SECRET_ICON,
  TRIANGLE_ICON,
  USERS_ICON,
} from "../../constants/iconsConstants";
import {
  CONTACT_ADMIN,
  DRAFTS,
  EVENT_SCHEDULES,
  HOME,
  ISSUES,
  SEARCH_USERS,
  USER_CHATS,
  USER_ROUTE,
} from "../../constants/routesConstants";
import {
  ADMIN_NAME,
  COMUNA_NAME,
  CONTACT_ADMIN_NAME,
  DRAFT_NAME,
  HOME_PAGE_NAME,
  ISSUES_NAME,
  PROFILE_PAGE_NAME,
  RECURRENT_EVENTS_NAME,
  SEARCH_USERS_NAME,
} from "../../constants/leftSidebarConstants";

// eslint-disable-next-line import/prefer-default-export
export const sidebarNavigationAuth = (msgForRead, user) => [
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
        link: `${USER_ROUTE}/${user.id}`,
        pageName: PROFILE_PAGE_NAME,
        faviconIconClass: USERS_ICON,
      },
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
      {
        link: USER_CHATS,
        pageName: COMUNA_NAME,
        faviconIconClass: COMMENTS_ICON,
        badgeContent: msgForRead().length,
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
