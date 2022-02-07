import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import Cropper from "react-easy-crop";
import PropTypes from "prop-types";
import "./image-resizer.css";
import Button from "@material-ui/core/Button";
import imageConstants from "../../../constants/ImageResizer";
import {
  cropImage,
  onCropChange,
  onZoomChange,
  onCropComplete,
} from "../../helpers/Image-resizer";

const { CROP, ROUND } = imageConstants;

const ImageResizer = ({
  cropShape,
  image,
  handleOnCrop,
  onChange,
  submitting,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState(null);
  const [showGrid, setShowGrid] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);

  useEffect(() => {
    const isRound = cropShape === ROUND;
    setAspect(isRound ? 1 : 16 / 9);
    setShowGrid(!isRound);
    // TODO
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ImageResizer">
      <div className="crop-container">
        <Cropper
          image={image.preview}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={cropChange => onCropChange(cropChange, setCrop)}
          onCropComplete={(croppedAreaChange, croppedAreaPixels) =>
            onCropComplete(croppedAreaChange, croppedAreaPixels, setCroppedArea)
          }
          onZoomChange={zoomChange => onZoomChange(zoomChange, setZoom)}
          cropShape={cropShape}
          showGrid={showGrid}
        />
      </div>
      <div className="controls">
        <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoomSlider) => onZoomChange(zoomSlider, setZoom)}
        />
        <Button
          type="button"
          color="primary"
          disabled={submitting}
          onClick={() => {
            cropImage(image, croppedArea, handleOnCrop, onChange);
          }}
          style={{ float: "right" }}
        >
          {CROP}
        </Button>
      </div>
    </div>
  );
};

ImageResizer.propTypes = {
  cropShape: PropTypes.string,
  image: PropTypes.object,
  handleOnCrop: PropTypes.func,
  onChange: PropTypes.func,
  submitting: PropTypes.bool,
};

ImageResizer.defaultProps = {
  cropShape: "",
  image: {},
  handleOnCrop: () => {},
  onChange: () => {},
  submitting: false,
};

export default ImageResizer;
