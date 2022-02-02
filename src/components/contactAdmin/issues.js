import React, { PureComponent } from "react";
import propTypes from "prop-types";
import ContactAdminListWrapper from "../../containers/contactAdmin/contactAdmin-list-container";
import ContactAdminFilterWrapper from "../../containers/contactAdmin/contactAdmin-filter-container";

export default class Issues extends PureComponent {
  render() {
    return (
      <>
        <ContactAdminFilterWrapper />
        <div className="events-container">
          <ContactAdminListWrapper location={this.props.location} />
        </div>
      </>
    );
  }
}

// TODO: Check this prop
Issues.propTypes = {
  location: propTypes.object,
};

Issues.defaultProps = {
  location: {},
};
