import "./ItemCard.css";
import likeButton from "../../assets/Like-button.svg";

function ItemCard({ item, onCardClick, likeItem }) {
  const handleClickCard = () => {
    onCardClick(item, true);
  };

  const handleLikeClick = () => {
    console.log("like button clicked");
    console.log("Current isLiked state:", item.isLiked);
    console.log("Item ID:", item._id);
    likeItem(item._id, !item.isLiked);
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <button className="card__like-btn" onClick={handleLikeClick}>
        <img src={likeButton} alt="like button" />
      </button>
      <img
        onClick={handleClickCard}
        className="card__img"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
