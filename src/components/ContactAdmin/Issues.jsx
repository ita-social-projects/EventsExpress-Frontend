import React, { PureComponent } from "react";
import propTypes from "prop-types";
import ContactAdminListContainer from "../../containers/ContactAdminContainers/ContactAdminListContainer";
import ContactAdminFilterContainer from "../../containers/ContactAdminContainers/ContactAdminFilterContainer";

export default class Issues extends PureComponent {
  render() {
    return (
      <>
        <ContactAdminFilterContainer />
        <div className="events-container">
          <ContactAdminListContainer location={this.props.location} />
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
