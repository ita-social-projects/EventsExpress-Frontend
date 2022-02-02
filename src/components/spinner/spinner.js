import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div id="spinner-align">
      <div className="spinner-align">
        <div className="lds-css ng-scope">
          <div className="lds-rolling">
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
