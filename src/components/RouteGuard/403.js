import React, { PureComponent } from "react";
import { FORBIDDEN_MESSAGE } from "../../constants/httpCodesConstants";
import { OOPS } from "../../constants/labelConstants";
import "./RouteGuardErrors.scss";

export default class Forbidden extends PureComponent {
  render() {
    return (
      <>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>{OOPS}</h1>
            </div>
            <h2>{FORBIDDEN_MESSAGE}</h2>
          </div>
        </div>
      </>
    );
  }
}
