// TODO: tix option, this without somethink - 52
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import { Field, reduxForm } from "redux-form";
import IconButton from "@material-ui/core/IconButton";
import propTypes from "prop-types";
import RenderTextField from "../helpers/form-helpers/render-text-field";
import RenderSelectField from "../helpers/form-helpers/render-select-field";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import fieldIsRequired from "../helpers/validators/required-fields-validator";

const validate = values => {
  const requiredFields = ["name", "categoryGroup"];
  return {
    ...fieldIsRequired(values, requiredFields),
  };
};

const CategoryEdit = ({
  handleSubmit,
  error,
  initialValues,
  groups,
  cancel,
}) => {
  return (
    <>
      <td className="align-middle" width="100%">
        <form
          className="d-flex flex-row justify-content-around w-100"
          id="save-form"
          onSubmit={handleSubmit}
        >
          <div className="w-65">
            <Field
              className="form-control"
              name="name"
              label="Name"
              component={RenderTextField}
            />
            {error && <ErrorMessages error={error} className="text-center" />}
          </div>
          <div className="w-35">
            <Field
              className="form-control"
              name="categoryGroup"
              label="Select a group"
              component={RenderSelectField}
              defaultValue={JSON.stringify(initialValues?.categoryGroup)}
            >
              <option value="" id="CategoryEditOption" disabled></option>
              {groups.map(item => (
                <option key={item.id} value={JSON.stringify(item)}>
                  {item.title}
                </option>
              ))}
            </Field>
            {error && <ErrorMessages error={error} className="text-center" />}
          </div>
        </form>
      </td>
      <td />
      <td />
      <td />
      <td className="align-middle align-items-stretch" width="25%">
        <div className="d-flex align-items-center justify-content-center">
          <IconButton
            className="text-success"
            size="small"
            type="submit"
            form="save-form"
          >
            <i className="fa fa-check" />
          </IconButton>

          <IconButton className="text-danger" size="small" onClick={cancel}>
            <i className="fas fa-times" />
          </IconButton>
        </div>
      </td>
    </>
  );
};

CategoryEdit.propTypes = {
  handleSubmit: propTypes.func,
  error: propTypes.string,
  initialValues: propTypes.object,
  groups: propTypes.array,
  cancel: propTypes.func,
};

CategoryEdit.defaultProps = {
  handleSubmit: () => {},
  error: "",
  initialValues: {},
  groups: [],
  cancel: () => {},
};

const FormCategoryEdit = reduxForm({
  form: "save-form",
  validate,
  enableReinitialize: true,
})(CategoryEdit);

export default FormCategoryEdit;
