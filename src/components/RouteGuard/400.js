import React, { PureComponent } from "react";
import { BAD_REQUEST_MESSAGE } from "../../constants/httpCodesConstants";
import { OOPS } from "../../constants/labelConstants";
import "./RouteGuardErrors.scss";

export default class BagRequest extends PureComponent {
  render() {
    return (
      <>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>{OOPS}</h1>
            </div>
            <h2>{BAD_REQUEST_MESSAGE}</h2>
          </div>
        </div>
      </>
    );
  }
}
