import React from "react";
import style from "../ModalFeedbackForm.module.css";

export default function DateInput({ name, value, desc }) {
  return <input className={style.input__feedback} type="datetime-local" name={name} placeholder={`${name} ${desc}`} />;
}
