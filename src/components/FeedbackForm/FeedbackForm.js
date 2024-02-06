import React, { useState } from "react";
import style from "./FeedbackForm.module.css";
import Modal from "./ModalFeedbackForm/ModalFeedbackForm";

export default function FeedbackForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.position = "fixed";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.position = "absolute";
  };

  return (
    <div>
      <button
        className={style.btn__feedback__open__form}
        onClick={handleOpenModal}
      >
        Написать нам
      </button>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
