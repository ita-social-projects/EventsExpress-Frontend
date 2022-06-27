import React from "react";
import PropTypes from "prop-types";

const InventoryHeaderButton = ({ isOpen, handleOnClickCaret }) => {
  return (
    <div className="d-flex justify-content-start align-items-center">
      <h4>List of inventories</h4>
      {isOpen && (
        <button
          type="button"
          title="Caret"
          className="btn clear-backgroud d-flex justify-content-start align-items-center"
          onClick={handleOnClickCaret}
        >
          <i className="fas fa-angle-up" />
        </button>
      )}
      {!isOpen && (
        <button
          type="button"
          title="Caret"
          className="btn clear-backgroud d-flex justify-content-start align-items-center"
          onClick={handleOnClickCaret}
        >
          <i className="fas fa-angle-down" />
        </button>
      )}
    </div>
  );
};

InventoryHeaderButton.defaultProps = {
  isOpen: false,
  handleOnClickCaret: () => {},
};

InventoryHeaderButton.propTypes = {
  isOpen: PropTypes.bool,
  handleOnClickCaret: PropTypes.func,
};

export default InventoryHeaderButton;
