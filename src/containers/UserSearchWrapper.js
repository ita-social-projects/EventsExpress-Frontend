﻿import React, { Component } from "react";
import SearchUsers from "./SearchUsers";

export default class UsersPWrapper extends Component {
  render() {
    return <SearchUsers params={this.props.location.search} />;
  }
}
