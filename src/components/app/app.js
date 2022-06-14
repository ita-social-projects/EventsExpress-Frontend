import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./app.scss";

import { connect } from "react-redux";
import propTypes from "prop-types";
import LandingWrapper from "../../containers/landing-wrapper";
import Home from "../Home/Home";
import Issues from "../ContactAdmin/Issues";
import Profile from "../../containers/ProfileContainer/ProfileContainer";
import UserItemViewWrapper from "../../containers/user-item-view";
import EventItemViewWrapper from "../../containers/event-item-view";
import EventScheduleViewWrapper from "../../containers/event-Schedule-item-view";
import EventSchedulesListWrapper from "../../containers/eventSchedules-list";
import Layout from "../Layout/Layout";
import SearchUserWrapper from "../../containers/UserSearchWrapper";

import Authentication from "../Authentication/Authentication";
import Chat from "../Chat/Chat";
import UserChats from "../Chat/UserChats";
import Admin from "../Admin/Admin";
import NotFound from "../RouteGuard/404";
import NotificationEvents from "../../containers/NotificationEventsContainer/NotificationEventsContainer";
import ContactAdminWrapper from "../../containers/contactAdmin/contactAdmin-container";
import ContactAdminDetails from "../../containers/contactAdmin/contactAdmin-details-container";
import RegisterCompleteWrapper from "../../containers/register-complete-wrapper";
import RegisterSuccess from "../Register/RegisterSuccess";
import EventEditWrapper from "../../containers/event-edit-wrapper";
import EventDraftListWrapper from "../../containers/event-draft-list";
import Unauthorized from "../RouteGuard/401";
import Forbidden from "../RouteGuard/403";
import withAuthRedirect from "../../security/withAuthRedirect";
import AuthUser from "../../actions/login/auth-user-action";
import getConfig from "../../actions/config/get-config-action";
import RegistrationForm from "../../containers/RegistrationFormContainer/RegistrationFormContainer";
import MainLayout from "../MainLayout/MainLayout";
import AboutUs from "../AboutUs/AboutUs";
import SplitPanels from "../SplitPanels/SplitPanels";

class App extends Component {
  UserRoleSecurity = withAuthRedirect(["User"]);

  AdminRoleSecurity = withAuthRedirect(["Admin"]);

  AdminAndUserRoleSecurity = withAuthRedirect(["Admin", "User"]);

  constructor(props) {
    super(props);
    this.props.authUser();
    this.props.getConfig();
  }

  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route path="/landing" component={LandingWrapper} />
            <Route exact path="/" component={SplitPanels} />
            <Route path="/registrationForm" component={RegistrationForm} />
            <Route path="/about" component={AboutUs} />
            <Route>
              <Layout>
                <Switch>
                  <Route path="/home/events" component={Home} />
                  <Route
                    exact
                    path="/home"
                    render={() => <Redirect to="/home/events" />}
                  />
                  <Route
                    path="/registerComplete"
                    component={this.AdminAndUserRoleSecurity(
                      RegisterCompleteWrapper,
                    )}
                  />
                  <Route
                    path="/editProfile/"
                    component={this.AdminAndUserRoleSecurity(Profile)}
                  />
                  <Route
                    path="/event/:id/:page"
                    component={EventItemViewWrapper}
                  />
                  <Route
                    path="/eventSchedules"
                    component={EventSchedulesListWrapper}
                  />
                  <Route
                    path="/eventSchedule/:id"
                    component={EventScheduleViewWrapper}
                  />
                  <Route
                    path="/user/:id"
                    component={this.AdminAndUserRoleSecurity(
                      UserItemViewWrapper,
                    )}
                  />
                  <Route
                    path="/admin"
                    component={this.AdminRoleSecurity(Admin)}
                  />
                  <Route
                    path="/search/users"
                    component={this.UserRoleSecurity(SearchUserWrapper)}
                  />
                  <Route
                    path="/user_chats"
                    component={this.AdminAndUserRoleSecurity(UserChats)}
                  />
                  <Route path="/contactAdmin/issues" component={Issues} />
                  <Route
                    path="/contactAdmin/:id/UpdateStatus"
                    component={this.AdminRoleSecurity(ContactAdminDetails)}
                  />
                  <Route
                    path="/notification_events"
                    component={this.AdminAndUserRoleSecurity(
                      NotificationEvents,
                    )}
                  />
                  <Route
                    path="/authentication/:id/:token"
                    component={Authentication}
                  />
                  <Route
                    path="/chat/:chatId"
                    component={this.AdminAndUserRoleSecurity(Chat)}
                  />
                  <Route path="/contactAdmin" component={ContactAdminWrapper} />
                  <Route path="/registerSuccess" component={RegisterSuccess} />
                  <Route
                    path="/editEvent/:id"
                    component={this.UserRoleSecurity(EventEditWrapper)}
                  />
                  <Route
                    path="/drafts"
                    component={this.UserRoleSecurity(EventDraftListWrapper)}
                  />
                  <Route path="/unauthorized" component={Unauthorized} />
                  <Route path="/forbidden" component={Forbidden} />
                  <Route component={NotFound} />
                </Switch>
              </Layout>
            </Route>
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authUser: propTypes.func,
  getConfig: propTypes.func,
};

App.defaultProps = {
  authUser: () => {},
  getConfig: () => {},
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: () => dispatch(AuthUser()),
    getConfig: () => dispatch(getConfig()),
  };
};

export default connect(null, mapDispatchToProps)(App);
