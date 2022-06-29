import React, { PureComponent } from "react";
import { OOPS, SERVER_ERROR } from "../../constants/labelConstants";
import "./RouteGuardErrors.scss";

export default class InternalServerError extends PureComponent {
  render() {
    return (
      <>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>{OOPS}</h1>
            </div>
            <h2>{SERVER_ERROR}</h2>
          </div>
        </div>
      </>
    );
  }
}
