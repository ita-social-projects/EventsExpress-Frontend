import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import LeftSidebarListItem from "../NavItem/LeftSidebarListItem";
import { SIDEBAR_LIST_ITEMS } from "../../constants/leftSidebarConstants";
import "./LeftSidebar.scss";

const LeftSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <ul className={`sidebar-menu ${sidebarOpen ? "active" : ""}`}>
      <li className="toggle">
        <button
          type="button"
          onClick={handleSidebarToggle}
          className="toggle-btn"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <ImCross /> : <AiOutlineArrowRight />}
        </button>
      </li>
      {SIDEBAR_LIST_ITEMS.map(item => (
        <LeftSidebarListItem
          key={item.pageName}
          link={item.link}
          faviconIconClass={item.faviconIconClass}
          pageName={item.pageName}
          handleSidebarToggle={handleSidebarToggle}
        />
      ))}
    </ul>
  );
};

export default LeftSidebar;
