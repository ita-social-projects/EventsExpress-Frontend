import React from "react";
import PropTypes from "prop-types";
import { MdCloudUpload } from "react-icons/md";
import { DRAG_IMG_PLACEHOLDER } from "../../constants/labelConstants";

const Placeholder = ({ getInputProps, getRootProps, error, touched }) => {
  const iconStyle = {
    fontSize: 100,
    maxWidth: 40,
    paddingRight: 10,
  };
  const spanStyle = {};

  if (error && touched) {
    iconStyle.color = "#f44336";
    spanStyle.color = "#f44336";
  }

  return (
    <div
      {...getRootProps()}
      className={`placeholder-preview ${error && touched ? "has-error" : ""}`}
    >
      <input {...getInputProps()} />
      <div className="cursor-pointer d-flex align-items-center justify-content-center">
        <MdCloudUpload style={iconStyle} />
        <span style={spanStyle}>{DRAG_IMG_PLACEHOLDER}</span>
      </div>
    </div>
  );
};

Placeholder.propTypes = {
  error: PropTypes.string,
  getInputProps: PropTypes.func,
  getRootProps: PropTypes.func,
  touched: PropTypes.bool,
};

Placeholder.defaultProps = {
  error: "",
  getInputProps: () => {},
  getRootProps: () => {},
  touched: false,
};

export default Placeholder;
