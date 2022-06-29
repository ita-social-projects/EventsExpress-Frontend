import React, { Component } from "react";
import propTypes from "prop-types";
import { createBrowserHistory } from "history";
import SimpleModalWithDetails from "../helpers/simple-modal-with-details";
import { BUTTON_NAMES } from "../../constants/buttonConsts";
import { CONTACT_ADMIN_CONSTS } from "../../constants/adminConstants";

const history = createBrowserHistory({ forceRefresh: true });

export default class ContactAdminDetails extends Component {
  handleClose = () => {
    history.push(`/contactAdmin/issues?page=1`);
  };

  render() {
    const { items } = this.props;

    return (
      <div>
        <div>
          <h1 className="text-center my-5">
            {CONTACT_ADMIN_CONSTS.ISSUE_DESC}
          </h1>
          {items.description}
          <div className="text-center">
            <div className="btn-group mt-5">
              <button
                type="button"
                className="btn btn-secondary btn-lg mr-5"
                onClick={this.handleClose}
              >
                {BUTTON_NAMES.CLOSE}
              </button>
              {
                <SimpleModalWithDetails
                  button={
                    <button
                      type="button"
                      className="btn btn-primary btn-lg mr-5"
                    >
                      {BUTTON_NAMES.MARK_RESOLVED}
                    </button>
                  }
                  submitCallback={this.props.onResolve}
                  data="Enter resolution details"
                />
              }
              {
                <SimpleModalWithDetails
                  button={
                    <button
                      type="button"
                      className="btn btn-primary btn-lg mr-5"
                    >
                      {BUTTON_NAMES.MOVE_IN_PROGRESS}
                    </button>
                  }
                  submitCallback={this.props.onInProgress}
                  data="Enter resolution details"
                />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ContactAdminDetails.propTypes = {
  items: propTypes.object,
  onInProgress: propTypes.func,
  onResolve: propTypes.func,
};

ContactAdminDetails.defaultProps = {
  items: {},
  onInProgress: () => {},
  onResolve: () => {},
};
