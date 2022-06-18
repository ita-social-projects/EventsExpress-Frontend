const getQueryStringByUsersFilter = filter =>
  `?keyWord=${filter !== undefined ? filter.keyWord : ""}`;

export default getQueryStringByUsersFilter;
