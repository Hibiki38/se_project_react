import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";
import logo from "../../assets/wtwr.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleClickAdd, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const { currentUser, handleSignUp, handleLogin } =
    useContext(CurrentUserContext);
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {currentUser && (
        <>
          <button
            onClick={handleClickAdd}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add Clothes
          </button>
        </>
      )}
      {!currentUser && (
        <>
          <button
            onClick={handleSignUp}
            type="button"
            className="header__signup-btn"
          >
            Sign up
          </button>
          <button
            onClick={handleLogin}
            type="button"
            className="header__login-btn"
          >
            Log in
          </button>
        </>
      )}
      {currentUser && (
        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <p className="header__username">{currentUser.name}</p>
            <img
              src={currentUser.avatar}
              alt="avatar"
              className="header__avatar"
            />
          </div>
        </Link>
      )}
    </header>
  );
}

export default Header;
