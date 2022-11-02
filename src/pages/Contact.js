import React, { useEffect, useState } from "react";
import { addressServer } from "../config";
import telImg from '../img/contacts-icon2.svg'
import emailImg from '../img/contacts-icon4.svg'
import mapImg from '../img/contacts-icon1.svg'
import {motion} from 'framer-motion'
import imgfile178scaled from "../img/file_178-scaled.jpg";
import TopImage from "../components/TopImage";


export default function Contact() {
  // const [contact, setContact] = useState({});

  // useEffect(() => {
  //   fetch(`${addressServer}/api/contact`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setContact(data.data))
  //     .catch((err) => {
  //       console.log(err);
  //       setContact({});
  //     });
  // }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={imgfile178scaled} title={"Контакты"} />
      <div className="page-grid__content" id="content">
      <div className="inner-post__middle">
        <div className="contact-information">
          <div className="contact-information__grid-text">
            <div className="contact-information__up">
              <img className="contact-information__icon" src={telImg} alt="icon" />
              <span className="contact-information__text">Горячая линия «Мособлэнерго»:</span>
              <a className="contact-information__tel" href="tel:84959950099">
                8 (495) 99-500-99
              </a>
            </div>
            <div className="contact-information__up">
              <img className="contact-information__icon" src={telImg} alt="icon" />
              <span className="contact-information__text">Справки по письмам:</span>
              <a className="contact-information__tel" href="tel:84957803961">
                8 (495) 780-39-61
              </a>
            </div>
            <div className="contact-information__up">
              <img className="contact-information__icon" src={emailImg} alt="icon" />
              <span className="contact-information__text">Электронный адрес:</span>
              <a className="contact-information__email" href="mailto:mail@mosoblenergo.ru">
                mail@mosoblenergo.ru
              </a>
            </div>
            <div className="contact-information__up">
              <img className="contact-information__icon" src={emailImg} alt="icon" />
              <span className="contact-information__text">Дополнительные услуги электронный адрес:</span>
              <a className="contact-information__email" href="mailto:uslugi@mosoblenergo.ru">
                uslugi@mosoblenergo.ru
              </a>
            </div>
          </div>
          <div className="contact-information__grid-text">
            <div className="contacts-row">
              <div className="contacts-row__wrap-icon">
                <img className="contacts-row__icon" src={mapImg} alt="icon" />
              </div>
              <div className="contacts-row__wrap-text">
                <span className="contacts-row__caption">АО «Мособлэнерго»</span>
                <span className="contacts-row__text">143421, Красногорский р-н, 26 км автодороги «Балтия», Бизнес Центр «RigaLand», строение 5, подъезд 3.</span>
              </div>
            </div>
            <div className="contacts-row">
              <div className="contacts-row__wrap-icon">
                <img className="contacts-row__icon" src={mapImg} alt="icon" />
              </div>
              <div className="contacts-row__wrap-text">
                <span className="contacts-row__caption">ЦОК "Центральный"</span>
                <span className="contacts-row__text">143421, Красногорский р-н, 26 км автодороги «Балтия», Бизнес Центр «RigaLand», строение 6, подъезд 4.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
}
