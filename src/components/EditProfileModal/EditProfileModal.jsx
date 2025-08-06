import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditProfileModal({
  currentUser,
  onClose,
  isOpen,
  handleNameChange,
  handleImageUrl,
  handleEditProfileModalSubmit,
}) {
  if (!currentUser) {
    return null;
  }
  return (
    <ModalWithForm
      title="Edit profile"
      buttonText="Edit profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleEditProfileModalSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Username {""}
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          required
          className="modal__input"
          id="name"
          placeholder="name"
          onChange={handleNameChange}
          value={currentUser.name}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Avatar {""}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          required
          onChange={handleImageUrl}
          value={currentUser.avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
