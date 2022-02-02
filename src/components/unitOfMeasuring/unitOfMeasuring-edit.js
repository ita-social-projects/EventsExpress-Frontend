import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import { renderTextField, renderSelectField } from "../helpers/form-helpers";
import ErrorMessages from "../shared/errorMessage";

const divStyle = {
  width: "90wh",
};

const UnitOfMeasuringEdit = ({
  allCategories,
  handleSubmit,
  error,
  cancel,
}) => {
  const categoriesList = allCategories?.data?.map(item => (
    <option value={item.id} key={item.id}>
      {item.categoryName}
    </option>
  ));
  return (
    <>
      <td colSpan="3" className="align-middle">
        <form className="w-100" id="save-form" onSubmit={handleSubmit}>
          <div style={divStyle} className="d-flex flex justify-content-around ">
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
              {categoriesList}
            </Field>
          </div>

          <div>
            {error && <ErrorMessages error={error} className="text-center" />}
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
          <IconButton className="text-danger" size="small" onClick={cancel}>
            <i className="fas fa-times" />
          </IconButton>
        </div>
      </td>
    </>
  );
};

UnitOfMeasuringEdit.defaultProps = {
  handleSubmit: () => {},
  allCategories: {},
  cancel: () => {},
  error: [],
};

UnitOfMeasuringEdit.propTypes = {
  handleSubmit: PropTypes.func,
  allCategories: PropTypes.object,
  cancel: PropTypes.func,
  error: PropTypes.array,
};

export default reduxForm({
  form: "save-form",
  enableReinitialize: true,
})(UnitOfMeasuringEdit);
