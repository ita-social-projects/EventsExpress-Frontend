import React from "react";
import { FacebookProvider, ShareButton } from "react-facebook";
import { Telegram, Twitter, Linkedin } from "react-social-sharing";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./share.css";

const ShareButtons = ({ config, href }) => {
  return (
    <>
      <FacebookProvider appId={config.facebookClientId}>
        <ShareButton className="btn btn-link" href={href}>
          <div id="fb-share-button" title="Share on Facebook">
            <i className="fab fa-facebook text-white" />
          </div>
        </ShareButton>
      </FacebookProvider>

      <Telegram solid small link={href} />
      <Twitter solid small link={href} />
      <Linkedin solid small link={href} />
    </>
  );
};

ShareButtons.propTypes = {
  config: PropTypes.object,
  href: PropTypes.string,
};

ShareButtons.defaultProps = {
  config: {},
  href: "",
};

const mapStateToProps = state => {
  return {
    config: state.config,
  };
};

export default connect(mapStateToProps, null)(ShareButtons);
