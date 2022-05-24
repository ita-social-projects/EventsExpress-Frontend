import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import propTypes from "prop-types";
import "./HeadArticleSearch.scss";
import { Search } from "@material-ui/icons";
import PLACEHOLDER_INPUT from "../../../constants/HeadArticleSearchConstants";

const HeadArticleSearchWithoutForm = ({ handleSubmit, setFilter }) => {
  const [title, setTitle] = useState("");
  const onTitleChange = value => {
    setTitle(value);
  };
  const filter = () => {
    setFilter(title);
  };
  return (
    <div className="HeadArticleSearchWrapper">
      <form className="HeadArticleSearchForm" onSubmit={handleSubmit}>
        <Field
          name="search"
          component="input"
          type="text"
          placeholder={PLACEHOLDER_INPUT}
          className="HeadArticleSearchInput"
          onChange={e => onTitleChange(e.target.value)}
        />
        <Search onClick={filter} className="search__icon" />
      </form>
    </div>
  );
};

HeadArticleSearchWithoutForm.defaultProps = {
  handleSubmit: () => {},
  setFilter: () => {},
};

HeadArticleSearchWithoutForm.propTypes = {
  handleSubmit: propTypes.func,
  setFilter: propTypes.func,
};

const HeadArticleSearch = reduxForm({
  form: "head-article-search-form",
})(HeadArticleSearchWithoutForm);

export default HeadArticleSearch;
