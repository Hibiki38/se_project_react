import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState } from "react";

function EditProfileModal({ onClose, isOpen, handleEditProfileModalSubmit }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleEditProfileModalSubmit(name, avatar);
  };

  useEffect(() => {
    setName(currentUser?.name ?? "");
    setAvatar(currentUser?.avatar ?? "");
  }, [currentUser, isOpen]);

  return (
    <ModalWithForm
      title="Edit profile"
      buttonText="Edit profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-profile-name-input" className="modal__label">
        Username {""}
        <input
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          required
          className="modal__input"
          id="edit-profile-name-input"
          placeholder="name"
          onChange={(evt) => setName(evt.target.value)}
          value={name}
        />
      </label>
      <label htmlFor="avatar-url" className="modal__label">
        Avatar {""}
        <input
          type="url"
          className="modal__input"
          id="avatar-url"
          placeholder="Image URL"
          required
          onChange={(evt) => setAvatar(evt.target.value)}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
