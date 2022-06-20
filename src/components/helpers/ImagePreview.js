import React from "react";
import PropTypes from "prop-types";
import "../Event/EventForm/EventForm.scss";
import "./helpers.css";

const ImagePreview = ({
  imagefile: { name, preview },
  shape,
  error,
  touched,
}) => (
  <div
    key={name}
    className={` render-preview ${error && touched ? "has-error" : ""} `}
  >
    <div className="image-container d-flex align-items-center justify-content-center">
      <img
        src={preview}
        alt={name}
        className={`pic pic-container${
          shape === "round" ? " pic-large pic-circle" : ""
        }`}
      />
    </div>
  </div>
);

ImagePreview.defaultProps = {
  imagefile: null,
  shape: "",
  error: "",
  touched: false,
};

ImagePreview.propTypes = {
  imagefile: PropTypes.object,
  shape: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

export default ImagePreview;
