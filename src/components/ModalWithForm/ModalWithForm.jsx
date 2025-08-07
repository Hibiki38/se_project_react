import modalCloseBtn from "../../assets/modal-close.png";
import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  handleLogin,
  alternativeText,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" onClick={onClose} className="modal__close">
          <img
            src={modalCloseBtn}
            alt="Close button"
            className="modal__close-btn"
          />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__btn-container">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            <button
              type="button"
              onClick={handleLogin}
              className="modal__login-btn"
            >
              {alternativeText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
