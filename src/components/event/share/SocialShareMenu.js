import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import ShareButtons from "./ShareButtons";
import { StyledMenuItem, StyledMenu } from "../../helpers/socialShareMenuUtils";

const SocialShareMenu = ({ href }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip title="SocialShare">
        <IconButton
          className="btn"
          aria-controls="customized-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <i className="fas fa-share-alt" />
        </IconButton>
      </Tooltip>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ShareButtons href={href} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

SocialShareMenu.propTypes = {
  href: PropTypes.string,
};

SocialShareMenu.defaultProps = {
  href: "",
};

export default SocialShareMenu;
