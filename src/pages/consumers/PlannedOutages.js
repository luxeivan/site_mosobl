import { motion } from "framer-motion";
import React from "react";
import Disconnect from "../../components/Disconnect/Disconnect";
import TopImage from "../../components/TopImage";
import img1327b1c06a19e1362c9d6bc894981c97 from "../../img/1327b1c06a19e1362c9d6bc894981c97.jpg";
import telegramQR from "../../img/planned/YQR.svg";
import alarm from "../../img/planned/alarm_alert_bell.svg";

export default function PlannedOutages() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img1327b1c06a19e1362c9d6bc894981c97} title={"Плановые отключения"} />
      <div className="page-grid__content" id="content">
        <div className="subscription-block">

          <div className='planned-notification'>
            <div className='planned-notification__area planned-notification__area_col'>
              <div className='planned-notification__title-area'>
                <img src={alarm} className='planned-notification__picture' />
                <h3 className="planned-notification__title">Уведомления в Telegram о возможных плановых отключениях по указанному адресу</h3>
              </div>
              <div className="planned-notification__text">
                <p>Уважаемые потребители! АО «Мособлэнерго» предлагает вам воспользоваться удобным способом получения информации о возможных <span style={{ fontWeight: "700" }}>плановых</span> (НЕ аварийных) отключениях электроэнергии в сетях компании через специальный <a style={{ color: "#0061aa", textDecorationColor: '#85a0b5', textDecorationLine: 'underline' }} href='https://t.me/Mosoblenergo24_bot' target="_blank">Telegram-бот</a> </p>
                <p style={{ fontWeight: 600 }}>Подписывайтесь!</p>
              </div>
            </div>
            <div className='planned-notification__area'>
              <div className='planned-notification__link-area' >
                <img src={telegramQR} alt='qr' className='planned-notification__qr' />
                <a type="button" className="planned-notification__link" href='https://t.me/Mosoblenergo24_bot' target='_blank'>Перейти в Telegram</a>
              </div>
            </div>
          </div>
          <Disconnect />
          <div className="text-area">
            <p>Актуальную информацию о плановых отключениях можно получить в соцсетях компании:</p>
            <ul>
              <li>
                <a href="https://vk.com/mosoblenergo24" target="_blank" rel="nofollow">
                  https://vk.com/mosoblenergo24
                </a>
              </li>
              <li>
                <a href="https://ok.ru/mosoblenergo24" target="_blank" rel="nofollow">
                  https://ok.ru/mosoblenergo24
                </a>
              </li>
              <li>
                <a href="https://t.me/mosoblenergo24" target="_blank" rel="nofollow">
                  https://t.me/mosoblenergo24
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
