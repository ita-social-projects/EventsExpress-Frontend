// TODO: fix eslint

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

export const SECURITY_TYPES = {
  DEFAULT: {},
  USER: { rolesMatch: ROLES.USER },
  ADMIN: { rolesMatch: ROLES.ADMIN },
  ANONYMOUS: { onlyAnonymous: true },
};
