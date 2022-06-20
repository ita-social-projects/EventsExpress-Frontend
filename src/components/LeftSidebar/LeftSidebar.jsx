import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import "./LeftSidebar.scss";
import LeftSidebarItemsSecurity from "./LeftSidebarItems/LeftSidebarItemsSecurity";

const LeftSidebar = ({ user, msgForRead }) => {
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
      <LeftSidebarItemsSecurity
        user={user}
        msgForRead={msgForRead}
        handleSidebarToggle={handleSidebarToggle}
      />
    </ul>
  );
};

LeftSidebar.defaultProps = {
  user: {},
  msgForRead: () => {},
};

LeftSidebar.propTypes = {
  user: PropTypes.object,
  msgForRead: PropTypes.func,
};

export default LeftSidebar;
