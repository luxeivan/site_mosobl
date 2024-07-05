import React, { useEffect, useState } from "react";
import { addressServer } from "../config";
import telImg from "../img/contacts-icon2.svg";
import emailImg from "../img/contacts-icon4.svg";
import mapImg from "../img/contacts-icon1.svg";
import { motion } from "framer-motion";
import imgfile178scaled from "../img/file_178-scaled.jpg";
import TopImage from "../components/TopImage";
import FeedbackForm from "../components/FeedbackForm/FeedbackForm";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage image={imgfile178scaled} title={"Контакты"} />
      <div className="page-grid__content" id="content">
        <div className="inner-post__middle">
          <div className="contact-information">
            {/* Номера и эл.почты */}
            <div className="contact-information__grid-text">
              {/* Горячая линия */}
              <div className="contact-information__up">
                <img
                  className="contact-information__icon"
                  src={telImg}
                  alt="icon"
                />
                <span className="contact-information__text">
                  Горячая линия «Мособлэнерго»:
                </span>
                <a className="contact-information__tel" href="tel:84959950099">
                  8 (495) 99-500-99
                </a>
              </div>

              {/* Справки по письмам */}
              <div className="contact-information__up">
                <img
                  className="contact-information__icon"
                  src={telImg}
                  alt="icon"
                />
                <span className="contact-information__text">
                  Справки по письмам:
                </span>
                <a className="contact-information__tel" href="tel:84957803961">
                  8 (495) 780-39-61
                </a>
              </div>

              {/* Эл.адрес */}
              <div className="contact-information__up">
                <img
                  className="contact-information__icon"
                  src={emailImg}
                  alt="icon"
                />
                <span className="contact-information__text">
                  По общим вопросам
                </span>
                <a
                  className="contact-information__email"
                  href="mailto:uslugi@mosoblenergo.ru"
                >
                  mail@mosoblenergo.ru
                </a>
              </div>

              {/* Доп.услуги */}
              <div className="contact-information__up">
                <img
                  className="contact-information__icon"
                  src={emailImg}
                  alt="icon"
                />
                <span className="contact-information__text">
                  Дополнительные услуги электронный адрес:
                </span>
                <a
                  className="contact-information__email"
                  href="mailto:uslugi@mosoblenergo.ru"
                >
                  uslugi@mosoblenergo.ru
                </a>
              </div>
            </div>

            {/* Адреса */}
            <div className="contact-information__grid-text">
              <div className="contacts-row">
                <div className="contacts-row__wrap-icon">
                  <img className="contacts-row__icon" src={mapImg} alt="icon" />
                </div>
                <div className="contacts-row__wrap-text">
                  <span className="contacts-row__caption">
                    АО «Мособлэнерго»
                  </span>
                  <span className="contacts-row__text">
                    143421, Красногорский р-н, 26 км автодороги «Балтия», Бизнес
                    Центр «RigaLand», строение 5, подъезд 3.
                  </span>
                </div>
              </div>
              <div className="contacts-row">
                <div className="contacts-row__wrap-icon">
                  <img className="contacts-row__icon" src={mapImg} alt="icon" />
                </div>
                <div className="contacts-row__wrap-text">
                  <span className="contacts-row__caption">
                    ЦОК "Центральный"
                  </span>
                  <span className="contacts-row__text">
                    143421, Красногорский р-н, 26 км автодороги «Балтия», Бизнес
                    Центр «RigaLand», строение 6, подъезд 4.
                  </span>
                </div>
              </div>
            </div>

            {/* Напишите нам */}
            <div className="contact-information__down">
              <div className="wrapper__btn">
                <FeedbackForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
