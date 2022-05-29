import React from "react";
import { Cancel, Search } from "@material-ui/icons";
import { reduxForm, Field, reset } from "redux-form";
import "./MainSearchInput.scss";
import propTypes from "prop-types";
import { connect } from "react-redux";
import PLACEHOLDER_INPUT from "../../constants/HeadArticleSearchConstants";
import debounce from "../../services/Debaunce";

const SearchInput = ({ searchFunc, searchText, name, clear }) => {
  const onTitleChange = value => {
    debounce(() => searchFunc(value), 800)();
  };

  const clearInput = () => {
    searchFunc("");
    clear();
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
          onChange={e => onTitleChange(e.target.value)}
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
};

SearchInput.propTypes = {
  searchFunc: propTypes.func,
  clear: propTypes.func,
  searchText: propTypes.string,
  name: propTypes.string,
};

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(reset("main-search-form")),
});

const MainSearchInput = reduxForm({
  form: "main-search-form",
})(SearchInput);

export default connect(null, mapDispatchToProps)(MainSearchInput);
