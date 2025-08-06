import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar({ handleEditProfile, currentUser, handleLogOut }) {
  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src={currentUser.avatar}
        alt="default avatar"
      />
      <p className="sidebar__username">{currentUser.username}</p>
      <button onClick={handleEditProfile} className="sidebar__edit-profile-btn">
        Edit profile
      </button>
      <button onClick={handleLogOut} className="profile__logout-btn">
        Log out
      </button>
    </div>
  );
}

export default SideBar;
