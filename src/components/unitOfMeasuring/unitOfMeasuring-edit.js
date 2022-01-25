import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import IconButton from "@material-ui/core/IconButton";
import { renderTextField, renderSelectField } from "../helpers/form-helpers";
import ErrorMessages from "../shared/errorMessage";

const divStyle = {
  width: "90wh",
};

class UnitOfMeasuringEdit extends Component {
  state = {
    unitError: null,
    shortError: null,
    showAlert: false,
  };

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  categoriesList = this.props.all_categories.data.map(item => (
    <option value={item.id} key={item.id}>
      {item.categoryName}
    </option>
  ));

  render() {
    return (
      <>
        <td colSpan="3" className="align-middle">
          <form
            className="w-100"
            id="save-form"
            onSubmit={this.props.handleSubmit}
          >
            <div
              style={divStyle}
              className="d-flex flex justify-content-around "
            >
              <Field
                className="form-control w-25"
                name="unitName"
                label="Unit name"
                component={renderTextField}
              />
              <Field
                className="form-control w-25"
                name="shortName"
                label="Short name"
                component={renderTextField}
              />
              <Field
                minWidth={150}
                component={renderSelectField}
                className="min-vw-50"
                name="categoryId"
                label="Category"
              >
                <option aria-label="None" value="" />
                {this.categoriesList}
              </Field>
            </div>

            <div>
              {this.props.error && (
                <ErrorMessages
                  error={this.props.error}
                  className="text-center"
                />
              )}
            </div>
          </form>
        </td>
        <td className="align-middle align-items-stretch" width="15%">
          <div className="d-flex align-items-center justify-content-center">
            <IconButton
              className="text-success"
              size="small"
              type="submit"
              form="save-form"
            >
              <i className="fa fa-check" />
            </IconButton>
          </div>
        </td>
        <td className="align-middle align-items-stretch" width="15%">
          <div className="d-flex align-items-center justify-content-center">
            <IconButton
              className="text-danger"
              size="small"
              onClick={this.props.cancel}
            >
              <i className="fas fa-times" />
            </IconButton>
          </div>
        </td>
      </>
    );
  }
}

export default reduxForm({
  form: "save-form",
  enableReinitialize: true,
})(UnitOfMeasuringEdit);
