import React from "react";
import { ALL_STYLE_ICON, ALL_LINK } from "../../constants/footerConstants";
import LinkItem from "../shared/LinkItem/LinkItem";

const { LINK_FACEBOOK, LINK_INSTAGRAM, LINK_YOUTUBE } = ALL_LINK;

const { STYLE_ICON_FACEBOOK, STYLE_ICON_INSTAGRAM, STYLE_ICON_YOUTUBE } =
  ALL_STYLE_ICON;

const SOCIAL_LINKS = [
  { icon: STYLE_ICON_FACEBOOK, link: LINK_FACEBOOK },
  { icon: STYLE_ICON_INSTAGRAM, link: LINK_INSTAGRAM },
  { icon: STYLE_ICON_YOUTUBE, link: LINK_YOUTUBE },
];

const SOCIAL_NAV_LINKS = SOCIAL_LINKS.map(({ link, icon }) => (
  <LinkItem href={link} key={link} icon={icon} />
));

export default SOCIAL_NAV_LINKS;
