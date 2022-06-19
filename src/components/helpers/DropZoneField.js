import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DropZone from "react-dropzone";
import Button from "@material-ui/core/Button";
import ImagePreview from "./ImagePreview";
import Placeholder from "./Placeholder";
import ImageResizer from "../Event/ImageResizer/ImageResizer";
import renderFieldError from "./form-helpers/render-field-error";

const DropZoneField = ({
  loadImage,
  input,
  submitting,
  crop,
  cropShape,
  meta: { touched, error },
  input: { onChange },
}) => {
  const [imageFile, setImage] = useState(null);
  const [isCropped, setIsCropped] = useState(false);

  const containerClass = error && touched ? "invalid" : "valid";

  const revokeImageUrl = () => {
    if (imageFile && !isCropped) {
      URL.revokeObjectURL(imageFile.preview);
    }
  };

  const handleOnClear = () => {
    revokeImageUrl();
    setImage(null);
    setIsCropped(false);
    input.onChange(null);
  };

  const handleOnDrop = file => {
    if (file.length > 0) {
      setImage({
        file: file[0],
        name: file[0].name,
        preview: URL.createObjectURL(file[0]),
      });
    }
  };

  const handleOnCrop = async croppedImage => {
    URL.revokeObjectURL(imageFile.preview);
    const file = new File(croppedImage, "image.jpg", { type: "image/jpeg" });
    const image = {
      file,
      name: "image.jpg",
      preview: croppedImage[0],
    };

    setImage(image);
    setIsCropped(true);
    input.onChange(image);
  };

  useEffect(() => {
    loadImage().then(image => {
      if (image !== null) {
        setImage({
          file: "",
          name: "",
          preview: URL.createObjectURL(image),
        });
      }
    });

    return () => {
      revokeImageUrl();
    };
  }, []);

  return (
    <div className={`preview-container ${containerClass}`}>
      {imageFile && crop && !isCropped ? (
        <ImageResizer
          image={imageFile}
          onChange={onChange}
          handleOnCrop={handleOnCrop}
          cropShape={cropShape}
        />
      ) : (
        <DropZone
          accept="image/jpeg, image/png, image/gif, image/bmp"
          className="upload-container"
          onDrop={handleOnDrop}
          multiple={false}
        >
          {props =>
            imageFile ? (
              <ImagePreview
                imagefile={imageFile}
                shape={cropShape}
                error={error}
                touched={touched}
              />
            ) : (
              <Placeholder {...props} error={error} touched={touched} />
            )
          }
        </DropZone>
      )}
      <Button
        className="mt-3"
        type="button"
        color="primary"
        disabled={submitting}
        onClick={handleOnClear}
        style={{ float: "right" }}
      >
        Clear
      </Button>
      {renderFieldError({ touched, error })}
    </div>
  );
};

DropZoneField.propTypes = {
  onChange: PropTypes.func,
  touched: PropTypes.bool,
  submitting: PropTypes.bool,
  crop: PropTypes.bool,
  cropShape: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object,
  loadImage: PropTypes.func,
};
// TODO file props

DropZoneField.defaultProps = {
  onChange: () => {},
  touched: false,
  submitting: false,
  crop: false,
  cropShape: "",
  meta: {},
  input: {},
  loadImage: () => {},
};

export default DropZoneField;
