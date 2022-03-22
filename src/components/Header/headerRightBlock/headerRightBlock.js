import React from "react";
import { FaStar, FaSearch } from "react-icons/fa";
import ModalWind from "../../modal-wind";
import AuthComponent from "../../../security/authComponent";
import DropdownMenu from "../../../containers/dropdownMenuContainer";
import ToggleButton from "../../shared/toggleButton/toggleButton";
import headerConstants from "../../../constants/headerConstants";
import "./headerRightBlock.scss";

const { SIGN_IN } = headerConstants;

const HeaderRightBlock = user => {
  const { id } = user.id ? user : {};

  return (
    <div className="header__right-block">
      <div className="header-icons">
        <div className="language-toggle">
          <ToggleButton>
            <span className="language-toggle__icon">EN </span>
          </ToggleButton>
        </div>
        <FaSearch className="header-icons__item" />
        <FaStar className="header-icons__item" />
      </div>
      <div>
        {!id && (
          <AuthComponent onlyAnonymous>
            <ModalWind
              renderButton={action => (
                <div
                  role="button"
                  tabIndex={0}
                  className="btn-light-theme"
                  onClick={action}
                  aria-hidden
                >
                  {SIGN_IN}
                </div>
              )}
            />
          </AuthComponent>
        )}
        <DropdownMenu />
      </div>
    </div>
  );
};

export default HeaderRightBlock;
