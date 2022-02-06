/* eslint-disable no-shadow */
import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import Cropper from "react-easy-crop";
import PropTypes from "prop-types";
import "./image-resizer.css";
import Button from "@material-ui/core/Button";
import imageConstants from "../../../constants/ImageResizer";

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
  // eslint-disable-next-line no-debugger
  debugger;
  useEffect(() => {
    const isRound = cropShape === ROUND;
    setAspect(isRound ? 1 : 16 / 9);
    setShowGrid(!isRound);
    // TODO
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCropChange = crop => {
    setCrop(crop);
  };

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onZoomChange = zoom => {
    setZoom(zoom);
  };

  const createImage = url =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", error => reject(error));
      image.src = url;
    });

  const getCroppedImg = async (imageSrc, pixelCrop) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

    canvas.width = safeArea;
    canvas.height = safeArea;

    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.translate(-safeArea / 2, -safeArea / 2);

    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5,
    );
    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.putImageData(
      data,
      Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
      Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y),
    );

    return canvas.toDataURL("image/jpeg");
  };

  const cropImage = async () => {
    const croppedImage = await getCroppedImg(image.preview, croppedArea);
    handleOnCrop([croppedImage], onChange);
  };
  return (
    <>
      <div className="ImageResizer">
        <div className="crop-container">
          <Cropper
            image={image.preview}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={onCropChange}
            onCropComplete={onCropComplete}
            onZoomChange={onZoomChange}
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
            onChange={(e, zoom) => onZoomChange(zoom)}
          />
          <Button
            type="button"
            color="primary"
            disabled={submitting}
            onClick={cropImage}
            style={{ float: "right" }}
          >
            {CROP}
          </Button>
        </div>
      </div>
    </>
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
