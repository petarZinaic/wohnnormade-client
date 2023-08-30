import { Link, useNavigate } from "react-router-dom";
import { ButtonSize, ButtonType } from "../../../Button/types";
import Button from "../../../Button/Button";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="nav__left">
        <div className="nav__left-logo">
          <Link to="/">
            <img src="./assets/images/wohnnormade-logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="nav__language">
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
      <div className="nav__links">
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
      <div className="nav__buttons">
        <Button
          buttonType={ButtonType.PRIMARY}
          buttonSize={ButtonSize.SMALL}
          text="Log in"
          onClick={() => console.log("Log in")}
        />
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Button
            buttonType={ButtonType.SECOUNDARY}
            buttonSize={ButtonSize.SMALL}
            text="Register"
            onClick={() => navigate("/register")}
          />
        </Link>
      </div>
    </div>
  );
}
