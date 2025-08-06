import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

function Profile({
  onCardClick,
  clothingItems,
  handleClickAdd,
  currentUser,
  likeItem,
  handleEditProfile,
  handleLogOut,
}) {
  const myItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          currentUser={currentUser}
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
