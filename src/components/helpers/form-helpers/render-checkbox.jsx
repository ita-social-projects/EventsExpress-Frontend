import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default ({ input, label }) => {
  return (
    <div>
      <FormControlLabel
        control={<Checkbox checked={!!input.value} onChange={input.onChange} />}
        label={label}
      />
    </div>
  );
};
