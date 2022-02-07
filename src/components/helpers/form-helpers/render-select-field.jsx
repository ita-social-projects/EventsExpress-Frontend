import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { renderFieldError } from ".";

const RenderSelectField = ({
  input,
  label,
  meta: { touched, error, invalid },
  minWidth,
  children,
}) => {
  const useStyles = makeStyles(() => ({
    formControl: { minWidth },
  }));
  return (
    <FormControl variant="outlined" className={useStyles().formControl}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...input}
        native
        value={input.value}
        onChange={input.onChange}
        label={label}
        error={touched && invalid}
      >
        {children}
      </Select>
      {renderFieldError({ touched, error })}
    </FormControl>
  );
};

export default RenderSelectField;

RenderSelectField.defaultProps = {
  input: {},
  meta: {},
  minWidth: null,
  label: "",
  children: {},
};

RenderSelectField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  minWidth: PropTypes.number,
  label: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
