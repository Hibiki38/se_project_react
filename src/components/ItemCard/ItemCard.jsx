import "./ItemCard.css";
import { useContext } from "react";
import likeButton from "../../assets/Like-button.svg";
import likeButtonBlack from "../../assets/Like-button-black.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, likeItem }) {
  const { currentUser } = useContext(CurrentUserContext);
  const handleClickCard = () => {
    onCardClick(item, true);
  };

  const handleLikeClick = () => {
    likeItem(item._id, item.likes.includes(currentUser._id));
  };

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      {currentUser && (
        <>
          <button className="card__like-btn" onClick={handleLikeClick}>
            <img
              src={
                item.likes.includes(currentUser._id)
                  ? likeButtonBlack
                  : likeButton
              }
              alt="like button"
            />
          </button>
        </>
      )}
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
