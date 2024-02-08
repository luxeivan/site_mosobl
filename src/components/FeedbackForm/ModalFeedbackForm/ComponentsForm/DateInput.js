
import React from 'react';
import style from '../ModalFeedbackForm.module.css';

export default function DateTimeInput({ name, desc }) {
  return (
    <div>
      <label className={style.input__description}>
        {name} {desc && <span className={style.input__description}>{desc}</span>}
      </label>
      <div className={style.datetime__container}>
        <input
          className={`${style.input__feedback} ${style.input__date}`}
          type="date"
          name={`${name}_date`}
        />
        <input
          className={`${style.input__feedback} ${style.input__time}`}
          type="time"
          name={`${name}_time`}
        />
      </div>
    </div>
  );
}

