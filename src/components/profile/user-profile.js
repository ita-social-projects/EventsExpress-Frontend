import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Redirect, Route, Switch, withRouter } from "react-router-dom";
import "moment-timezone";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import genders from "../../constants/GenderConstants";
import Event from "../event/EventItem/Event-item";
import CustomAvatar from "../avatar/custom-avatar";
import RatingAverage from "../rating/rating-average";
import "./User-profile.css";
import Events from "./events";
import AuthComponent from "../../security/authComponent";
import getAge from "../helpers/get-age-string";
import indexToTabName from "../../constants/indexToTabName";

class UserItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.splitPath = this.splitPath.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      value:
        indexToTabName[this.splitPath(this.props.history.location.pathname)],
    });
  };

  componentDidUpdate(_, prevState) {
    const tabName =
      indexToTabName[this.splitPath(this.props.history.location.pathname)];
    if (prevState.value !== tabName) this.handleChange(_, tabName);
  }

  renderCategories = arr =>
    arr.map(item => <div key={item.id}>#{item.name}</div>);

  renderEvents = arr =>
    arr.map(item => (
      <div className="col-4" key={item.id}>
        <Event item={item} />
      </div>
    ));

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case 0:
        this.props.onFuture();
        break;
      case 1:
        this.props.onPast();
        break;
      case 2:
        this.props.onVisited();
        break;
      case 3:
        this.props.onToGo();
        break;
      default:
        this.setState({ value });
    }
  };

  splitPath = path => {
    const n = path.toLowerCase().split("/");
    return n[n.length - 1];
  };

  render() {
    const { name, email, birthday, gender, categories, id, attitude, rating } =
      this.props.data;
    const userId = this.props.data.id;
    const categoriesList = this.renderCategories(categories);
    const renderProp = (propName, value) => (
      <div className="row mb-3 font-weight-bold">
        <div className="col-4">{`${propName}:`}</div>
        <div className="col-8">{value || ""}</div>
      </div>
    );
    return (
      <>
        <div className="info">
          <AuthComponent>
            <div className="col-4 user">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="user-profile-avatar">
                  <CustomAvatar size="big" name={name} userId={id} />
                </div>
                <RatingAverage value={rating} direction="row" />

                <div className="row justify-content-center">
                  <Tooltip
                    title="Like this user"
                    placement="bottom"
                    TransitionComponent={Zoom}
                  >
                    <IconButton
                      className={!attitude ? "text-success" : ""}
                      onClick={
                        attitude ? this.props.onLike : this.props.onReset
                      }
                    >
                      <i className="fas fa-thumbs-up" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title="Dislike this user"
                    placement="bottom"
                    TransitionComponent={Zoom}
                  >
                    <IconButton
                      className={attitude === 1 ? "text-danger" : ""}
                      onClick={
                        attitude !== 1
                          ? this.props.onDislike
                          : this.props.onReset
                      }
                    >
                      <i className="fas fa-thumbs-down" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title="Start chat!"
                    placement="bottom"
                    TransitionComponent={Zoom}
                  >
                    <Link to={`/chat/${id}`}>
                      <IconButton>
                        <i className="far fa-comments" />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </div>
              </div>
            </div>
          </AuthComponent>
          <div className="col-sm-12  col-md-6">
            {renderProp("User Name", name)}
            {renderProp("Age", getAge(birthday))}
            {renderProp("Gender", genders[gender])}
            {renderProp("Email", email)}
            {renderProp("Interests", categoriesList)}
          </div>
        </div>
        <div className="mt-2">
          <AppBar position="static" color="inherit">
            <Tabs
              className="w-100"
              value={this.state.value}
              onChange={this.handleChange}
              variant="fullWidth"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab
                label="Future events"
                icon={
                  <IconButton
                    color={this.state.value === 0 ? "default" : "primary"}
                  >
                    <i className="far fa-calendar-alt" />
                  </IconButton>
                }
                component={Link}
                to={`/user/${userId}/FutureEvents`}
              />
              <Tab
                label="Archive events"
                icon={
                  <IconButton
                    color={this.state.value === 1 ? "default" : "primary"}
                  >
                    <i className="fas fa-archive" />
                  </IconButton>
                }
                component={Link}
                to={`/user/${userId}/ArchiveEvents`}
              />
              <Tab
                label="Visited events"
                icon={
                  <IconButton
                    color={this.state.value === 2 ? "default" : "primary"}
                  >
                    <i className="fas fa-history" />
                  </IconButton>
                }
                component={Link}
                to={`/user/${userId}/VisitedEvents`}
              />
              <Tab
                label="Events to go"
                icon={
                  <IconButton
                    color={this.state.value === 3 ? "default" : "primary"}
                  >
                    <i className="fas fa-map-marker-alt" />
                  </IconButton>
                }
                component={Link}
                to={`/user/${userId}/EventsToGo`}
              />
            </Tabs>
          </AppBar>

          <Switch>
            <Route
              exact
              path="/user/:id"
              render={() => <Redirect to={`/user/${userId}/FutureEvents`} />}
            />

            <Route
              path="/user/:id/FutureEvents"
              render={() => (
                <Events
                  events={this.props.events}
                  currentUser={this.props.currentUser}
                  typeOfEvents={this.props.onFuture}
                />
              )}
            />

            <Route
              path="/user/:id/ArchiveEvents"
              render={() => (
                <Events
                  events={this.props.events}
                  currentUser={this.props.currentUser}
                  typeOfEvents={this.props.onPast}
                />
              )}
            />

            <Route
              path="/user/:id/VisitedEvents"
              render={() => (
                <Events
                  events={this.props.events}
                  currentUser={this.props.currentUser}
                  typeOfEvents={this.props.onVisited}
                />
              )}
            />

            <Route
              path="/user/:id/EventsToGo"
              render={() => (
                <Events
                  events={this.props.events}
                  currentUser={this.props.currentUser}
                  typeOfEvents={this.props.onToGo}
                />
              )}
            />
          </Switch>
        </div>
      </>
    );
  }
}

UserItemView.propTypes = {
  history: PropTypes.object,
  onFuture: PropTypes.func,
  onPast: PropTypes.func,
  onVisited: PropTypes.func,
  onToGo: PropTypes.func,
  data: PropTypes.object,
  events: PropTypes.object,
  onReset: PropTypes.func,
  onLike: PropTypes.func,
  currentUser: PropTypes.string,
  onDislike: PropTypes.func,
};

UserItemView.defaultProps = {
  history: {},
  onFuture: () => {},
  onPast: () => {},
  onVisited: () => {},
  onToGo: () => {},
  data: {},
  events: {},
  onReset: () => {},
  currentUser: "",
  onLike: () => {},
  onDislike: () => {},
};

export default withRouter(UserItemView);
