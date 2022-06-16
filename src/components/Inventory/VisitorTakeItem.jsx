import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import IconButton from "@material-ui/core/IconButton";
import { renderTextField } from "../helpers/form-helpers";

class VisitorEditItemForm extends Component {
  maxValueLimitor = this.maxValue(
    this.props.initialValues.needQuantity - this.props.alreadyGet,
  );

  minValueLimitor = this.minValue(1);

  minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;

  maxValue = max => value =>
    value && value > max ? `Must be less or equal than ${max}` : undefined;

  render() {
    const { initialValues, alreadyGet } = this.props;
    return (
      <form onSubmit={this.props.handleSubmit} className="form-inline w-100">
        <div className="col col-md-3">{initialValues.itemName}</div>
        <div className="col">{alreadyGet}</div>
        <div className="col col-md-1 d-flex align-items-center">
          <Field
            name="willTake"
            type="number"
            fullWidth={false}
            validate={[this.maxValueLimitor, this.minValueLimitor]}
            label="Will take"
            component={renderTextField}
          />
        </div>
        <div className="col col-md-2">{initialValues.needQuantity}</div>
        <div className="col col-md-2">
          {initialValues.unitOfMeasuring.shortName}
        </div>
        <div className="col col-md-2">
          <IconButton type="submit">
            <i className="fa-sm fas fa-check text-success" />
          </IconButton>
          <IconButton onClick={() => this.props.onCancel(initialValues)}>
            <i className="fa-sm fas fa-times text-danger" />
          </IconButton>
        </div>
      </form>
    );
  }
}

VisitorEditItemForm.defaultProps = {
  initialValues: {},
  alreadyGet: [],
  handleSubmit: () => {},
  onCancel: () => {},
};

VisitorEditItemForm.propTypes = {
  initialValues: PropTypes.object,
  alreadyGet: PropTypes.array,
  handleSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default reduxForm({
  form: "will-take-item-form",
  enableReinitialize: true,
})(VisitorEditItemForm);
