import "./ItemModal.css";
import itemModalClose from "../../assets/item-close.png";

function ItemModal({
  activeModal,
  onClose,
  card,
  onDeleteClick,
  likeItem,
  currentUser,
}) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button type="button" onClick={onClose} className="modal__item-close">
          <img src={itemModalClose} className="modal__close-btn" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__img" />
        <div className="modal__footer">
          <div className="modal__caption-weather">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          {currentUser && card.owner === currentUser._id && (
            <>
              <button
                type="button"
                onClick={onDeleteClick}
                className="modal__delete"
              >
                Delete item
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
