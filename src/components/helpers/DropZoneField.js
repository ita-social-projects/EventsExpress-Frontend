import React, { Component } from "react";
import PropTypes from "prop-types";
import DropZone from "react-dropzone";
import Button from "@material-ui/core/Button";
import ImagePreview from "./ImagePreview";
import Placeholder from "./Placeholder";
import ImageResizer from "../event/ImageResizer/Image-resizer";
import renderFieldError from "./form-helpers/render-field-error";

class DropZoneField extends Component {
  constructor() {
    super();
    this.state = {
      imagefile: [],
      cropped: false,
    };
  }

  componentDidMount() {
    this.props.loadImage().then(image => {
      if (image != null) {
        const imagefile = {
          file: "",
          name: "",
          preview: URL.createObjectURL(image),
        };
        this.setState({ imagefile: [imagefile] });
      }
    });
  }

  componentWillUnmount() {
    this.revokeImageUrl();
  }

  handleOnClear = () => {
    this.revokeImageUrl();
    this.setState({ cropped: false, imagefile: [] });
    this.props.input.onChange(null);
  };

  revokeImageUrl = () => {
    if (this.state.imagefile[0] !== undefined && !this.state.cropped) {
      URL.revokeObjectURL(this.state.imagefile[0].preview);
    }
  };

  handleOnDrop = file => {
    if (file.length > 0) {
      const imagefile = {
        file: file[0],
        name: file[0].name,
        preview: URL.createObjectURL(file[0]),
      };
      this.setState({ imagefile: [imagefile] });
    }
  };

  handleOnCrop = async croppedImage => {
    URL.revokeObjectURL(this.state.imagefile[0].preview);
    const file = new File(croppedImage, "image.jpg", { type: "image/jpeg" });
    const imagefile = {
      file,
      name: "image.jpg",
      preview: croppedImage[0],
    };

    this.setState({ imagefile: [imagefile], cropped: true }, () =>
      this.props.input.onChange(imagefile),
    );
  };

  render() {
    const {
      submitting,
      crop,
      cropShape,
      meta: { touched, error },
      input: { onChange },
    } = this.props;
    const { imagefile, cropped } = this.state;
    const { handleOnCrop, handleOnDrop, handleOnClear } = this;
    const containerClass = error && touched ? "invalid" : "valid";
    return (
      <div className={`preview-container ${containerClass}`}>
        {imagefile.length && crop && !cropped ? (
          <ImageResizer
            image={imagefile[0]}
            onChange={onChange}
            handleOnCrop={handleOnCrop}
            cropShape={cropShape}
          />
        ) : (
          <DropZone
            accept="image/jpeg, image/png, image/gif, image/bmp"
            className="upload-container"
            onDrop={file => handleOnDrop(file)}
            multiple={false}
          >
            {props =>
              imagefile && imagefile.length > 0 ? (
                <ImagePreview
                  imagefile={imagefile}
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
  }
}

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
