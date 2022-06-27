import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LinkedAuths from "../../components/Profile/EditProfile/LinkedAuths";
import getLinkedAuths from "../../actions/redactProfile/linked-auths-action";
import AddGoogleLoginContainer from "./AddGoogleLoginContainer";
import AddLocalLoginContainer from "./AddLocalLoginContainer";
import LoginFacebook from "./LoginFacebook";
import "./LinkedAuth.scss";

// TODO Refactor class component
class LinkedAuthsContainer extends Component {
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
          <span>{"Add more:"}</span>
        </h6>
        <div className="d-flex justify-content-around mb-3">
          <AddGoogleLoginContainer />
          <LoginFacebook />
          <AddLocalLoginContainer />
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

LinkedAuthsContainer.propTypes = {
  loadData: PropTypes.func,
  linkedAuths: PropTypes.array,
  data: PropTypes.object,
};

LinkedAuthsContainer.defaultProps = {
  loadData: () => {},
  linkedAuths: [],
  data: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkedAuthsContainer);
