import React from "react";
import { REGISTER_WAS_SUCCESSFUL } from "../../constants/registationConstants";

const RegisterSucces = () => (
  <div className="mt-5 b-inline-block">
    <div className="h3 text-center alert alert-success">
      {REGISTER_WAS_SUCCESSFUL}
    </div>
  </div>
);

export default RegisterSucces;
