import React from "react";
import { reduxForm, Field } from "redux-form";
import propTypes from "prop-types";
import "./HeadArticleSearch.scss";
import { AiOutlineSearch } from "react-icons/ai";
import constants from "../../../constants/HeadArticleSearchConstants";

const { placeholderInput } = constants;

const HeadArticleSearchWithoutForm = ({ handleSubmit }) => {
  return (
    <div className="HeadArticleSearchDiv">
      <form onSubmit={handleSubmit}>
        <AiOutlineSearch />
        <Field
          name="search"
          component="input"
          type="text"
          placeholder={placeholderInput}
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
