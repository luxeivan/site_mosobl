import React from "react";

import telImg from '../img/contacts-icon2.svg'
import emailImg from '../img/contacts-icon4.svg'
import mapImg from '../img/contacts-icon1.svg'
import {motion} from 'framer-motion'

export default function ContactForMedia() {
  return (
    <motion.div className="page-grid__content" id="content"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration: .5}}
    >
        <h1 className="inner-post__title">Контакты для СМИ</h1>
      <div class="contacts-row">
        <div class="contacts-row__wrap-icon">
          <img class="contacts-row__icon" src={mapImg} alt="icon" />
        </div>
        <div class="contacts-row__wrap-text">
          <span class="contacts-row__caption">Почтовый адрес:</span>
          <span class="contacts-row__text">143421, Красногорский р-н, 26 км автодороги «Балтия», Бизнес Центр «Рига-Ленд», строение Б3.</span>
        </div>
      </div>
      <div class="contacts-row">
        <div class="contacts-row__wrap-icon">
          <img class="contacts-row__icon" src={telImg} alt="icon" />
        </div>
        <div class="contacts-row__wrap-text">
          <span class="contacts-row__caption">Наш телефон:</span>
          <span class="contacts-row__text">
            <b>(495) 780-39-62</b> (доб.1133), факс <b>(495) 780-39-60</b>
          </span>
        </div>
      </div>
      <p class="text">Следите за анонсами пресс-центра "Мособлэнерго"!</p>{" "}
    </motion.div>
  );
}
