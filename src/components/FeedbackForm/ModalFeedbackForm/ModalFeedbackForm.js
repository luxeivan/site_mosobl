import React, { useState } from "react";
import style from "./ModalFeedbackForm.module.css";

export default function Modal({ onClose }) {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [selectedSubIssue, setSelectedSubIssue] = useState("");

  const handleIssueChange = (event) => {
    setSelectedIssue(event.target.value);
    setSelectedSubIssue("");
  };

  const handleSubIssueChange = (event) => {
    setSelectedSubIssue(event.target.value);
  };


  return (
    <div className={style.modalBackground}>
      <div className={style.modalContent}>
        <form>
          <select onChange={handleIssueChange} defaultValue="">
            <option value="" disabled>
              Выберите вопрос
            </option>
            <option value="powerOutage">Отключение электроэнергии</option>
            <option value="powerQuality">Качество электроснабжения</option>
            <option value="carElectricChargingStations">
              Автомобильные электрозарядные станции
            </option>
            <option value="electricitymeteringdevices">
              Приборы учета электроэнергии (в т. ч. в
              садоводческих/огороднических некоммерческих товариществах)
            </option>
            <option value="malfunctionofpowerlines">
              Неисправности линий электропередач
            </option>
            <option value="transferoftheelectricgrid">
              Передача электросетевого хозяйства на баланс электросетевой
              организации
            </option>
            <option value="connectionelectricnetworks">
              Технологическое присоединение к электрическим сетям
            </option>
            <option value="additionalservices">Дополнительные услуги</option>
            <option value="other">Прочее</option>
          </select>

          {selectedIssue === "carElectricChargingStations" && (
            <select onChange={handleSubIssueChange} defaultValue="">
              <option value="" disabled>
                Выберите подтему
              </option>
              <option value="malfunction">Неисправность ЭЗС</option>
              <option value="installation">Установка ЭЗС</option>
            </select>
          )}

          {selectedIssue === "malfunctionofpowerlines" && (
            <select onChange={handleSubIssueChange} defaultValue="">
              <option value="" disabled>
                Выберите подтему
              </option>
              <option value="malfunction">Охранные зоны</option>
              <option value="installation">Опиловка</option>
              <option value="malfunction">Обрыв проводов</option>
              <option value="malfunction">Состояние опор</option>
            </select>
          )}

          {selectedIssue === "powerOutage" && (
            <>
              <input type="text" placeholder="ФИО заявителя" />
              <input
                type="email"
                placeholder="адрес электронной почты для обратной связи"
              />
              <input type="tel" placeholder="телефон для обратной связи" />
              <input type="text" placeholder="адрес места инцидента" />
              <input
                type="datetime-local"
                placeholder="дата и время инцидента"
              />
            </>
          )}

          {selectedIssue === "powerQuality" && (
            <>
              <input type="text" placeholder="ФИО заявителя" />
              <input
                type="email"
                placeholder="адрес электронной почты для обратной связи"
              />
              <input type="tel" placeholder="телефон для обратной связи" />
              <input
                type="text"
                placeholder="адрес нахождения энергопринимающих устройств"
              />
              <textarea placeholder="причина обращения" />
              <input type="text" placeholder="дата/период времени претензии" />
            </>
          )}

          {selectedIssue === "carElectricChargingStations" &&
            selectedSubIssue && (
              <>
                <input type="text" placeholder="ФИО заявителя" />
                <input
                  type="email"
                  placeholder="адрес электронной почты для обратной связи"
                />
                <input type="tel" placeholder="телефон для обратной связи" />
                <input
                  type="text"
                  placeholder="адрес нахождения ЭЗС / адрес предполагаемой установки ЭЗС"
                />
                {selectedSubIssue === "malfunction" && (
                  <input type="text" placeholder="номер ЭЗС" />
                )}
              </>
            )}

          {selectedIssue === "electricitymeteringdevices" && (
            <>
              <input type="text" placeholder="ФИО заявителя" />
              <input
                type="email"
                placeholder="адрес электронной почты для обратной связи"
              />
              <input type="tel" placeholder="телефон для обратной связи" />
              <input type="text" placeholder="адрес нахождения объекта" />
              <input
                type="text"
                placeholder="номер лицевого счета (при наличии)"
              />
            </>
          )}

          {selectedIssue === "malfunctionofpowerlines" && selectedSubIssue && (
            <>
              <input type="text" placeholder="ФИО заявителя" />
              <input
                type="email"
                placeholder="адрес электронной почты для обратной связи"
              />
              <input type="tel" placeholder="телефон для обратной связи" />
              <input
                type="text"
                placeholder="адрес места инцидента/ адрес нахождения объекта (г.о., населенный пункт, улица, номер дома)"
              />
              <input
                type="datetime-local"
                placeholder="дата и время инцидента"
              />
              <input type="text" placeholder="причина обращения" />
              <input type="text" placeholder="фотоматериалы" />
              <input
                type="text"
                placeholder="характеристика линии (магистральная линия/вводной провод в дом)"
              />
            </>
          )}

          {selectedIssue === "transferoftheelectricgrid" && (
            <>
              <input type="text" placeholder="ФИО заявителя" />
              <input
                type="email"
                placeholder="адрес электронной почты для обратной связи"
              />
              <input type="tel" placeholder="телефон для обратной связи" />
              <input
                type="text"
                placeholder="наименование объекта (ТП, линии электропередачи и ид.)"
              />
              <input type="text" placeholder="адрес нахождения объекта" />
              <input
                type="text"
                placeholder="технические характеристики (класс напряжения, протяженность ВЛ/КЛ, трансформаторная мощность)"
              />
            </>
          )}

          {selectedIssue === "connectionelectricnetworks" && (
            <>
              <input type="text" placeholder="ФИО заявителя" />
              <input
                type="email"
                placeholder="адрес электронной почты для обратной связи"
              />
              <input type="tel" placeholder="телефон для обратной связи" />
              <input
                type="text"
                placeholder="номер заявки/договора (при наличии)"
              />
            </>
          )}

          {selectedIssue === "additionalservices" && (
            <>
              <input type="text" placeholder="ФИО заявителя" />
              <input
                type="email"
                placeholder="адрес электронной почты для обратной связи"
              />
              <input type="tel" placeholder="телефон для обратной связи" />
              <input type="text" placeholder="причина обращения" />
              <p className={style.dopinformation}>
                С полным списком и условиями оказания дополнительных услуг, а
                также с формами заявок и перечнем обязательных документов для
                оказания услуг Вы можете ознакомиться в разделе «Потребителям»
                по ссылке:
                <a
                  href=" https://mosoblenergo.ru/additiona/Services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://mosoblenergo.ru/additiona/Services
                </a>
                . В случае заинтересованности прикрепите заполненную заявку на
                дополнительную услугу к письму. Если у Вас остались вопросы
                свяжитесь с нами по тел.: 8 (495) 780-39-62 доб. 3327, доб.
                1096, или по e-mail:
                <a href="mailto:uslugi@mosoblenergo.ru">
                  uslugi@mosoblenergo.ru
                </a>
                .
              </p>
            </>
          )}

          {selectedIssue === "other" && (
            <>
              <input type="text" placeholder="ФИО заявителя" />
              <input
                type="email"
                placeholder="адрес электронной почты для обратной связи"
              />
              <input type="tel" placeholder="телефон для обратной связи" />
            </>
          )}

          <label class="checkboxContainer">
            <input type="checkbox" required />
            <span class="checkboxText">
              Отправляя письмо, Вы даете согласие на обработку персональных
              данных, а также несете ответственность за полноту и достоверность
              предоставленной информации.
            </span>
          </label>

          <p className={style.disclaimer}>
            * При регистрации заявитель должен подтвердить свое согласие на
            обработку персональных данных.
          </p>
          <p className={style.disclaimer}>
            * Федеральный закон Nº59-ФЗ от 02.05.2006 о порядке рассмотрения
            обращений граждан Российской Федерации.
          </p>

          <button type="submit">Отправить</button>
        </form>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};