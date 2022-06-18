import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { getFormValues } from "redux-form";
import { connect } from "react-redux";
import { parse as queryStringParse } from "query-string";
import ContactAdminList from "../../components/ContactAdmin/ContactAdminListComponent";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import getIssues from "../../actions/contactAdmin/contact-admin-list-action";
import filterHelper from "../../helpers/filterHelper";

// TODO Refactor class component
class ContactAdminListContainer extends Component {
  constructor(props) {
    super(props);
    this.objCurrentQueryParams = Object.create(null);
    this.prevQueryStringSearch = "";
  }

  componentDidMount() {
    this.setSearchParamsToContactAdminFilter(
      this.props.history.location.search,
    );
    const queryString = filterHelper.getQueryStringByFilter(
      this.objCurrentQueryParams,
    );
    this.props.getIssues(queryString);
  }

  componentDidUpdate() {
    if (this.props.history.location.search !== this.prevQueryStringSearch) {
      this.prevQueryStringSearch = this.props.history.location.search;
      this.props.getIssues(this.props.history.location.search);
    }
  }

  setSearchParamsToContactAdminFilter = search => {
    const filterCopy = { ...this.props.contactAdminList.filter };
    this.objCurrentQueryParams = queryStringParse(search);

    Object.entries(this.objCurrentQueryParams).forEach(([key, value]) => {
      filterCopy[key] = value;
    });
    this.objCurrentQueryParams = filterHelper.trimUndefinedKeys(filterCopy);
  };

  render() {
    const { data } = this.props.contactAdminList;
    const { items } = this.props.contactAdminList.data;
    return (
      <SpinnerContainer showContent={data !== undefined}>
        <div>
          <table className="table w-100 m-auto">
            <tbody>
              <ContactAdminList
                data_list={items}
                filter={this.props.contactAdminList.filter}
                page={data.pageViewModel.pageNumber}
                totalPages={data.pageViewModel.totalPages}
              />
            </tbody>
          </table>
        </div>
      </SpinnerContainer>
    );
  }
}

ContactAdminListContainer.defaultProps = {
  history: {},
  getIssues: () => {},
  contactAdminList: {},
};

ContactAdminListContainer.propTypes = {
  history: PropTypes.object,
  getIssues: PropTypes.func,
  contactAdminList: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    contactAdminList: state.contactAdminList,
    form_values: getFormValues("contactAdmin-filter-form")(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getIssues: filter => dispatch(getIssues(filter)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ContactAdminListContainer),
);
