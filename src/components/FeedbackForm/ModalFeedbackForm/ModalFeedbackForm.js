import React from "react";
import style from './ModalFeedbackForm.module.css';

export default function Modal({ onClose }) {
  return (
    <div className={style.modalBackground}>
      <div className={style.modalContent}>
        <form>
          <input type="text" placeholder="Просто проверить" />
          <button type="submit">Отправить</button>
        </form>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}
