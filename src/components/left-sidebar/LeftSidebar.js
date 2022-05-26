import React from "react";
import LeftSidebarListItem from "../NavItem/LeftSidebarListItem";
import "./LeftSidebar.scss";

const LeftSidebar = () => {
  const [open, setOpen] = React.useState(true);
  const [listClass, setListClass] = React.useState("open");
  const [mobileToggler, setMobileToggler] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setListClass("closed");
      setOpen(false);
      setMobileToggler(true);
    }
  }, []);

  const handleListToggle = () => {
    if (open) {
      setListClass("exiting");
      setTimeout(() => {
        setListClass("closed");
        setOpen(false);
      }, 300);
    } else {
      setListClass("open");
      setOpen(true);
    }
  };

  return (
    <div className="left-sidebar">
      <nav className={`${listClass}`}>
        <button
          className="open-close-btn"
          type="button"
          onClick={handleListToggle}
        >
          {listClass === "closed" ? ">" : "X"}
        </button>

        <ul className={`sidebar-pages `}>
          <LeftSidebarListItem
            handleItemSelect={mobileToggler ? handleListToggle : () => {}}
            link="/home"
            faviconIconClass="fa fa-home"
            pageName="Home"
          />
          <LeftSidebarListItem
            handleItemSelect={mobileToggler ? handleListToggle : () => {}}
            link="/drafts"
            faviconIconClass="fa fa-edit"
            pageName="Draft"
          />
          <LeftSidebarListItem
            handleItemSelect={mobileToggler ? handleListToggle : () => {}}
            link="/search/users?page=1"
            faviconIconClass="fa fa-users"
            pageName="Search Users"
          />
          <LeftSidebarListItem
            handleItemSelect={mobileToggler ? handleListToggle : () => {}}
            link="/eventSchedules"
            faviconIconClass="fa fa-clone"
            pageName="Recurrent Events"
          />
          <LeftSidebarListItem
            handleItemSelect={mobileToggler ? handleListToggle : () => {}}
            link="/contactAdmin"
            faviconIconClass="fa fa-exclamation-circle"
            pageName="Contact us"
          />
          <LeftSidebarListItem
            handleItemSelect={mobileToggler ? handleListToggle : () => {}}
            link="/user_chats"
            faviconIconClass="fas fa-comments"
            pageName="Comuna"
          />
          <LeftSidebarListItem
            handleItemSelect={mobileToggler ? handleListToggle : () => {}}
            link="/admin/"
            faviconIconClass="fa fa-user-secret"
            pageName="Admin"
          />
          <LeftSidebarListItem
            handleItemSelect={mobileToggler ? handleListToggle : () => {}}
            link="/contactAdmin/issues?page=1"
            faviconIconClass="fa fa-exclamation-triangle"
            pageName="Issues"
          />
        </ul>
      </nav>
    </div>
  );
};

export default LeftSidebar;
