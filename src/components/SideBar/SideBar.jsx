import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SideBar.css";
import { useContext } from "react";

function SideBar({ handleEditProfile, handleLogOut }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__header-container">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt="default avatar"
        />
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <div className="sidebar__container">
        <button
          onClick={handleEditProfile}
          className="sidebar__edit-profile-btn"
        >
          Change profile data
        </button>
        <button onClick={handleLogOut} className="sidebar__logout-btn">
          Log out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
