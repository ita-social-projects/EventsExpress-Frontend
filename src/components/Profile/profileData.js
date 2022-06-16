import React from "react";
import Moment from "react-moment";
import ChangeAvatarWrapper from "../../containers/EditProfileContainers/ChangeAvatarContainer";
import EditUsernameContainer from "../../containers/EditProfileContainers/EditUsernameContainer";
import EditGenderContainer from "../../containers/EditProfileContainers/EditGenderContainer";
import EditBirthdayContainer from "../../containers/EditProfileContainers/EditBirthdayContainer";
import SelectCategoriesWrapper from "../../containers/CategoryContainers/SelectCategoriesContainer";
import SelectNotificationTypesWrapper from "../../containers/NotificationTypesContainer/NotificationTypesContainer";
import LinkedAuthsWrapper from "../../containers/LinkedAuthContainer/LinkedAuthsContainer";

const useProfileData = (
  name,
  gender,
  birthday,
  categories,
  notificationTypes,
) => [
  {
    panelId: "panel0",
    title: "Change Avatar",
    type: "avatar",
    accordionDetailsContent: <ChangeAvatarWrapper />,
  },
  {
    panelId: "panel1",
    title: "Username",
    type: "text",
    content: name,
    accordionDetailsContent: <EditUsernameContainer />,
  },
  {
    panelId: "panel2",
    title: "Gender",
    type: "text",
    content: gender,
    accordionDetailsContent: <EditGenderContainer />,
  },
  {
    panelId: "panel3",
    title: "Date of Birth",
    type: "text",
    content: (
      <Moment format="D MMM YYYY" withTitle>
        {birthday}
      </Moment>
    ),
    accordionDetailsContent: <EditBirthdayContainer />,
  },
  {
    panelId: "panel4",
    title: "Favorite Categories",
    type: "list",
    content: categories,
    accordionDetailsContent: <SelectCategoriesWrapper />,
  },
  {
    panelId: "panel5",
    title: "Manage notifications",
    type: "list",
    content: notificationTypes,
    accordionDetailsContent: <SelectNotificationTypesWrapper />,
  },
  {
    panelId: "panel6",
    title: "Linked accounts",
    type: "text",
    accordionDetailsContent: <LinkedAuthsWrapper />,
  },
];

export default useProfileData;
