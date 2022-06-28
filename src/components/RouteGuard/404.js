import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { NOT_FOUND_MESSAGE } from "../../constants/httpCodesConstants";
import { GO_HOME, OOPS } from "../../constants/labelConstants";
import "./RouteGuardErrors.scss";

export default class NotFound extends PureComponent {
  render() {
    return (
      <>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>{OOPS}</h1>
            </div>
            <br />
            <br />
            <h2>{NOT_FOUND_MESSAGE}</h2>
            <p>
              {
                "The page you are looking for might have been removed had its name"
              }
              {"changed or is temporarily unavailable."}
            </p>
            <Link to="/home/events">{GO_HOME}</Link>
          </div>
        </div>
      </>
    );
  }
}
