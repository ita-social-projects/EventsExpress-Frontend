import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.scss";
import {
  ALL_PATH,
  ALL_STYLE_ICON,
  ALL_LINK,
  FOOTER_LABELS,
} from "../../constants/footerConstants";

const { HOME, CREATE_EVENT, SEARCH_EVENT, TERMS, ABOUT } = FOOTER_LABELS;
const { LINK_FACEBOOK, LINK_INSTAGRAM, LINK_YOUTUBE } = ALL_LINK;
const {
  PATH_HOME,
  PATH_CREATE_EVENT,
  PATH_SEARCH_EVENT,
  PATH_TERMS,
  PATH_ABOUT,
} = ALL_PATH;

const { STYLE_ICON_FACEBOOK, STYLE_ICON_INSTAGRAM, STYLE_ICON_YOUTUBE } =
  ALL_STYLE_ICON;

const LINKS = [
  { path: PATH_HOME, name: HOME },
  { path: PATH_SEARCH_EVENT, name: SEARCH_EVENT },
  { path: PATH_CREATE_EVENT, name: CREATE_EVENT },
  { path: PATH_TERMS, name: TERMS },
  { path: PATH_ABOUT, name: ABOUT },
];

const SOCIAL_LINKS = [
  { icon: STYLE_ICON_FACEBOOK, link: LINK_FACEBOOK },
  { icon: STYLE_ICON_INSTAGRAM, link: LINK_INSTAGRAM },
  { icon: STYLE_ICON_YOUTUBE, link: LINK_YOUTUBE },
];

export const NAV_LINKS = LINKS.map(({ path, name }) => (
  <NavLink to={path} key={name} className="footer__link_item">
    {name}
  </NavLink>
));

export const SOCIAL_NAV_LINKS = SOCIAL_LINKS.map(({ link, icon }) => (
  <NavLink to={link} key={link} className="nav-link social-link">
    <i className={icon} />
  </NavLink>
));
