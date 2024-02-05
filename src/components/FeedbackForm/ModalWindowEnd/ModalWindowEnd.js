import React from "react";
import style from "./ModalWindowEnd.module.css";

const ModalWindow = ({ title, content, onClose }) => {
  return (
    <div className={style.modalOverlay}>
      <div className={style.modal}>
        <textarea
          className={style.modalContent}
          value={`Тема: ${title}\n\n${content}`}
          readOnly
        />
        <hr />
        <p>
          Скопируйте текст данного письма в свой почтовый сервис и направьте на
          адрес mail@mosoblenergo.ru
        </p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default ModalWindow;
