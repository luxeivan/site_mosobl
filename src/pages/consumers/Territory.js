import React from "react";
import { addressServer } from "../../config";
import checkIcon from "../../img/check-icon.svg";
import xlsx from "../../img/xlsx.svg";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img37550ba6c53ac1236dc634e6c4f22cc1 from "../../img/37550ba6c53ac1236dc634e6c4f22cc1.jpg";

export default function Territory() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img37550ba6c53ac1236dc634e6c4f22cc1} title={"Информация о компании"} />
      <div className="page-grid__content" id="content">
      <div className="row-docs-age border-bottom">
          <a className="doc-line" href={`${addressServer}/uploads/4327781bb104dac248633e279f302619_29561a75e9.xlsx?updated_at=2022-11-03T07:14:20.680Z`} download="" target="_blank">
            <div className="doc-line__wrap-icon">
              <img src={xlsx} alt="icon xlsx" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">Перечень потребителей АО "Мособлэнерго"</span>
              <span className="doc-line__file-info">pdf, 679КБ</span>
            </div>
          </a>
        </div>
        <div className="text-area ">
          <p>Обеспечив географию присутствия наших филиалов в большинстве муниципальных образований Подмосковья, «Мособлэнерго» всего за несколько лет стало одной из крупнейших электросетевых компаний области.</p>
        </div>
        
      </div>
    </motion.div>
  );
}
