// import React from "react";
// import style from "./ModalWindowEnd.module.css";

// const ModalWindow = ({ title, content, onClose }) => {
//   const copyToClipboard = () => {
//     navigator.clipboard
//       .writeText(`Тема: ${title}\n\n${content}`)
//       .then(() => {
//         alert("Текст скопирован!");
//       })
//       .catch((err) => {
//         console.error("Ошибка при копировании текста: ", err);
//       });
//   };

//   return (
//     <div className={style.modalOverlay}>
//       <div className={style.modal}>
//         <h3>{title}</h3>
//         <pre className={style.modalContent}>{`Тема: ${title}\n\n${content}`}</pre>
//         <hr />
//         <p>
//           Скопируйте текст данного письма в свой почтовый сервис и направьте на
//           адрес mail@mosoblenergo.ru
//         </p>
//         <button onClick={copyToClipboard}>Копировать</button>
//         <button onClick={onClose}>Закрыть</button>
//       </div>
//     </div>
//   );
// };


// export default ModalWindow;

import React from "react";
import style from "./ModalWindowEnd.module.css";

const ModalWindow = ({ title, content, onClose }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`Тема: ${title}\n\n${content}`)
      .then(() => {
        alert("Текст скопирован!");
      })
      .catch((err) => {
        console.error("Ошибка при копировании текста: ", err);
      });
  };

  return (
    <div className={style['modal-window__overlay']}>
      <div className={style['modal-window']}>
        <h3>{title}</h3>
        <pre className={style['modal-window__content']}>{`Тема: ${title}\n\n${content}`}</pre>
        <hr />
        <p>
          Скопируйте текст данного письма в свой почтовый сервис и направьте на
          адрес mail@mosoblenergo.ru
        </p>
        <button onClick={copyToClipboard} className={style['modal-window__button']}>Копировать</button>
        <button onClick={onClose} className={style['modal-window__button']}>Закрыть</button>
      </div>
    </div>
  );
};

export default ModalWindow;

