import React, { useState } from "react";
import style from './FeedbackForm.module.css';
import Modal from './ModalFeedbackForm/ModalFeedbackForm'; // Предполагается, что Modal это компонент модального окна

export default function FeedbackForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className={style.btn__feedback__open__form} onClick={handleOpenModal}>Написать нам</button>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
}
