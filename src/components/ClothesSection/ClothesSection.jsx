import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({
  onCardClick,
  clothingItems,
  handleClickAdd,
  likeItem,
  currentUser,
}) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__item">
        <p className="clothes-section__text">Your Items</p>
        <button className="clothes-section__btn" onClick={handleClickAdd}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              likeItem={likeItem}
              currentUser={currentUser}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
