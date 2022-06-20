import React from "react";
import Moment from "react-moment";
import ChangeAvatarWrapper from "../../containers/EditProfileContainers/ChangeAvatarContainer";
import EditUsernameContainer from "../../containers/EditProfileContainers/EditUsernameContainer";
import EditGenderContainer from "../../containers/EditProfileContainers/EditGenderContainer";
import EditBirthdayContainer from "../../containers/EditProfileContainers/EditBirthdayContainer";
import SelectCategoriesWrapper from "../../containers/CategoryContainers/SelectCategoriesContainer";
import SelectNotificationTypesWrapper from "../../containers/NotificationTypesContainer/NotificationTypesContainer";
import LinkedAuthsWrapper from "../../containers/LinkedAuthContainer/LinkedAuthsContainer";
import profileConstants from "../../constants/profileConstants";

const useProfileData = (
  name,
  gender,
  birthday,
  categories,
  notificationTypes,
) => {
  const {
    TYPE_AVATAR,
    TYPE_TEXT,
    TYPE_LIST,
    PANEL0,
    PANEL1,
    PANEL2,
    PANEL3,
    PANEL4,
    PANEL5,
    PANEL6,
    CHANGE_AVATAR,
    USERNAME,
    GENDER,
    BIRTH_DATE,
    FAVORITE_CATEGORIES,
    MANAGE_NOTIFICATIONS,
    LINKED_ACCOUNTS,
    BIRTH_DATE_FORMAT,
  } = profileConstants;
  return [
    {
      panelId: PANEL0,
      title: CHANGE_AVATAR,
      type: TYPE_AVATAR,
      accordionDetailsContent: <ChangeAvatarWrapper />,
    },
    {
      panelId: PANEL1,
      title: USERNAME,
      type: TYPE_TEXT,
      content: name,
      accordionDetailsContent: <EditUsernameContainer />,
    },
    {
      panelId: PANEL2,
      title: GENDER,
      type: TYPE_TEXT,
      content: gender,
      accordionDetailsContent: <EditGenderContainer />,
    },
    {
      panelId: PANEL3,
      title: BIRTH_DATE,
      type: TYPE_TEXT,
      content: (
        <Moment format={BIRTH_DATE_FORMAT} withTitle>
          {birthday}
        </Moment>
      ),
      accordionDetailsContent: <EditBirthdayContainer />,
    },
    {
      panelId: PANEL4,
      title: FAVORITE_CATEGORIES,
      type: TYPE_LIST,
      content: categories,
      accordionDetailsContent: <SelectCategoriesWrapper />,
    },
    {
      panelId: PANEL5,
      title: MANAGE_NOTIFICATIONS,
      type: TYPE_LIST,
      content: notificationTypes,
      accordionDetailsContent: <SelectNotificationTypesWrapper />,
    },
    {
      panelId: PANEL6,
      title: LINKED_ACCOUNTS,
      type: TYPE_TEXT,
      accordionDetailsContent: <LinkedAuthsWrapper />,
    },
  ];
};

export default useProfileData;
