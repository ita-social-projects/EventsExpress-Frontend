import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import ShareButtons from "./ShareButtons";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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
