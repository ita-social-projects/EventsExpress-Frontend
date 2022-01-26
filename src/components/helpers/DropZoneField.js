import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import DropZone from "react-dropzone";
import Button from "@material-ui/core/Button";
import ImagePreview from "./ImagePreview";
import Placeholder from "./Placeholder";
import ImageResizer from "../event/ImageResizer/Image-resizer";
import renderFieldError from "./form-helpers/render-field-error";

export default class DropZoneField extends Component {
  state = {
    imagefile: [],
    cropped: false,
  };

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
    if (this.state.imagefile[0] != undefined && !this.state.cropped) {
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
      <Fragment className={`preview-container ${containerClass}`}>
        <div>
          {imagefile.length && crop && !cropped ? (
            <div>
              <ImageResizer
                image={imagefile[0]}
                onChange={onChange}
                handleOnCrop={handleOnCrop}
                cropShape={cropShape}
              />
            </div>
          ) : (
            <div>
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
            </div>
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
        </div>
        {renderFieldError({ touched, error })}
      </Fragment>
    );
  }
}

DropZoneField.propTypes = {
  imagefile: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.file,
      name: PropTypes.string,
      preview: PropTypes.string,
    }),
  ),
  onChange: PropTypes.func,
  touched: PropTypes.bool,
};
