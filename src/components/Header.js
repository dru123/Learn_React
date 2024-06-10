import { useState } from "react";
import { HEADER_LOGO_URL } from "../utils/constants";

const Header = () => {
  const [buttonState, setButtonState] = useState(true);
  return (
    <div className="header ">
      <div className="logo-container">
        <img src={HEADER_LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={(e) => {
              e.preventDefault();
              setButtonState(!buttonState);
            }}
          >
            {buttonState === true ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
