import React, { useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import propTypes from "prop-types";
import RenderMultiselectField from "../helpers/form-helpers/render-multiselect-field";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import { BUTTON_NAMES } from "../../constants/buttonConsts";

const SelectCategories = ({
  initialize,
  initialValues,
  handleSubmit,
  submitting,
  items,
  error,
}) => {
  useEffect(() => {
    initialize({
      categories: initialValues.categories,
    });
  }, []);

  return (
    <div>
      <form name="SelectCategories" onSubmit={handleSubmit}>
        <Field
          name="categories"
          component={RenderMultiselectField}
          data={items}
          valueField="id"
          textField="name"
          className="form-control mt-2"
        />
        {error && <ErrorMessages error={error} className="text-center" />}
        <div>
          <Button type="submit" color="primary" disabled={submitting}>
            {BUTTON_NAMES.SAVE}
          </Button>
        </div>
      </form>
    </div>
  );
};

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
