import React from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import "./users.scss";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "center"};
`;

const UserSearchFilter = ({ handleSubmit, pristine, submitting, onReset }) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="shadow bg-white search_users_form"
      >
        <Field
          name="keyWord"
          component="input"
          type="text"
          placeholder="Search"
          className="users_search_input"
        />

        <FlexContainer className="users_search_container">
          <Button
            type="submit"
            color="primary"
            disabled={pristine || submitting}
            className="users_search_btns"
          >
            Search
          </Button>
          <Button
            type="button"
            color="primary"
            disabled={pristine || submitting}
            onClick={onReset}
            className="users_search_btns"
          >
            Clear
          </Button>
        </FlexContainer>
      </form>
    </>
  );
};

UserSearchFilter.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  onReset: () => {},
  submitting: false,
};

UserSearchFilter.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  onReset: PropTypes.func,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: "user-search-filter-form",
})(UserSearchFilter);
