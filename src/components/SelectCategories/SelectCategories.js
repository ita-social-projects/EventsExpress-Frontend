import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import { renderMultiselect } from "../helpers/form-helpers";
import ErrorMessages from "../shared/errorMessage";

class SelectCategories extends Component {
  componentWillMount() {
    this.props.initialize({
      categories: this.props.initialValues.categories,
    });
  }

  render() {
    const { handleSubmit, submitting, items, error } = this.props;

    return (
      <div>
        <form name="SelectCategories" onSubmit={handleSubmit}>
          <Field
            name="categories"
            component={renderMultiselect}
            data={items}
            valueField="id"
            textField="name"
            className="form-control mt-2"
          />
          {error && <ErrorMessages error={error} className="text-center" />}
          <div>
            <Button type="submit" color="primary" disabled={submitting}>
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

SelectCategories.propTypes = {
  initialize: propTypes.func,
  initialValues: propTypes.object,
  handleSubmit: propTypes.func,
  submitting: propTypes.bool,
  items: propTypes.array,
  error: propTypes.array,
};

SelectCategories.defaultProps = {
  initialize: () => {},
  initialValues: {},
  handleSubmit: () => {},
  submitting: false,
  items: {},
  error: [],
};

export default reduxForm({
  form: "SelectCategories",
  enableReinitialize: true,
})(SelectCategories);
