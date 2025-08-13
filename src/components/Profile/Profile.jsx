import ClothesSection from "../ClothesSection/ClothesSection";
import { useContext } from "react";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({
  onCardClick,
  clothingItems,
  handleClickAdd,
  likeItem,
  handleEditProfile,
  handleLogOut,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  const myItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          handleEditProfile={handleEditProfile}
          handleLogOut={handleLogOut}
        />
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={myItems}
          handleClickAdd={handleClickAdd}
          likeItem={likeItem}
        />
      </section>
    </div>
  );
}
export default Profile;
