import React, { Component } from "react";
import { connect } from "react-redux";
import LinkedAuths from "../components/profile/editProfile/linked-auths";
import getLinkedAuths from "../actions/redactProfile/linked-auths-action";
import {
  GoogleLoginAdd,
  FacebookLoginAdd,
  LocalLoginAdd,
} from "./linked-auths";
import "./css/linked-auths.css";

class LinkedAuthsWrapper extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { linkedAuths } = this.props.data;
    return (
      <>
        {linkedAuths.map(item => (
          <LinkedAuths item={item} key={`${item.type}${item.email}`} />
        ))}
        <h6>
          <span>Add more:</span>
        </h6>
        <div className="d-flex justify-content-around mb-3">
          <GoogleLoginAdd />
          <FacebookLoginAdd />
          <LocalLoginAdd />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.account,
  config: state.config,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(getLinkedAuths()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkedAuthsWrapper);
