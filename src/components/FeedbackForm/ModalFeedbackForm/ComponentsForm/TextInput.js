import React from "react";
import style from "../ModalFeedbackForm.module.css";

export default function TextInput({ name, desc, required }) {
  return (
    <div className={style["input-wrapper"]}>
      <input
        className={`${style.input__feedback} ${required ? style.required : ""}`}
        type="text"
        name={name}
        placeholder={name}
        required={required}
      />
      {desc && <span className={style["desc-text"]}>{desc}</span>}
    </div>
  );
}
