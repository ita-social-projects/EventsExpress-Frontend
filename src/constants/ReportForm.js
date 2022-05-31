export const REPORT_FORM_TITLE = "Something Wrong? Tell Us!";
export const REPORT_FORM_PROBLEM_TYPE_TITLE = "Problem Type";
export const REPORT_FORM_SUBMIT_BUTTON_TEXT = "Submit";
export const REPORT_FORM_CLEAR_BUTTON_TEXT = "Clear";
export const REPORT_FORM_EMAIL_PLACEHOLDER = "Enter Email";
export const REPORT_FORM_PROBLEM_TYPE_PLACEHOLDER = "Enter Problem Type";
export const REPORT_FORM_DESCRIPTION_PLACEHOLDER = "Problem Description...";

export const ISSUES_TYPES_ENUM = {
  NewCategory: "0",
  BugReport: "1",
  BadEvent: "2",
  BadUser: "3",
  Other: "4",
};

export const ISSUES_TYPES = [
  {
    value: ISSUES_TYPES_ENUM.NewCategory,
    label: "New Category",
  },
  {
    value: ISSUES_TYPES_ENUM.BugReport,
    label: "Bug Report",
  },
  {
    value: ISSUES_TYPES_ENUM.BadEvent,
    label: "Bad Event",
  },
  {
    value: ISSUES_TYPES_ENUM.BadUser,
    label: "Bad User",
  },
  {
    value: ISSUES_TYPES_ENUM.Other,
    label: "Other",
  },
];
