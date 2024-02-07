import React from "react";
import style from "../ModalFeedbackForm.module.css";

export default function SelectInput({ name, desc, required, listOptions }) {
  return (
    <select name={name} className={style.feedback__select} defaultValue={""}>
      <option value="" disabled>
        {name}
      </option>
      {listOptions &&
        listOptions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
    </select>
  );
}
