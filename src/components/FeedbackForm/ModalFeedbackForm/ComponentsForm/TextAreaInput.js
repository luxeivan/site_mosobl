import React from 'react'
import style from "../ModalFeedbackForm.module.css";

export default function TextAreaInput({ name, desc, required }) {
    return <textarea className={style.input__feedback} style={{resize:"none"}} rows={5} required={required} name={name} placeholder={`${name} ${desc}`} />;
}
