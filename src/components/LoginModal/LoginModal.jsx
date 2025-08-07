import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LogInModal({ onClose, isOpen, onLogInModalSubmit, handleSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogInModalSubmit({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <ModalWithForm
      title="Log in"
      buttonText="Log in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      handleLogin={handleSignUp}
      alternativeText="Or Sign up"
    >
      <label htmlFor="email" className="modal__label">
        Email {""}
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
        Password {""}
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
    </ModalWithForm>
  );
}

export default LogInModal;
