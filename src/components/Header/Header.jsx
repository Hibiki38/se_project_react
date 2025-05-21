import "./Header.css";
import logo from "../../assets/wtwr.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleClickAdd, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleClickAdd}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terence Tegegne</p>
        <img src={avatar} alt="Terence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
