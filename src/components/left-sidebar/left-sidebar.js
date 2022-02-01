import React, { Component } from "react";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";
import "./left-sidebar.css";
import NavItem from "../NavItem/NavItem";
import AuthComponent from "../../security/authComponent";
import Roles from "../../constants/userRoles";

class LeftSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "left-sidebar-closed",
    };
  }

  render() {
    const LEFT_SIDEBAR_OPENED = "left-sidebar-opened";
    const LEFT_SIDEBAR_CLOSED = "left-sidebar-closed";
    return (
      <>
        <div
          id="open-close-zone"
          className={`${this.state.class} d-flex justify-content-start`}
          onClick={() => {
            return this.state.class === LEFT_SIDEBAR_OPENED
              ? this.setState({ class: LEFT_SIDEBAR_CLOSED })
              : this.setState({ class: LEFT_SIDEBAR_OPENED });
          }}
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
        >
          <button className="open-close-btn" type="button">
            {this.state.class === LEFT_SIDEBAR_OPENED ? "×" : "☰"}
          </button>
        </div>
        <div className={`${this.state.class} left-sidebar`}>
          <nav>
            <hr />
            <ul className="list-unstyled">
              <NavItem to="/home" icon="fa fa-home" text="Home" />
              <AuthComponent rolesMatch={Roles.User}>
                <NavItem
                  to={`/user/${this.props.user.id}`}
                  icon="fa fa-user"
                  text="Profile"
                />
                <NavItem to="/drafts" icon="fa fa-edit" text="Draft" />
                <NavItem
                  to="/search/users?page=1"
                  icon="fa fa-users"
                  text="Search Users"
                />
                <NavItem
                  to="/eventSchedules"
                  myIcon={<i className="fa fa-clone" />}
                  text="Recurrent Events"
                />
                <NavItem
                  to="/contactAdmin"
                  icon="fa fa-exclamation-circle"
                  text="Contact us"
                />
              </AuthComponent>
              <AuthComponent>
                <NavItem
                  to="/user_chats"
                  myIcon={
                    <Badge
                      badgeContent={this.props.msgForRead().length}
                      color="primary"
                    >
                      <i className="fas fa-comments" />
                    </Badge>
                  }
                  text="Comuna"
                />
              </AuthComponent>
              <AuthComponent rolesMatch={Roles.Admin}>
                <NavItem to="/admin/" icon="fa fa-user-secret" text="Admin" />
                <NavItem
                  to="/contactAdmin/issues?page=1"
                  icon="fa fa-exclamation-triangle"
                  text="Issues"
                />
              </AuthComponent>
              <AuthComponent onlyAnonymous>
                <NavItem
                  to="/contactAdmin"
                  icon="fa fa-exclamation-circle"
                  text="Contact us"
                />
              </AuthComponent>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

LeftSidebar.defaultProps = {
  user: {},
  msgForRead: () => {},
};

LeftSidebar.propTypes = {
  user: PropTypes.object,
  msgForRead: PropTypes.func,
};

export default LeftSidebar;
