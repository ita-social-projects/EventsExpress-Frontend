import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

const CheckBox = ({ input, label }) => {
  return (
    <div>
      <FormControlLabel
        control={<Checkbox checked={!!input.value} onChange={input.onChange} />}
        label={label}
      />
    </div>
  );
};

CheckBox.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  label: PropTypes.string,
};

CheckBox.defaultProps = {
  input: {
    value: "",
    onChange: () => {},
  },
  label: "",
};

export default CheckBox;
