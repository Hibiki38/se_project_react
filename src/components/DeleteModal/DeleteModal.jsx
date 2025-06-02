import "./DeleteModal.css";
import modalCloseBtn from "../../assets/modal-close.png";

function DeleteModal({ isOpen, onConfirm, onClose }) {
  const handleOnConfirmDelete = (evt) => {
    evt.preventDefault();
    onConfirm();
  };

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_delete">
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={modalCloseBtn} alt="Close" />
        </button>
        <p className="delete__text">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </p>
        <div className="delete__buttons">
          <button
            className="delete__confirm"
            onClick={handleOnConfirmDelete}
            type="submit"
          >
            Yes, delete item
          </button>
          <button className="delete__cancel" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
