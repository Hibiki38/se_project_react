import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegistrationModal({ onClose, isOpen, onRegistrationModalSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleUserName = (evt) => {
    setName(evt.target.value);
  };

  const handleAvatarUrl = (evt) => {
    setAvatar(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegistrationModalSubmit({ email, password, name, avatar });
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Next"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email* {""}
        <input
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          required
          className="modal__input"
          id="email"
          placeholder="Email"
          onChange={handleEmail}
          value={email}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password* {""}
        <input
          type="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          required
          onChange={handlePassword}
          value={password}
        />
      </label>

      <label htmlFor="username" className="modal__label">
        Name {""}
        <input
          type="text"
          className="modal__input"
          id="username"
          placeholder="Name"
          required
          onChange={handleUserName}
          value={name}
        />
      </label>

      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL {""}
        <input
          type="link"
          className="modal__input"
          id="avatarUrl"
          placeholder="Avatar URL"
          required
          onChange={handleAvatarUrl}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegistrationModal;
