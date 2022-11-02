import React from "react";
import { motion } from "framer-motion";
import checkIcon from "../img/check-icon.svg";
import img5d1dda82e3641ae19df5a51619ffb49c from "../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
import TopImage from "../components/TopImage";

const actual = ["https://t.me/mosoblenergo", "https://vk.com/mosoblenergo", "https://ok.ru/mosoblenergo", "https://dzen.ru/mosoblenergo"];
const off = ["https://t.me/mosoblenergo24", "https://vk.com/mosoblenergo24", "https://ok.ru/mosoblenergo24"];

export default function News() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img5d1dda82e3641ae19df5a51619ffb49c} title={"Новости компании"} />
      <div className="page-grid__content" id="content">
        <div class="text-area">
          <p>Актуальная информация о работе компании публикуется в Telegram и соцсетях:</p>
          <ul>
            {actual.map((item, index) => (
              <li key={index}>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <img src={checkIcon} style={{ marginRight: "10px" }} />
                  <a href={item}>{item}</a>{" "}
                </p>{" "}
              </li>
            ))}
          </ul>
          <p>Плановые отключения публикуются в Telegram и соцсетях:</p>
          <ul>
            {off.map((item, index) => (
              <li key={index}>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <img src={checkIcon} style={{ marginRight: "10px" }} />
                  <a href={item}>{item}</a>{" "}
                </p>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
