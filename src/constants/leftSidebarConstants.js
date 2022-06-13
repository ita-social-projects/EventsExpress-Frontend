// TODO: fix eslint
// eslint-disable-next-line import/prefer-default-export
export const SIDEBAR_LIST_ITEMS = [
  {
    securityState: "PUBLIC",
    items: [
      {
        link: "/home",
        faviconIconClass: "fa fa-home",
        pageName: "Home",
      },
    ],
  },
  {
    securityState: "USER",
    items: [
      {
        link: "/search/users?page=1",
        faviconIconClass: "fa fa-users",
        pageName: "Search Users",
      },
      {
        link: "/drafts",
        faviconIconClass: "fa fa-edit",
        pageName: "Draft",
      },
      {
        link: "/eventSchedules",
        faviconIconClass: "fa fa-clone",
        pageName: "Recurrent Events",
      },
      {
        link: "/contactAdmin",
        faviconIconClass: "fa fa-exclamation-circle",
        pageName: "Contact us",
      },
    ],
  },
  {
    securityState: "ADMIN",
    items: [
      {
        link: "/admin/",
        faviconIconClass: "fa fa-user-secret",
        pageName: "Admin",
      },
      {
        link: "/contactAdmin/issues?page=1",
        faviconIconClass: "fa fa-exclamation-triangle",
        pageName: "Issues",
      },
    ],
  },
  {
    securityState: "ANONYMOUS",
    items: [
      {
        link: "/contactAdmin",
        faviconIconClass: "fa fa-exclamation-circle",
        pageName: "Contact us",
      },
    ],
  },
];
