import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import LoginReducer from "./login";
import User from "./user";
import EditEventFromParent from "./edit-event-from-parent";
import Events from "./event-list";
import EventSchedules from "./eventSchedules-list";
import Categories from "./category/category-list";
import CategoryGroups from "./category-group/category-group-list";
import Users from "./users";
import Roles from "./roles";
import ChangeAvatar from "./editReducers/change_avatar";
import EventView from "./event-item-view";
import EventScheduleView from "./eventSchedule-item-view";
import Comments from "./comment-list";
import Tracks from "./tracks/track-list";
import RecoverPassword from "./editReducers/recoverPasswordReducer";
import Profile from "./user-item-view";
import EventsForProfile from "./events-for-profile";
import UnitsOfMeasuring from "./unitOfMeasuring/unitsOfMeasuring";
import Inventory from "./inventory-list";
import UsersInventories from "./usersInventories";
import Chats from "./chats";
import Chat from "./chat";
import ModalWind from "./ModalWind";
import Hub from "./hub";
import Alert from "./alert";
import ContactAdmin from "./contactAdmin/contact-admin-reducer";
import ContactAdminList from "./contactAdmin/contact-admin-list-reducer";
import ContactAdminIssueStatus from "./contactAdmin/contact-admin-issue-status-reducer";
import ContactAdminItem from "./contactAdmin/contact-admin-item-reducer";
import Notification from "./notification";
import NotificationTypes from "./notificationType/notificationType-list";
import Account from "./account";
import NotificationTemplates from "./notification-templates/notification-templates";
import NotificationTemplate from "./notification-templates/notification-template";
import Config from "./config";
import RequestCount from "./request-index-count";
import RequestLocalCount from "./request-index-local-count";
import CategoriesOfMeasuring from "./categoryOfMeasuring-list";
import EventsFilter from "./events-filter/index";

const rootReducers = {
  requestLocalCount: RequestLocalCount,
  requestCount: RequestCount,
  account: Account,
  modal: ModalWind,
  user: User,
  routing: routerReducer,
  form: formReducer,
  login: LoginReducer,
  edit_event_from_parent: EditEventFromParent,
  events: Events,
  eventsFilter: EventsFilter,
  eventSchedules: EventSchedules,
  inventories: Inventory,
  usersInventories: UsersInventories,
  unitsOfMeasuring: UnitsOfMeasuring,
  categories: Categories,
  categoryGroups: CategoryGroups,
  users: Users,
  changeAvatar: ChangeAvatar,
  event: EventView,
  eventSchedule: EventScheduleView,
  comments: Comments,
  tracks: Tracks,
  roles: Roles,
  profile: Profile,
  events_for_profile: EventsForProfile,
  recoverPassword: RecoverPassword,
  chats: Chats,
  chat: Chat,
  hubConnections: Hub,
  alert: Alert,
  contactAdmin: ContactAdmin,
  contactAdminList: ContactAdminList,
  contactAdminIssueStatus: ContactAdminIssueStatus,
  contactAdminItem: ContactAdminItem,
  notification: Notification,
  notificationType: NotificationTypes,
  NotificationTemplates,
  NotificationTemplate,
  config: Config,
  categoriesOfMeasuring: CategoriesOfMeasuring,
};

export default rootReducers;
