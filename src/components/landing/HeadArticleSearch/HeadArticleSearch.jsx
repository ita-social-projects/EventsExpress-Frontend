import React from "react";
import { reduxForm, Field } from "redux-form";
import propTypes from "prop-types";
import "./HeadArticleSearch.scss";
import { AiOutlineSearch } from "react-icons/ai";
import headArticleSearchConstants from "../../../constants/HeadArticleSearchConstants";

const { placeholderInput } = headArticleSearchConstants;

const HeadArticleSearchWithoutForm = ({ handleSubmit }) => {
  return (
    <div className="HeadArticleSearchDiv">
      <form className="HeadArticleSearchForm" onSubmit={handleSubmit}>
        <AiOutlineSearch />
        <Field
          name="search"
          component="input"
          type="text"
          placeholder={placeholderInput}
          className="HeadArticleSearchInput"
        />
      </form>
    </div>
  );
};

HeadArticleSearchWithoutForm.defaultProps = {
  handleSubmit: () => {},
};

HeadArticleSearchWithoutForm.propTypes = {
  handleSubmit: propTypes.func,
};

const HeadArticleSearch = reduxForm({
  form: "head-article-search-form",
})(HeadArticleSearchWithoutForm);

export default HeadArticleSearch;
