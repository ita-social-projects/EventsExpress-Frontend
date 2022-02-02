import React from "react";
import PropTypes from "prop-types";
import { getFormValues, change } from "redux-form";
import { connect } from "react-redux";
import ThreeStateCheckbox from "../three-state-checkbox/ThreeStateCheckbox";
import "./Tile.css";
import "./covers/tile-covers.css";

const Tile = ({
  formValues,
  categories,
  handleTileToggleAction,
  updateFormValue,
  groupId,
}) => {
  const isFormInitialized = () => formValues?.categories;

  const handleTriStateChange = state => {
    const ids = categories.map(c => c.id);
    let formValuesCategories = isFormInitialized()
      ? [...formValues.categories]
      : [];
    if (state) {
      const filteredIds = ids.filter(id => !formValuesCategories.includes(id));
      filteredIds.forEach(el => formValuesCategories.push(el));
    } else {
      formValuesCategories = formValuesCategories.filter(
        el => !ids.includes(el),
      );
    }

    handleTileToggleAction();
    updateFormValue(formValuesCategories);
  };

  const toggleTriStateCheckbox = () => {
    if (isFormInitialized()) {
      const opts = categories.map(c => c.id);
      const values = [...formValues.categories].filter(item =>
        opts.includes(item),
      );

      if (values.length === 0) return false;
      if (values.length === opts.length) return true;
      return null;
    }
    return false;
  };

  return (
    <div
      role="button"
      className={`tile cover_${groupId}`}
      onClick={() => handleTileToggleAction()}
      onKeyDown={() => handleTileToggleAction()}
      tabIndex={0}
    >
      <ThreeStateCheckbox
        checked={toggleTriStateCheckbox()}
        onChange={handleTriStateChange}
      />
    </div>
  );
};

Tile.defaultProps = {
  formValues: {},
  categories: [],
  handleTileToggleAction: () => {},
  updateFormValue: () => {},
  groupId: null,
};

Tile.propTypes = {
  formValues: PropTypes.object,
  categories: PropTypes.array,
  handleTileToggleAction: PropTypes.func,
  updateFormValue: PropTypes.func,
  groupId: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    formValues: getFormValues("registrationForm")(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFormValue: value =>
      dispatch(change("registrationForm", "categories", value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
