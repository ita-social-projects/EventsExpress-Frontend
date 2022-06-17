import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import LoginReducer from "./login";
import User from "./user";
import EditEventFromParent from "./editEventFromParent";
import Events from "./eventList";
import EventSchedules from "./eventSchedulesList";
import Categories from "./categoryList";
import CategoryGroups from "./categoryGroupList";
import Users from "./users";
import Roles from "./roles";
import ChangeAvatar from "./changeAvatar";
import EventView from "./eventItemView";
import EventScheduleView from "./eventScheduleItemView";
import Comments from "./commentList";
import Tracks from "./trackList";
import RecoverPassword from "./recoverPasswordReducer";
import Profile from "./userItemView";
import EventsForProfile from "./eventsForProfile";
import UnitsOfMeasuring from "./unitsOfMeasuring";
import Inventory from "./inventoryList";
import UsersInventories from "./usersInventories";
import Chats from "./chats";
import Chat from "./chat";
import ModalWind from "./modalWind";
import Hub from "./hub";
import Alert from "./alert";
import ContactAdmin from "./contactAdminReducer";
import ContactAdminList from "./contactAdminListReducer";
import ContactAdminIssueStatus from "./contactAdminIssueStatusReducer";
import ContactAdminItem from "./contactAdminItemReducer";
import Notification from "./notification";
import NotificationTypes from "./notificationTypeList";
import Account from "./account";
import NotificationTemplates from "./notificationTemplates";
import NotificationTemplate from "./notificationTemplate";
import Config from "./config";
import RequestCount from "./requestIndexCount";
import RequestLocalCount from "./requestIndexLocalCount";
import CategoriesOfMeasuring from "./categoryOfMeasuringList";
import EventsFilter from "./eventsFilter";

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
