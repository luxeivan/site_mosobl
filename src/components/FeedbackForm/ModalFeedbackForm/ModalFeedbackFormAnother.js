import React, { useState } from "react";
import style from "./ModalFeedbackForm.module.css";
import ModalWindow from "../ModalWindowEnd/ModalWindowEnd";
import themes from "./themes.json";
import TextInput from "./ComponentsForm/TextInput";
import DateInput from "./ComponentsForm/DateInput";
import SelectInput from "./ComponentsForm/SelectInput";
import TextAreaInput from "./ComponentsForm/TextAreaInput";

export default function ModalFeedbackFormAnother({ onClose }) {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState("");
  const [selectTheme, setSelectTheme] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    let bodyText = ""
    Array.from(event.target).forEach(item => {
      if (item.name) {
        bodyText = bodyText + `${item.name}: ${item.value}\r\n\r\n`
      }
      //console.log(item.name, ' | ',item.value)
    })
    setPreviewContent(bodyText)
    setIsPreviewModalOpen(true)
    //console.log(bodyText);
    const subject = encodeURIComponent(
      themes.find((item) => item.id == selectTheme).name || "Обращение в службу поддержки"
    );
    const encodedBody = encodeURIComponent(bodyText);
    window.location.href = `mailto:mail@mosoblenergo.ru?subject=${subject}&body=${encodedBody}`;
  };
  const handleIssueChange = (event) => {
    setSelectTheme(event.target.value);
  };
  return (
    <>
      <dialog className={style.modal__feedback__background}>
        <div className={style.modal__feedback__content} onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleSubmit}>
            <select className={style.feedback__select} onChange={handleIssueChange} defaultValue="">
              <option value="" disabled>
                Выберите вопрос
              </option>
              {/* --------------------------- */}
              {themes.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {selectTheme !== false && (
              <>
                <TextInput required name={"ФИО заявителя"} desc={""} />
                <TextInput required name={"Адрес электронной почты для обратной связи"} desc={""} />
                <TextInput required name={"Телефон для обратной связи"} desc={""} />
              </>
            )}
            {/* --------------------------- */}
            {selectTheme !== false &&
              themes
                .find((item) => item.id == selectTheme)
                .fields.map((item, index) => {
                  if (item.type == "text") return <TextInput key={index} required={item.required} name={item.name} desc={item.desc} />;
                  if (item.type == "date") return <DateInput key={index} name={item.name} desc={item.desc} />;
                  if (item.type == "select") return <SelectInput key={index} name={item.name} desc={item.desc} listOptions={item.listOptions} />;
                })}
            {/* --------------------------- */}
            {selectTheme !== false && (
              <TextAreaInput name={"Комментарий"} desc={"(описание проблемы)"} />
            )}
            {selectTheme !== false && selectTheme == 6 && (
              <>
                <p className={style.dopinformation}>
                  <span>С полным списком и условиями оказания дополнительных услуг, а также с формами заявок и перечнем обязательных документов для оказания услуг Вы можете ознакомиться в разделе «Потребителям» по ссылке: </span>
                  <a className={style.a__feedback} href=" https://mosoblenergo.ru/additiona/Services" target="_blank" rel="noopener noreferrer">
                    https://mosoblenergo.ru/additiona/Services
                  </a>
                </p>
                <p className={style.dopinformation}>
                  <span>В случае заинтересованности прикрепите заполненную заявку на дополнительную услугу к письму. Если у Вас остались вопросы свяжитесь с нами по тел.: 8 (495) 780-39-62 доб. 3327, доб. 1096, или по e-mail: </span>
                  <a className={style.a__feedback} href="mailto:uslugi@mosoblenergo.ru">
                    uslugi@mosoblenergo.ru
                  </a>
                </p>
              </>
            )}
            <label className={style.checkboxContainer__feedback}>
              <input className={style.input__feedback} type="checkbox" required />
              <span className={style.checkboxText__feedback}>Отправляя письмо, Вы даете согласие на обработку персональных данных, а также несете ответственность за полноту и достоверность предоставленной информации.</span>
            </label>
            <button type="submit" className={style.feedback__button} disabled={selectTheme === false}>
              Отправить
            </button>
          </form>
          <button className={`${style.feedback__button} ${style.feedback__button_close}`} onClick={() => { onClose(); }}>
            Закрыть
          </button>
        </div>
      </dialog>
      {isPreviewModalOpen && (
        <ModalWindow
          title={themes.find((item) => item.id == selectTheme).name}
          content={previewContent}
          onClose={() => setIsPreviewModalOpen(false)}
        />
      )}
    </>
  );
}