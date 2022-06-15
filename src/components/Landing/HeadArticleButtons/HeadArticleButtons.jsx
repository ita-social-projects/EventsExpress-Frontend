import React from "react";
import { Link } from "react-router-dom";
import AuthComponent from "../../../security/authComponent";
import ModalWind from "../../ModalWind/ModalWind";
import HEADER_CONSTS from "../../../constants/headersConstants";

const { CREATE_EVENT, FIND_EVENT, WHAT_DO_YOU_WANT_TO_DO } = HEADER_CONSTS;

const HeadArticleButtons = () => {
  return (
    <div className="button-container text-center">
      <h2>{WHAT_DO_YOU_WANT_TO_DO}</h2>
      <div className="buttons">
        <AuthComponent onlyAnonymous>
          <ModalWind
            className="text-center"
            renderButton={action => (
              <button
                className="btn btn-warning"
                onClick={action}
                type="button"
              >
                {CREATE_EVENT}
              </button>
            )}
          />
        </AuthComponent>

        <Link to="home/events" className="btn btn-warning">
          {FIND_EVENT}
        </Link>
      </div>
    </div>
  );
};

export default HeadArticleButtons;
