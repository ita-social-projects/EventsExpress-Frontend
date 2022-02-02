import React, { PureComponent } from "react";
import "./css/error.css";

export default class InternalServerError extends PureComponent {
  render() {
    return (
      <>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>Oops!</h1>
            </div>
            <h2>500! - Internal Server Error</h2>
          </div>
        </div>
      </>
    );
  }
}
