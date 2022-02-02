import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

const RenderFormCheckbox = ({ input, label }) => {
  return (
    <div>
      <FormControlLabel
        control={<Checkbox checked={!!input.value} onChange={input.onChange} />}
        label={label}
      />
    </div>
  );
};

RenderFormCheckbox.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  label: PropTypes.string,
};

RenderFormCheckbox.defaultProps = {
  input: {
    value: "",
    onChange: () => {},
  },
  label: "",
};

export default RenderFormCheckbox;
