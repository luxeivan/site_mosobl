import React from "react";
import style from "../ModalFeedbackForm.module.css";

export default function TextInput({ name, desc, required }) {
  return <input className={style.input__feedback} type="text" required={required} name={name} placeholder={`${name} ${desc}`} />;
}
