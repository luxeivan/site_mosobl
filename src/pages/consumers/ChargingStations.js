import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import TopImage from "../../components/TopImage";
import { addressServer } from "../../config";
import imge52d6b93112691c58929068e092b99f2 from "../../img/e52d6b93112691c58929068e092b99f2.jpg";
import docx from "../../img/docx.svg";
import ElectricChargingStations from "../../components/ElectricChargingStations";

export default function ChargingStations() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={imge52d6b93112691c58929068e092b99f2} title={"Зарядные станции для электромобилей"} />
      <div className="page-grid__content" id="content">
        <div className="text-area">
          <ElectricChargingStations />

          <p>
            <b>Технические характеристики электрических зарядных станций АО «Мособлэнерго»:</b>
          </p>
          <ul>
            <li>
              <p>Мощность от 3,5 до 22 кВт</p>
            </li>
            <li>
              <p>Номинальный ток зарядки от 16 до 32 А</p>
            </li>
            <li>
              <p>Напряжение 220~400 В, однофазный/трехфазных ток – 50/60 Гц</p>
            </li>
            <li>
              <p>Класс защиты от проникновения: IP54</p>
            </li>
            <li>
              <p>Класс защиты от механических воздействий: IK8 Температура эксплуатации: от -30 °C до +40 °C Управление энергопотреблением: мониторинг потребления (по приложению)</p>
            </li>
          </ul>
          <p>
            <b>
              Типы разъемов:
            </b>
          </p>
          <ul>
            <li>
              <p>Shuko (стандартная евро розетка)</p>
            </li>
            <li>
              <p>Type2 (MENNEKES)</p>
            </li>
          </ul>
          <div>
            <br />
          </div>
          <h2>
            {" "}
            Зарядка автомобиля никогда не была настолько проста
            <br />
          </h2>
          <b>
            <p></p>
            <b>
              <br />
            </b>
            <p style={{ textAlign: "center" }}>
              <img alt="быстрый способ зарядить автомобиль" src={`${addressServer}/uploads/24b2a02a593a04f610f047315a9c21f0_2c1a9efef7.jpg?updated_at=2022-11-14T11:45:15.654Z`} title="Слайд1.jpg" />
            </p>
            <br />
            <p style={{ textAlign: "center" }}>
              <img alt="Слайд2.jpg" src={`${addressServer}/uploads/19f4e43cea4481f249a24b800d1a26e0_3bf048a6fd.jpg?updated_at=2022-11-14T11:45:15.850Z`} title="все зарядные станции в 1м мобильном приложении" />
            </p>
            <p style={{ textAlign: "center" }}>
              <img alt="Слайд3.jpg" src={`${addressServer}/uploads/c94cc6038b67b985adb59129a8631db8_763a5b28b0.jpg?updated_at=2022-11-14T11:45:15.997Z`} title="зарядка автомобиля никогда не была настолько проста" />
            </p>
            <p style={{ textAlign: "center" }}>
              <img alt="Слайд4.jpg" src={`${addressServer}/uploads/69c9c3ec0e6808dd52146384d46cdfcc_4654ba688f.jpg?updated_at=2022-11-14T11:45:16.231Z`} title="скачайте приложение" />
            </p>
            <p style={{ textAlign: "center" }}>
              <img alt="Слайд5.jpg" src={`${addressServer}/uploads/e68cda5586ea121590e69913d5104dd0_5a31bd835b.jpg?updated_at=2022-11-14T11:45:14.678Z`} title="постройте маршрут до зарядной станции" />
            </p>
            <p style={{ textAlign: "center" }}>
              <img alt="Слайд6.jpg" src={`${addressServer}/uploads/b2bea2edf8c490ed2668ee45d5c29122_6480ef2bc1.jpg?updated_at=2022-11-14T11:45:14.557Z`} title="оплачивайте зарядку прямо из приложения" />
            </p>
            <p>
              <b>
                <br />
              </b>{" "}
              <b>
                ФОТОГРАФИИ ЭЗС УСТАНОВЛЕННЫЕ В «УМНЫХ ОПОРАХ» МОЩНОСТЬЮ 3,5 КВТ
                <br />
              </b>
              <b>
                <br />
              </b>
            </p>
            <p style={{ textAlign: "center" }}>
              <img
                width="885"
                alt="Фотографии ЭЗС установленные в «Умных опорах» мощностью 3,5 кВт.jpg"
                src={`${addressServer}/uploads/0f0e752c1bfd77fadde51f5442e9f82e_bb9c8150a5.jpg?updated_at=2022-11-14T11:45:14.960Z`}
                height="597"
                title="Фотографии ЭЗС установленные в «Умных опорах» мощностью 3,5 кВт.jpg"
              />
            </p>
            <p>
              <b>
                <br />
              </b>
            </p>
            <b>
              ФОТОГРАФИИ ОТДЕЛЬНОСТОЯЩИХ ЭЗС 3,5 КВТ <br />
            </b>
            <b>
              <br />
              <p style={{ textAlign: "center" }}>
                <img width="925" alt="Фотографии отдельностоящих ЭЗС 3,5 кВт.jpg" src={`${addressServer}/uploads/7fec8b6dd87ab98a2c9daaaef4d71c94_73156842c3.jpg?updated_at=2022-11-14T11:45:15.167Z`} height="592" title="Фотографии отдельностоящих ЭЗС 3,5 кВт.jpg" />
              </p>
              <b>
                <br />
              </b>
              <p>
                <b>
                  <br />
                </b>
              </p>
              <b>
                ФОТОГРАФИИ ОТДЕЛЬНОСТОЯЩИХ ЭЗС 22 КВТ
                <br />
              </b>
            </b>
            <b>
              <b>
                <br />
              </b>
              <p style={{ textAlign: "center" }}>
                <b>
                  <img width="1003" alt="Фотографии отдельностоящих ЭЗС 22 кВт.jpg" src={`${addressServer}/uploads/85efa49946a258785d2db9365a2f0805_ac74800947.jpg?updated_at=2022-11-14T11:45:15.345Z`} height="560" title="Фотографии отдельностоящих ЭЗС 22 кВт.jpg" />
                  <br />
                </b>
              </p>
            </b>{" "}
          </b>
          <br />
          <b>
            {" "}
            <b>
              {" "}
              <br />
            </b>
          </b>
        </div>
        <br />
        <br />{" "}
        <div className="row-docs-age">
          <a className="doc-line" href={`${addressServer}/uploads/919923874bb18cac550bea753d1095fc_8f6a99680c.docx?updated_at=2022-11-14T11:45:14.274Z`} download="" target="_blank">
            <div className="doc-line__wrap-icon">
              <img src={docx} alt="icon docx" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">Часто задаваемые вопросы</span>
              <span className="doc-line__file-info">docx, 16 кб</span>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
