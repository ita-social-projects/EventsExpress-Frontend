import React from "react";
import { Cancel, Search } from "@material-ui/icons";
import { reduxForm, Field, reset } from "redux-form";
import "./SearchInput.scss";
import propTypes from "prop-types";
import { connect } from "react-redux";
import PLACEHOLDER_INPUT from "../../constants/headArticleSearchConstants";
import debounce from "../../services/Debaunce";

const SearchInput = ({ searchFunc, searchText, name, clear, resetForm }) => {
  const onTitleChange = e => {
    debounce(searchFunc.bind(null, e.target.value))();
  };

  const clearInput = () => {
    searchFunc("");
    clear();
    resetForm(); // added prop for clear input in SearchUsers
  };

  return (
    <div className="MainSearchWrapper">
      <form className="MainSearchForm">
        <Field
          name={name}
          type="text"
          component="input"
          placeholder={PLACEHOLDER_INPUT}
          className="MainSearchInput"
          onChange={onTitleChange}
          value={searchText}
        />
        {searchText ? (
          <Cancel onClick={clearInput} className="search__icon" />
        ) : (
          <Search className="search__icon" />
        )}
      </form>
    </div>
  );
};

SearchInput.defaultProps = {
  searchFunc: () => {},
  clear: () => {},
  searchText: "",
  name: "",
  resetForm: () => {},
};

SearchInput.propTypes = {
  searchFunc: propTypes.func,
  clear: propTypes.func,
  searchText: propTypes.string,
  name: propTypes.string,
  resetForm: propTypes.func,
};

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(reset("main-search-form")),
});

const SearchInputForm = reduxForm({
  form: "main-search-form",
})(SearchInput);

export default connect(null, mapDispatchToProps)(SearchInputForm);
