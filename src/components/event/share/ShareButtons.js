﻿import React, { Component } from "react";
import { FacebookProvider, ShareButton } from "react-facebook";
import { Telegram, Twitter, Linkedin } from "react-social-sharing";
import { connect } from "react-redux";
import "./share.css";

export class ShareButtons extends Component {
  render() {
    return (
      <>
        <FacebookProvider appId={this.props.config.facebookClientId}>
          <ShareButton className="btn btn-link" href={this.props.href}>
            <div id="fb-share-button" title="Share on Facebook">
              <i className="fab fa-facebook text-white" />
            </div>
          </ShareButton>
        </FacebookProvider>

        <Telegram solid small link={this.props.href} />
        <Twitter solid small link={this.props.href} />
        <Linkedin solid small link={this.props.href} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    config: state.config,
  };
};

export default connect(mapStateToProps, null)(ShareButtons);
