import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import { ButtonSize, ButtonType } from "../../../Button/types";
import Button from "../../../Button/Button";
import Hamburger from "hamburger-react";

export default function TopBar() {
  const [isTopBarExpanded, setIsTopBarExanded] = useState(false);
  // const navigate = useNavigate();

  function registerClickHandler() {
    // navigate("/register");
    setIsTopBarExanded(false);
  }

  return (
    <Fragment>
      <div className="topbar">
        <Hamburger
          toggled={isTopBarExpanded}
          toggle={setIsTopBarExanded}
          distance="lg"
          color="#FFFFFF"
        />
        <div className="topbar__logo">
          <Link to="/">
            <img src="./assets/images/wohnnormade-logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="topbar__language">
          <div>
            <img
              src="./assets/images/Flag_of_Great_Britain.png"
              alt="english flag"
            />
          </div>
          <p>Eng</p>
          <img src="./assets/icons/expand_icon.svg" alt="" id="expand-icon" />
        </div>
      </div>
      <div
        className={`${
          isTopBarExpanded ? "topbar-expanded--active" : "topbar-expanded"
        }`}
      >
        <div className="topbar-expanded__content">
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Button
          buttonType={ButtonType.PRIMARY}
          buttonSize={ButtonSize.SMALL}
          text="Log in"
          onClick={() => console.log("Log in")}
        />
        <Button
          buttonType={ButtonType.SECOUNDARY}
          buttonSize={ButtonSize.SMALL}
          text="Register"
          onClick={registerClickHandler}
        />
      </div>
    </Fragment>
  );
}
