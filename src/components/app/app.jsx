import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./app.scss";
import PropTypes from "prop-types";
import LandingContainer from "../../containers/LandingContainer/LandingContainer";
import Home from "../Home/Home";
import Issues from "../ContactAdmin/Issues";
import Profile from "../../containers/ProfileContainer/ProfileContainer";
import UserItemViewContainer from "../../containers/UserItemViewContainer/UserItemViewContainer";
import EventItemViewContainer from "../../containers/EventItemViewContainer/EventItemViewContainer";
import EventScheduleItemViewContainer from "../../containers/EventScheduleItemViewContainer/EventScheduleItemViewContainer";
import EventSchedulesListContainer from "../../containers/EventSchedulesListContainer/EventSchedulesListContainer";
import Layout from "../Layout/Layout";
import UsersSearchContainer from "../../containers/UsersContainer/UsersSearchContainer";
import Chat from "../Chat/Chat";
import Admin from "../Admin/Admin";
import NotFound from "../RouteGuard/404";
import NotificationEvents from "../../containers/NotificationEventsContainer/NotificationEventsContainer";
import ContactAdminDetailsContainer from "../../containers/ContactAdminContainers/ContactAdminDetailsContainer";
import RegisterCompleteContainer from "../../containers/RegisterContainer/RegisterCompleteContainer";
import RegisterSuccess from "../Register/RegisterSuccess";
import EventEditContainer from "../../containers/EventEditContainer/EventEditContainer";
import EventDraftListContainer from "../../containers/EventDraftContainer/EventDraftListContainer";
import Unauthorized from "../RouteGuard/401";
import Forbidden from "../RouteGuard/403";
import withAuthRedirect from "../../security/withAuthRedirect";
import RegistrationForm from "../../containers/RegistrationFormContainer/RegistrationFormContainer";
import MainLayout from "../MainLayout/MainLayout";
import AboutUs from "../AboutUs/AboutUs";
import SplitPanels from "../SplitPanels/SplitPanels";
import ReportPage from "../ReportPage/ReportPage";
import UserChatsContainer from "../../containers/UsersContainer/UserChatsContainer";
import AuthContainer from "../../containers/AuthContainer/AuthContainer";

const App = ({ authUser, getConfig }) => {
  const UserRoleSecurity = withAuthRedirect(["User"]);

  const AdminRoleSecurity = withAuthRedirect(["Admin"]);

  const AdminAndUserRoleSecurity = withAuthRedirect(["Admin", "User"]);

  useEffect(() => {
    authUser();
    getConfig();
  }, []);
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route path="/landing" component={LandingContainer} />
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
                  component={AdminAndUserRoleSecurity(
                    RegisterCompleteContainer,
                  )}
                />
                <Route
                  path="/editProfile/"
                  component={AdminAndUserRoleSecurity(Profile)}
                />
                <Route
                  path="/event/:id/:page"
                  component={EventItemViewContainer}
                />
                <Route
                  path="/eventSchedules"
                  component={EventSchedulesListContainer}
                />
                <Route
                  path="/eventSchedule/:id"
                  component={EventScheduleItemViewContainer}
                />
                <Route
                  path="/user/:id"
                  component={AdminAndUserRoleSecurity(UserItemViewContainer)}
                />
                <Route path="/admin" component={AdminRoleSecurity(Admin)} />
                <Route
                  path="/search/users"
                  component={UserRoleSecurity(UsersSearchContainer)}
                />
                <Route
                  path="/user_chats"
                  component={AdminAndUserRoleSecurity(UserChatsContainer)}
                />
                <Route path="/contactAdmin/issues" component={Issues} />
                <Route
                  path="/contactAdmin/:id/UpdateStatus"
                  component={AdminRoleSecurity(ContactAdminDetailsContainer)}
                />
                <Route
                  path="/notification_events"
                  component={AdminAndUserRoleSecurity(NotificationEvents)}
                />
                <Route
                  path="/authentication/:id/:token"
                  component={AuthContainer}
                />
                <Route
                  path="/chat/:chatId"
                  component={AdminAndUserRoleSecurity(Chat)}
                />
                <Route path="/contactAdmin" component={ReportPage} />
                <Route path="/registerSuccess" component={RegisterSuccess} />
                <Route
                  path="/editEvent/:id"
                  component={UserRoleSecurity(EventEditContainer)}
                />
                <Route
                  path="/drafts"
                  component={UserRoleSecurity(EventDraftListContainer)}
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
};

App.propTypes = {
  authUser: PropTypes.func,
  getConfig: PropTypes.func,
};

App.defaultProps = {
  authUser: () => {},
  getConfig: () => {},
};

export default App;
