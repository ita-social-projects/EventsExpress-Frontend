import React from "react";
import { reduxForm, Field } from "redux-form";
import propTypes from "prop-types";
import "./HeadArticleSearch.scss";
import { Search } from "@material-ui/icons";
import PLACEHOLDER_INPUT from "../../../constants/HeadArticleSearchConstants";

function debounce(callBackFunc, delay = 700) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callBackFunc(...args);
    }, delay);
  };
}

const HeadArticleSearchWithoutForm = ({ setFilter }) => {
  const onTitleChange = value => {
    debounce(() => setFilter(value), 700)();
  };
  // const handleKeyPress = event => {
  //   if (event.key === "Enter") {
  //     setFilter(title);
  //   }
  // };
  // const filter = () => {
  //   setFilter(title);
  // };
  // debaune, trotling
  return (
    <div className="HeadArticleSearchWrapper">
      <div className="HeadArticleSearchForm">
        <Field
          name="search"
          component="input"
          type="text"
          placeholder={PLACEHOLDER_INPUT}
          className="HeadArticleSearchInput"
          onChange={e => onTitleChange(e.target.value)}
          // onKeyDown={handleKeyPress}
        />
        <Search className="search__icon" />
      </div>
    </div>
  );
};

HeadArticleSearchWithoutForm.defaultProps = {
  setFilter: () => {},
};

HeadArticleSearchWithoutForm.propTypes = {
  setFilter: propTypes.func,
};

const HeadArticleSearch = reduxForm({
  form: "head-article-search-form",
})(HeadArticleSearchWithoutForm);

export default HeadArticleSearch;
