import React from "react";
import { Field } from "redux-form";
import PropTypes from "prop-types";
import Line from "./Line";
import { MultiCheckbox } from "../../components/helpers/form-helpers";
import "./CheckboxList.css";
import "./CustomCheckbox.css";

function CheckboxList(props) {
  const mapToValues = arr => {
    return arr.map(el => ({ value: el.id, text: el.name }));
  };

  return (
    <div className="checkbox-group">
      <Line index={props.index} />
      <h2>Choose any hobbies from list (optional):</h2>
      <Field
        name="categories"
        component={MultiCheckbox}
        type="select-multiple"
        options={mapToValues(props.data)}
      />
    </div>
  );
}

CheckboxList.propTypes = {
  index: PropTypes.number,
  data: PropTypes.array,
};
CheckboxList.defaultProps = {
  index: null,
  data: [],
};

export default CheckboxList;
