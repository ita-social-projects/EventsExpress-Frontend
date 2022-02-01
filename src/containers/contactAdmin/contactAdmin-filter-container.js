import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFormValues, reset } from "redux-form";
import { withRouter } from "react-router-dom";
import ContactAdminFilter from "../../components/contactAdmin/contactAdmin-filter-component";
import filterHelper from "../../components/helpers/filterHelper";

const ContactAdminFilterWrapper = ({
  resetFilters,
  history,
  contactAdminList,
  formValues,
}) => {
  const onReset = () => {
    resetFilters();
    history.push(`${history.location.pathname}?page=1`);
  };

  const onSubmit = filters => {
    const filtersTrimUndefinedKeys = filterHelper.trimUndefinedKeys(filters);
    const filterCopy = { ...contactAdminList.filter };
    Object.entries(filtersTrimUndefinedKeys).forEach(([key, value]) => {
      switch (key) {
        case "page":
          filterCopy[key] = value;
          break;
        case "dateFrom":
          filterCopy[key] = new Date(value).toDateString();
          break;
        case "dateTo":
          filterCopy[key] = new Date(value).toDateString();
          break;
        case "status":
          filterCopy[key] = value;
          break;
        default:
          filterCopy[key] = value;
          break;
      }
    });
    const queryString = filterHelper.getQueryStringByFilter(filterCopy);

    history.push(history.location.pathname + queryString);
  };

  const buildInitialFormValues = () => {
    const filter = filterHelper.trimUndefinedKeys(contactAdminList.filter);
    return { ...filter };
  };

  const initialFormValues = buildInitialFormValues();
  return (
    <ContactAdminFilter
      onSubmit={onSubmit}
      onReset={onReset}
      form_values={formValues}
      initialFormValues={initialFormValues}
    />
  );
};

ContactAdminFilterWrapper.defaultProps = {
  resetFilters: () => {},
  history: {},
  contactAdminList: {},
  formValues: {},
};

ContactAdminFilterWrapper.propTypes = {
  resetFilters: PropTypes.func,
  history: PropTypes.object,
  contactAdminList: PropTypes.object,
  formValues: PropTypes.object,
};

const mapStateToProps = state => ({
  contactAdminList: state.contactAdminList,
  formValues: getFormValues("contactAdmin-filter-form")(state),
});

const mapDispatchToProps = dispatch => {
  return {
    resetFilters: () => dispatch(reset("contactAdmin-filter-form")),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactAdminFilterWrapper),
);
