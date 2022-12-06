import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import TopImage from "../../components/TopImage";
import { addressServer } from "../../config";
import imge52d6b93112691c58929068e092b99f2 from "../../img/e52d6b93112691c58929068e092b99f2.jpg";
import docx from "../../img/docx.svg";

export default function ChargingStations() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={imge52d6b93112691c58929068e092b99f2} title={"Зарядные станции для электромобилей"} />
      <div className="page-grid__content" id="content">
        <div className="text-area">
          <p>Уважаемые клиенты!</p>
          <p>
            Информируем Вас, о том, что для улучшения работы ЭЗС, в период с августа по ноябрь 2022 года, на ЭЗС марки «Сигма», проводятся ремонтные работы. По завершению ремонтных работ, управление ЭЗС АО «Мособлэнерго» будет осуществляться
            мобильным приложением «PlugME».
          </p>
          <p>
            Все установленные АО «Мособлэнерго» ЭЗС можно найти на Яндекс карте по ссылке:&nbsp;
            <a href="https://yandex.ru/maps/?um=constructor%3Ab13ed93ce95b2d10bd725375395015e8bcae9c5c2d4db7e70476c6be77ef415b&amp;source=constructorLink" target="_blank">
              https://yandex.ru/maps/?um=constructor%3Ab13ed93ce95b2d10bd725375395015e8bcae9c5c2d4db7e70476c6be77ef415b&amp;source=constructorLink
            </a>
          </p>
          <p>
            Телефон технической поддержки работы ЭЗС и мобильного приложения{" "}
            <b>
              «PlugMe»:{" "}
              <a href="tel:+78002509779" style={{fontSize: "16px"}}>
                +7 (800) 250-97-79
              </a>
              .
            </b>
          </p>
          <p></p>
          <p>
            <b>Режим работы технической поддержки «PlugMe» - круглосуточно.</b>
          </p>
          <p></p>
          <p>
            Мобильное приложения&nbsp;<b>«PlugMe»</b>&nbsp;можно скачать&nbsp;в магазинах Google Play или AppStore.
          </p>{" "}
          <br />
          <p>
            <br />
          </p>
          <h2>Перечень электрических зарядных станций АО «Мособлэнерго» установленных на территории Московской области</h2>
          <br />
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Балашиха</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down" >
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка, <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>мкр. Новое Павлино, ул. Троицкая, д.&nbsp;4</td>
                        <td>55.728406, 37.976105</td>
                        <td>1144</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Твардовского, д.12</td>
                        <td>55.792609, 37.978850</td>
                        <td>1146</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Кожедуба, д.&nbsp;8</td>
                        <td>55.825718, 37.947708</td>
                        <td>1147</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Железнодорожный, ул. Поликахина, д.&nbsp;3</td>
                        <td>55.740066, 38.000219</td>
                        <td>1152</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          ул. Калинина, д.&nbsp;10, <br />
                          ж.к. Столичный
                        </td>
                        <td>55.739589, 38.030351</td>
                        <td>1150</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          мкр. Саввино, <br />
                          ул. Саввинская, д.&nbsp;17
                        </td>
                        <td>55.727962, 38.034355</td>
                        <td>1145</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Советская, д.&nbsp;44&nbsp;А</td>
                        <td>55.815348, 37.955593</td>
                        <td>1148</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Железнодорожный, ул. Поликахина, д.&nbsp;1</td>
                        <td>55.739611, 38.005935</td>
                        <td>1151</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          мкр. Сакраменто, <br />
                          ул. Мещера, д.&nbsp;14
                        </td>
                        <td>55.808563, 38.051963</td>
                        <td>1149</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Новое Измайлово ул. Ситникова, д.&nbsp;8</td>
                        <td>55.789905, 37.882253</td>
                        <td>1044</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Заречная, д.&nbsp;17</td>
                        <td>55.823685, 37.967625</td>
                        <td>1103</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Демин луг, д.&nbsp;5</td>
                        <td>55.793541, 37.888397</td>
                        <td>1107</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Железнодорожный, ул. Речная д.&nbsp;7</td>
                        <td>55.746566, 37.961409</td>
                        <td>1222</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Московский проезд, д.&nbsp;11</td>
                        <td>55.808205, 37.981565</td>
                        <td>1223</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>проспект Ленина, д.&nbsp;7</td>
                        <td>55.798550, 37.931487</td>
                        <td>1224</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.
                          <br />
                          001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Богородский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>
                          ул.Школьная.&nbsp;
                          <br />
                          д.&nbsp;11
                        </td>
                        <td>55.809022, 38.098303</td>
                        <td>1110</td>
                        <td>Сигма, ЗС-ОС-Ш 3,5</td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Волоколамский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>Марка, модель ЭЗС</th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>2-й Шаховской проезд, д.26</td>
                        <td>56.037874, 35.939327</td>
                        <td>1299</td>
                        <td>Сигма, ЗС-ОС-Ш 3,5</td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Воскресенск</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>Марка,модель ЭЗС</th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>
                          ул. Коммунальная, д.54
                          <br />
                          (ТЦ«Белоозерский»)
                        </td>
                        <td>
                          55,45267
                          <br />
                          38,438894
                        </td>
                        <td>1016</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>Schuko/Type 2</td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>ул. Шоссейная, д. 71а (АЗС «Аист»)</td>
                        <td>55,340047 38,672657</td>
                        <td>1017</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>Schuko/Type 2</td>
                        <td>mode 2/3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Дзержинский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка, <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Лесная, д.1</td>
                        <td>
                          55.630902,
                          <br />
                          37.852866
                        </td>
                        <td>1117</td>
                        <td>
                          Сигма, <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Лермонтова, д.8</td>
                        <td>
                          55.628840,
                          <br />
                          37.857389
                        </td>
                        <td>1319</td>
                        <td>
                          Сигма, <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Дмитровский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Спасская, д.17</td>
                        <td>
                          56.373106,
                          <br />
                          37.546992
                        </td>
                        <td>1298</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Внуковская, д.29</td>
                        <td>
                          56.354567, <br />
                          37.548967
                        </td>
                        <td>1303</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Домодедово</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>с. Домодедово, ул. Высотная, дом 1 (ЖК «Домодедово парк»)</td>
                        <td>
                          55.475343,
                          <br />
                          37.706098
                        </td>
                        <td>1041</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          ул. Курыжова (парковка между домами <nobr>23-25)</nobr>
                        </td>
                        <td>
                          55.398729, <br />
                          37.775468
                        </td>
                        <td>1176</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          ул. Курыжова (парковка между домами <nobr>23-25)</nobr>
                        </td>
                        <td>
                          55.398394,
                          <br />
                          37.775211
                        </td>
                        <td>1177</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ДК Авиатор</td>
                        <td>
                          55.414236,
                          <br />
                          37.837262
                        </td>
                        <td>1178</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Корнеева, д.38</td>
                        <td>
                          55.426025,
                          <br />
                          37.777506
                        </td>
                        <td>1179</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Дубна</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Станционная д. 32</td>
                        <td>56.739090, 37.163638</td>
                        <td>1302</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Университетская, д. 16</td>
                        <td>56.739178, 37.223448</td>
                        <td>1272</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Володарского, 4/18А</td>
                        <td>56.754634, 37.140298</td>
                        <td>1237</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Тверская, д.&nbsp;9</td>
                        <td>56.759816, 37.136436</td>
                        <td>1238</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Вокзальная, д. 7</td>
                        <td>56.727644, 37.143145</td>
                        <td>1239</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Энтузиастов, д. 11а</td>
                        <td>56.730000, 37.154000</td>
                        <td>1240</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Боголюбова, д.15</td>
                        <td>56.736296, 37.163969</td>
                        <td>1241</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Боголюбова, д.16</td>
                        <td>56.738964, 37.165811</td>
                        <td>1242</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Егорьевск</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>4 микрорайон, д. 16</td>
                        <td>
                          55.363797, <br />
                          39.067138
                        </td>
                        <td>1244</td>
                        <td>
                          Сигма,
                          <br /> ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Жуковский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Гагарина д.&nbsp;47</td>
                        <td>
                          55.604998,
                          <br />
                          38.095248{" "}
                        </td>
                        <td>1134</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Серова д. 16</td>
                        <td>
                          55.590208,
                          <br />
                          38.134149{" "}
                        </td>
                        <td>1135</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Комсомольская д.&nbsp;1</td>
                        <td>
                          55.586719,
                          <br />
                          38.130968{" "}
                        </td>
                        <td>1136</td>
                        <td>
                          Сигма,
                          <br /> ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Комсомольская д. 5 </td>
                        <td>
                          55.587199,
                          <br />
                          38.129001{" "}
                        </td>
                        <td>1137</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Чкалова д. 8</td>
                        <td>
                          55.590877,
                          <br />
                          38.131152{" "}
                        </td>
                        <td>1138</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Зарайск</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>пл. Урицкого, д.&nbsp;3&nbsp;(АЗС "Бензар")( Ленинская 49 перенесли)</td>
                        <td>
                          54,759395, <br />
                          38,891613
                        </td>
                        <td>1030</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>ул. Ленинская, д. 49</td>
                        <td>
                          54.759730,
                          <br />
                          38.891861
                        </td>
                        <td>1121</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Ленинская, д. 47</td>
                        <td>
                          54.759795,
                          <br />
                          38.891631
                        </td>
                        <td>1122</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Академика Виноградова, д. 20 </td>
                        <td>
                          54.751554,
                          <br />
                          38.896519
                        </td>
                        <td>1126</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Красноармейская, д. 38</td>
                        <td>
                          54.760296,
                          <br />
                          38.874739
                        </td>
                        <td>1127</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Красноармейская, д.38</td>
                        <td>
                          54.760305,
                          <br /> 38.874564
                        </td>
                        <td>1128</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Советская, д. 23</td>
                        <td>
                          54.757995, <br />
                          38.881747
                        </td>
                        <td>1129</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>2-й мкрн., д. 37А </td>
                        <td>
                          54.763007,
                          <br /> 38.891673
                        </td>
                        <td>1130</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пл. Пожарского, д.&nbsp;2 </td>
                        <td>
                          55.586719,
                          <br />
                          38.130968{" "}
                        </td>
                        <td>1131</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пл. Пожарского, д. 2 </td>
                        <td>
                          54.758728,
                          <br /> 38.872663
                        </td>
                        <td>1132</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пл. Урицкого, д. 1А</td>
                        <td>
                          55.586719, <br />
                          38.130968{" "}
                        </td>
                        <td>1133</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Истра</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Железнодорожная, д. 11</td>
                        <td>
                          55.866290
                          <br />
                          37.126693
                        </td>
                        <td>1029</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>д. Черная, ул. Ясная, д. 1</td>
                        <td>
                          55.841342,
                          <br />
                          37.126578
                        </td>
                        <td>1211</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>д. Черная, ул. Широкая, д. 23</td>
                        <td>
                          55.841343,
                          <br />
                          37.126495
                        </td>
                        <td>1210</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Босова, д. 8а</td>
                        <td>
                          55.908584,
                          <br />
                          36.869532
                        </td>
                        <td>1300</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>с. Рождествено, Сиреневый бульвар, д. 2</td>
                        <td>
                          55.863219,
                          <br />
                          37.043529
                        </td>
                        <td>1304</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Ленинградская д. 3</td>
                        <td>
                          55.859353,
                          <br />
                          37.129525
                        </td>
                        <td>1252</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Перехватывающая парковка у ЖД станции «Истра»</td>
                        <td>
                          55.904848,
                          <br />
                          36.856583
                        </td>
                        <td>1235</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Площадь революции д. 9</td>
                        <td>
                          55.914411,
                          <br />
                          36.857840
                        </td>
                        <td>1236</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Кашира</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Ленина, д. 2 (МФЦ)</td>
                        <td>
                          54,840687
                          <br /> 38,196144
                        </td>
                        <td>1038</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>мкр. Ожерелье, ул. Пионерская, д. 18</td>
                        <td>
                          54.796787,
                          <br /> 38.261828
                        </td>
                        <td>1123</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5{" "}
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Победы д. 3</td>
                        <td>
                          54.838174,
                          <br /> 38.189642
                        </td>
                        <td>1124</td>
                        <td>
                          Сигма,
                          <br /> ЗС-ОГК-Ш 3,5{" "}
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Кржижановского. д. 1корп. 1</td>
                        <td>
                          54.842583,
                          <br /> 38.239157
                        </td>
                        <td>1125</td>
                        <td>
                          Сигма,
                          <br /> ЗС-ОГК-Ш 3,5{" "}
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Клин</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td> Волоколамское шоссе, д. 1с8 (автотехцентр «КАВЗ»)</td>
                        <td>
                          56,327658
                          <br />
                          36,694711
                        </td>
                        <td>1008</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>Schuko/Type 2</td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>Ленинградское шоссе, д. 1 (ООО «Сервис»)</td>
                        <td>
                          56,346259
                          <br />
                          36,707372
                        </td>
                        <td>1023</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>ул. Ленинградская, д. 15</td>
                        <td>
                          56.333030,
                          <br />
                          36.729646
                        </td>
                        <td>1207</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Чайковского, д. 42 (Демьяновский проезд)</td>
                        <td>
                          56.328887,
                          <br />
                          36.744321
                        </td>
                        <td>1105</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Чайковского, д. 42 (Демьяновский проезд)</td>
                        <td>
                          56.328642,
                          <br />
                          36.744342
                        </td>
                        <td>1106</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Коломна</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Проспект Кирова, д. 84</td>
                        <td>
                          55.073548,
                          <br />
                          38.759503
                        </td>
                        <td>1204</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Ленина, д.35 (ТЦ «Магнум»)</td>
                        <td>
                          54,85466
                          <br />
                          38,562868
                        </td>
                        <td>1013</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>
                          ул. Парковая, д 2г <br />
                          (ЛД«Арена Легенд»)
                        </td>
                        <td>
                          54,855137
                          <br />
                          38,539492
                        </td>
                        <td>1027</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Королёв</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Коминтерна, д. 10</td>
                        <td>
                          55.922031,
                          <br />
                          37.812660
                        </td>
                        <td>1168</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пр. Космонавтов, д. 38</td>
                        <td>
                          55.908593,
                          <br />
                          37.863293
                        </td>
                        <td>1171</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Лесная, д. 25</td>
                        <td>
                          55.934122,
                          <br />
                          37.850077
                        </td>
                        <td>1163</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Горького, д. 16а</td>
                        <td>
                          55.911420,
                          <br />
                          37.873035
                        </td>
                        <td>1169</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Дзержинского, д.12/2</td>
                        <td>
                          55.919919,
                          <br />
                          37.856037
                        </td>
                        <td>1167</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Комитетский лес, д.&nbsp;15</td>
                        <td>
                          55.930456,
                          <br />
                          37.834745
                        </td>
                        <td>1165</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Папанина, д. 9/16</td>
                        <td>
                          55.932576,
                          <br />
                          37.855579
                        </td>
                        <td>1164</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пр-т Космонавтов, д.17, д.19</td>
                        <td>
                          55.917000,
                          <br />
                          37.869148
                        </td>
                        <td>1170</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пр. Королева, д. 28в</td>
                        <td>
                          55.922484,
                          <br />
                          37.857083
                        </td>
                        <td>1166</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>50-лет ВЛКСМ, д. 9</td>
                        <td>
                          55.922446,
                          <br />
                          37.841731
                        </td>
                        <td>1172</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Пионерская, д. 37</td>
                        <td>
                          55.914431,
                          <br />
                          37.817966
                        </td>
                        <td>1173</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Садовая, д. 10</td>
                        <td>
                          55.930439,
                          <br />
                          37.816177
                        </td>
                        <td>1174</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Котельники</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>Новорязанское шоссе, дом 24 (ООО «Гиперглобус»)</td>
                        <td>
                          55,659015
                          <br />
                          37,887591
                        </td>
                        <td>1020</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>Schuko/Type 2</td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>мкр. Силикат, д. 18</td>
                        <td>
                          55.649147,
                          <br />
                          37.854858
                        </td>
                        <td>1118</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Южный, д. 11</td>
                        <td>
                          55.645197,
                          <br />
                          37.860641
                        </td>
                        <td>1247</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Силикат, д. 29</td>
                        <td>
                          55.647789,
                          <br />
                          37.853816
                        </td>
                        <td>1262</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Белая Дача, д. 62</td>
                        <td>
                          55.662277,
                          <br />
                          37.848091
                        </td>
                        <td>1263</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Белая Дача д.11</td>
                        <td>
                          55.663463,
                          <br />
                          37.848850
                        </td>
                        <td>1264</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>2-ой Покровский проезд, д. 12</td>
                        <td>
                          55.663108,
                          <br />
                          37.857800
                        </td>
                        <td>1265</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Красногорск</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>
                          БЦ «Рига Лэнд», <br />
                          парковка АО «Мособлэнерго»
                        </td>
                        <td>
                          55,786193
                          <br />
                          37,241055
                        </td>
                        <td>1005</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>Новорижское шоссе 26 км, корп. 5</td>
                        <td>
                          55,786276
                          <br />
                          37,240154
                        </td>
                        <td>1004</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>ул. Братцевская, д. 12</td>
                        <td>
                          55.858665,
                          <br />
                          37.390982
                        </td>
                        <td>1225</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ДПМО б-р Строителей, 1</td>
                        <td>
                          55,818139
                          <br />
                          37,382442
                        </td>
                        <td>1003</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>ДПМО б-р Строителей, 1</td>
                        <td>
                          55,81591
                          <br />
                          37,382165
                        </td>
                        <td>1001</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>ДПМО б-р Строителей, 1</td>
                        <td>
                          55,815961
                          <br />
                          37,382175
                        </td>
                        <td>1002</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>квартал Коммунальный, д. 1</td>
                        <td>
                          55.819317,
                          <br />
                          37.350566
                        </td>
                        <td>1032</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td> ул. Игоря Мерлушкина, д. 1 </td>
                        <td>
                          55.833591,
                          <br />
                          37.269626
                        </td>
                        <td>1209</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Ленина, д. 28</td>
                        <td>
                          55.831804,
                          <br />
                          37.301477
                        </td>
                        <td>1208</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пгт. Нахабино, ул. Школьная, д. 1А</td>
                        <td>
                          55.840310,
                          <br />
                          37.147403
                        </td>
                        <td>1043</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Красногорск, ул. Ленина, д. 53</td>
                        <td>
                          55.835332,
                          <br />
                          37.300302
                        </td>
                        <td>1227</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Красногорск, ул. Ленина, д.17 </td>
                        <td>
                          55.826825,
                          <br />
                          37.313828
                        </td>
                        <td>1228</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Школьная, д. 15</td>
                        <td>
                          55.839168,
                          <br />
                          37.139235
                        </td>
                        <td>1221</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Краснознаменск (ЗАТО)</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Молодежная, д. 2</td>
                        <td>
                          55.601914,
                          <br />
                          37.041975
                        </td>
                        <td>1120</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Связистов, д. 10</td>
                        <td>
                          55.594215,
                          <br />
                          37.048476
                        </td>
                        <td>1119</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Ленинский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>проспект Ленинского Комсомола, д. 9, корп. 3 (ТЦ «МАК»)</td>
                        <td>
                          55,546225
                          <br />
                          37,710054
                        </td>
                        <td>1033</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Лобня</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>Букинское шоссе, д. 26</td>
                        <td>
                          56.021960,
                          <br />
                          37.477014
                        </td>
                        <td>1206</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Луховицы</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Куйбышева, д.71 (ТЦ Галерея)</td>
                        <td>
                          54,965199
                          <br />
                          39,02647
                        </td>
                        <td>1014</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>
                          ул. Куйбышева, д.104 <br />
                          (ТК «Луховицы»)
                        </td>
                        <td>
                          54,965491
                          <br />
                          39,024908
                        </td>
                        <td>1015</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Люберцы</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Поселок Калинина, д. 50</td>
                        <td>
                          55.689767,
                          <br />
                          37.876208
                        </td>
                        <td>1271</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td> Октябрьский проспект, д. 366 (ТРЦ «Орбита»)</td>
                        <td>
                          55,663274
                          <br />
                          37,911041
                        </td>
                        <td>1021</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>Октябрьский проспект, д. 112 (ТРЦ «Выходной»)</td>
                        <td>
                          55,684304
                          <br />
                          37,878023
                        </td>
                        <td>1040</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>ул. Московская, д. 15</td>
                        <td>
                          55.672906,
                          <br />
                          37.875756
                        </td>
                        <td>1212</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Льва Толстого, д. 17а</td>
                        <td>
                          55.701304,
                          <br />
                          37.898054
                        </td>
                        <td>1226</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Октябрьский проспект, д. 352б</td>
                        <td>
                          55.665052
                          <br />
                          37.908365
                        </td>
                        <td>1180</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Электрофикации, д. 29</td>
                        <td>
                          55.663245
                          <br />
                          37.929821
                        </td>
                        <td>1181</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Микрорайон птицефабрики, д. 32</td>
                        <td>
                          55.657313
                          <br />
                          37.928610
                        </td>
                        <td>1182</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Юбилейная, д. 2</td>
                        <td>
                          55.666946
                          <br />
                          37.879868
                        </td>
                        <td>1183</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          ул. <nobr>3-е</nobr> Почтовое Отделение, д. 34
                        </td>
                        <td>
                          55.676598
                          <br />
                          37.875029
                        </td>
                        <td>1184</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          ул. <nobr>3-е</nobr> Почтовое Отделение, д. 98
                        </td>
                        <td>
                          55.681433
                          <br />
                          37.863857
                        </td>
                        <td>1185</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Октябрьский проспект, д. 84</td>
                        <td>
                          55.687037
                          <br />
                          37.873124
                        </td>
                        <td>1186</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Митрофанова, д.17</td>
                        <td>
                          55.692942
                          <br />
                          37.887686
                        </td>
                        <td>1187</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Попова, д. 30</td>
                        <td>55.696526 37.898717</td>
                        <td>1188</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Урицкого, д. 29</td>
                        <td>
                          55.698267
                          <br />
                          37.895516
                        </td>
                        <td>1189</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          Р.П. Малаховка, <br />
                          Быковское шоссе, д. 53
                        </td>
                        <td>
                          55.622969,
                          <br />
                          37.999751
                        </td>
                        <td>1190</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          Р.П. Малаховка,
                          <br />
                          Михневское шоссе, д. 15/1
                        </td>
                        <td>
                          55.632538,
                          <br />
                          38.012186
                        </td>
                        <td>1191</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>
                          Д.П. Красково, <br />
                          ул. 2-я Заводская, д. 26
                        </td>
                        <td>
                          55.659001
                          <br />
                          37.980595
                        </td>
                        <td>1192</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Урицкого, д. 5</td>
                        <td>
                          55.702421
                          <br />
                          37.892848
                        </td>
                        <td>1193</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. 8-го Марта, д. 43а</td>
                        <td>
                          55.702274
                          <br />
                          37.883108
                        </td>
                        <td>1194</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Восточный, д. 1</td>
                        <td>
                          55.614125,
                          <br />
                          37.972469{" "}
                        </td>
                        <td>1195</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Школьная, д. 1</td>
                        <td>
                          55.611145,
                          <br />
                          37.970871{" "}
                        </td>
                        <td>1200</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Комсомольский пр-т, д. 18/1</td>
                        <td>
                          55.691882,
                          <br />
                          37.909129{" "}
                        </td>
                        <td>1201</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Лермонтова, д. 6</td>
                        <td>
                          55.653564,
                          <br />
                          37.947977
                        </td>
                        <td>1010</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Можайский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Мира, д. 15 (дворец спорта «Багратион»)</td>
                        <td>
                          55.505776,
                          <br />
                          36.036169
                        </td>
                        <td>1011</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Мытищи</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Карла Маркса, д. 4Б (МФЦ)</td>
                        <td>
                          55,915326
                          <br />
                          37,769168
                        </td>
                        <td>1024</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>Новомытищинский проспект, д. 36/7 (Администрация ГО Мытищи)</td>
                        <td>
                          55,909852
                          <br />
                          37,736098
                        </td>
                        <td>1039</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Наро-Фоминский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>пл. Свободы, д. 7 (магазин «Сириус»)</td>
                        <td>
                          55.386723
                          <br />
                          36.735488
                        </td>
                        <td>1028</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td> ул. Маршала Жукова, д. 10 (РДК «Звезда»)</td>
                        <td>
                          55,385107
                          <br />
                          36,722741
                        </td>
                        <td>1034</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Одинцовский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Союзная, д.&nbsp;9 (офис Одинцовского филиала)</td>
                        <td>
                          55,671213
                          <br /> 37,291026
                        </td>
                        <td>1006</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>ул. Манжосовская, д. 1 (парк им. Л. Лазутиной)</td>
                        <td>
                          55,690456
                          <br /> 37,250798
                        </td>
                        <td>1007</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>ул. Свободы, д.&nbsp;2</td>
                        <td>
                          55.672826,
                          <br /> 37.281110
                        </td>
                        <td>б/н</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>ул. Говорова, д. 163 (ТРЦ «Атлас»)</td>
                        <td>
                          55,690176 <br />
                          37,304751
                        </td>
                        <td>1026</td>
                        <td>T&nbsp;Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>ул. Заводская, д.&nbsp;9</td>
                        <td>
                          55.599295,
                          <br /> 36.694316
                        </td>
                        <td>1213</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>п. Барвиха, д. 40</td>
                        <td>
                          55.740672,
                          <br />
                          37.276680
                        </td>
                        <td>1156</td>
                        <td>
                          Сигма,
                          <br /> ЗС-ОГК-Ш 3,5{" "}
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Можайское шоссе, д. 50</td>
                        <td>
                          55.708601,
                          <br />
                          37.378595
                        </td>
                        <td>1155</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Агрохимиков, д. 2б</td>
                        <td>
                          55.704790,
                          <br />
                          37.365992
                        </td>
                        <td>1154</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Агрохимиков, д. 4</td>
                        <td>
                          55.704803,
                          <br />
                          37.362342
                        </td>
                        <td>1153</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Маршала Жукова, д. 28</td>
                        <td>
                          55.679458,
                          <br />
                          37.261379
                        </td>
                        <td>1248</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Маршала Жукова, д. 28</td>
                        <td>
                          55.679484,
                          <br />
                          37.261384
                        </td>
                        <td>1249</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Маршала Неделина, д. 10</td>
                        <td>
                          55.679477,
                          <br />
                          37.265801
                        </td>
                        <td>1250</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Маршала Неделина, д. 10</td>
                        <td>
                          55.679535,
                          <br />
                          37.265718
                        </td>
                        <td>1251</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Дальняя, д. 15 (ТК «ЕвроДом»)</td>
                        <td>
                          55,661564
                          <br />
                          37,22868
                        </td>
                        <td>1025</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>ЖК «Западное Кунцево» Европейский бульвар, д. 8 корп. 1</td>
                        <td>
                          55.726970,
                          <br />
                          37.344312
                        </td>
                        <td>б/н</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>д. Раздоры, (автомобильная парковка парка Малевича)</td>
                        <td>
                          55,738525,
                          <br />
                          37,298971
                        </td>
                        <td>б/н</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>д. Раздоры, (автомобильная парковка парка Малевича у футбольных полей)</td>
                        <td>
                          55,738327,
                          <br />
                          37,306079
                        </td>
                        <td>б/н</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Союзная, д. 1в</td>
                        <td>
                          55.671672,
                          <br />
                          37.283860
                        </td>
                        <td>б/н</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Калинина, д.4</td>
                        <td>
                          55.708239,
                          <br />
                          37.364864
                        </td>
                        <td>б/н</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Белорусская, д. 8</td>
                        <td>
                          55.662381,
                          <br />
                          37.298452
                        </td>
                        <td>б/н</td>
                        <td>
                          Сигма,
                          <br /> ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Павловский Посад</span>

              <br />
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Кузьмина. д. 40 а</td>
                        <td>
                          55.764246,
                          <br /> 38.669438
                        </td>
                        <td>1197</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Кузьмина.&nbsp;д.&nbsp;47</td>
                        <td>
                          55.763880,
                          <br /> 38.671056
                        </td>
                        <td>1198</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Кузьмина.&nbsp;д.&nbsp;50</td>
                        <td>
                          55.763611, <br />
                          38.674288
                        </td>
                        <td>1199</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Подольск</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Подольская, д.&nbsp;4</td>
                        <td>
                          55.465948, <br />
                          37.546915
                        </td>
                        <td>1301</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Академика Доллежаля, д.&nbsp;33</td>
                        <td>
                          55.415797,
                          <br /> 37.480275
                        </td>
                        <td>1205</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Пушкинский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Железнодорожная, д.&nbsp;4&nbsp;(многоуровневый паркинг)</td>
                        <td>
                          56,014151
                          <br />
                          37,836229
                        </td>
                        <td>1009</td>
                        <td>ENSTO EVC 100</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Пущино</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>мкр. «Д», д.&nbsp;10</td>
                        <td>
                          54.829989,
                          <br /> 37.634306
                        </td>
                        <td>1320</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Раменский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Молодежная, д.&nbsp;27</td>
                        <td>
                          55.592987,
                          <br /> 38.252457
                        </td>
                        <td>1270</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Чугунова, д.&nbsp;43&nbsp;(МКД)</td>
                        <td>
                          55.579708,
                          <br /> 38.200075
                        </td>
                        <td>1042</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Реутов</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Кирова, д.&nbsp;7</td>
                        <td>
                          55.759282,
                          <br />
                          37.850170
                        </td>
                        <td>1111</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Некрасова, д.&nbsp;14</td>
                        <td>
                          55.770601,
                          <br />
                          37.850646
                        </td>
                        <td>1101</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Молодежная д.&nbsp;6</td>
                        <td>
                          55.746901,
                          <br />
                          37.849644
                        </td>
                        <td>1102</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Юбилейный пр-т, д.&nbsp;4</td>
                        <td>
                          55.7461430,
                          <br />
                          37.8556090{" "}
                        </td>
                        <td>1104</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Реутовских ополченцев, д.&nbsp;6</td>
                        <td>
                          55.772189,
                          <br />
                          37.845979
                        </td>
                        <td>1108</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Юбилейный пр-т, д.72</td>
                        <td>
                          55.753374,
                          <br />
                          37.884064
                        </td>
                        <td>1142</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Юбилейный пр-т, д.78</td>
                        <td>
                          55.753799,
                          <br />
                          37.887543
                        </td>
                        <td>1143</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Сергиево-Посадский</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Валовая, д.&nbsp;28</td>
                        <td>
                          56.314392,
                          <br /> 38.141087
                        </td>
                        <td>1273</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пр-т Красной Армии, 218-218а</td>
                        <td>
                          56.327486,
                          <br /> 38.153112
                        </td>
                        <td>1214</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пр. Красной Армии, д.&nbsp;234&nbsp;корпу.&nbsp;3 </td>
                        <td>
                          56.329302, <br />
                          38.155637
                        </td>
                        <td>1215</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Пограничная, д. 30a</td>
                        <td>
                          56.337952,
                          <br /> 38.140774
                        </td>
                        <td>1216</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Новоуглическое шоссе, д.&nbsp;52&nbsp;б </td>
                        <td>
                          56.331778,
                          <br /> 38.134026
                        </td>
                        <td>1217</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Новоуглическое шоссе, д.&nbsp;52&nbsp;а </td>
                        <td>
                          56.331358,
                          <br /> 38.133113
                        </td>
                        <td>1218</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Новоугличское&nbsp;ш., д.&nbsp;34</td>
                        <td>
                          56.322220,
                          <br /> 38.137247
                        </td>
                        <td>1219</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Новоугличское&nbsp;ш.&nbsp;д.&nbsp;7</td>
                        <td>
                          56.321311, <br />
                          38.135112
                        </td>
                        <td>1220</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Красной армии, д. 48а</td>
                        <td>
                          56.298042, <br />
                          38.131290
                        </td>
                        <td>1266</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Воробьевская, д.&nbsp;20</td>
                        <td>
                          56.298409, <br />
                          38.127207
                        </td>
                        <td>1267</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Зелёный переулок, д.&nbsp;13</td>
                        <td>
                          56.319543, <br />
                          38.133365
                        </td>
                        <td>1268</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Серпухов</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Ворошилова, д. 57/59</td>
                        <td>
                          54.917490,
                          <br />
                          37.421356
                        </td>
                        <td>1290</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Центральная, д.&nbsp;144</td>
                        <td>
                          54.913014,
                          <br />
                          37.444094
                        </td>
                        <td>1291</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Гвардейская, д. 48а</td>
                        <td>
                          54.913270,
                          <br />
                          37.440413
                        </td>
                        <td>1292</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Ворошилова, д.&nbsp;117</td>
                        <td>
                          54.919285,
                          <br />
                          37428163
                        </td>
                        <td>1295</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Советская.&nbsp;д.78а</td>
                        <td>
                          54.921802.
                          <br /> 37.429738
                        </td>
                        <td>1296</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Ворошилова, д.&nbsp;214 (ТЦ&nbsp;«Эльдорадо»)</td>
                        <td>
                          54.935817,
                          <br /> 37.449777
                        </td>
                        <td>1012</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Солнечногорск</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Колхозная, д. 32</td>
                        <td>
                          56.192242,
                          <br />
                          36.964282
                        </td>
                        <td>1115</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Ступино</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Чайковского, д. 14</td>
                        <td>
                          54.884115,
                          <br />
                          38.079680
                        </td>
                        <td>1175</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Фрязино</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. 60 лет СССР (СМ «Лента»)</td>
                        <td>
                          55,949135
                          <br />
                          38,060739
                        </td>
                        <td>1019</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>ул. Полевая, д. 15</td>
                        <td>
                          55.947624,
                          <br />
                          38.062113
                        </td>
                        <td>1109</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Химки</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>Подрезково, ул. Новозаводская д.&nbsp;12</td>
                        <td>
                          55.940662,
                          <br /> 37.347743
                        </td>
                        <td>1045</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Подрезково, ул. Новозаводская шк. №&nbsp;20</td>
                        <td>
                          55.941668,
                          <br /> 37.345477
                        </td>
                        <td>1046</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>Подрезково, ул. Советская, д.&nbsp;7</td>
                        <td>
                          55.948406,
                          <br /> 37.333429
                        </td>
                        <td>1047</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Сходня, ул. Первомайская, д.&nbsp;59</td>
                        <td>
                          55.962160,
                          <br /> 37.308538
                        </td>
                        <td>1048</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Сходня, ул. Первомайская, д.&nbsp;37&nbsp;к.&nbsp;2</td>
                        <td>
                          55.957251,
                          <br /> 37.305422
                        </td>
                        <td>1049</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Сходня, ул. Ленина, д.&nbsp;33</td>
                        <td>
                          55.953159,
                          <br /> 37.301821
                        </td>
                        <td>1050</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Сходня, Юбилейный пр-д, д.&nbsp;16</td>
                        <td>
                          55.941658,
                          <br />
                          37.301715
                        </td>
                        <td>1051</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Сходня, ул. Мичурина, д.&nbsp;17</td>
                        <td>
                          55.945883,
                          <br />
                          37.300343
                        </td>
                        <td>1052</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Сходня, 2-й Чапаевский пер., д. 6</td>
                        <td>
                          55.945899,
                          <br />
                          37.294093
                        </td>
                        <td>1053</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Подрезково, ул. Центральная, 10</td>
                        <td>
                          55.951803,
                          <br />
                          37.329536
                        </td>
                        <td>1054</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Левый берег, ул. Совхозная, д. 3</td>
                        <td>
                          55.895495,
                          <br /> 37.480695
                        </td>
                        <td>1055</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Левый берег, ул. Зеленая, д. 6 к. 1</td>
                        <td>
                          55.889232,
                          <br /> 37.482052
                        </td>
                        <td>1056</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Левый берег, ул. Зеленая, д. 21</td>
                        <td>
                          55.889171,
                          <br />
                          37.476503
                        </td>
                        <td>1057</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Панфилова, д.18</td>
                        <td>
                          55.878612,
                          <br />
                          37.424895
                        </td>
                        <td>1229</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Куркинское, ш. д.6</td>
                        <td>
                          55.884519,
                          <br />
                          37.423432
                        </td>
                        <td>1230</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Москвина, д.4</td>
                        <td>
                          55.905638,
                          <br />
                          37.453909
                        </td>
                        <td>1231</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Победы, д. 18/5</td>
                        <td>
                          55.899399,
                          <br />
                          37.453780
                        </td>
                        <td>1232</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Академика Глушко, д. 2</td>
                        <td>
                          55.903000,
                          <br />
                          37.451000
                        </td>
                        <td>1233</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Кирова, д. 2</td>
                        <td>
                          55.885981,
                          <br />
                          37.452157
                        </td>
                        <td>1234</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Новогорск, ул. Соколовская, д.3</td>
                        <td>
                          55.893139,
                          <br />
                          37.346231
                        </td>
                        <td>1243</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Молодежная, д. 1</td>
                        <td>
                          55.878196,
                          <br />
                          37.422449
                        </td>
                        <td>1245</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Дружбы, д. 7</td>
                        <td>
                          55.900417,
                          <br />
                          37.412963
                        </td>
                        <td>1246</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Маяковского, д. 3</td>
                        <td>
                          55.894660,
                          <br />
                          37.447210
                        </td>
                        <td>1253</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Новогорск, ул. Соколовская, д.1</td>
                        <td>
                          55.891552,
                          <br />
                          37.347658
                        </td>
                        <td>1254</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Мариии Рубцовой, д. 1-д.3</td>
                        <td>
                          55.908142,
                          <br />
                          37.403279
                        </td>
                        <td>1255</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Юбилейный пр-т., д. 66</td>
                        <td>
                          55.893253,
                          <br />
                          37.413295
                        </td>
                        <td>1256</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. 9 Мая, д. 3</td>
                        <td>
                          55.890913,
                          <br /> 37.426715
                        </td>
                        <td>1257</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Юбилейный пр., д. 49</td>
                        <td>
                          55.889593,
                          <br />
                          37.410015
                        </td>
                        <td>1258</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Московская, д. 32</td>
                        <td>
                          55.889130,
                          <br />
                          37.443759
                        </td>
                        <td>1259</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Московская, д. 3</td>
                        <td>
                          55.893047,
                          <br />
                          37.450238
                        </td>
                        <td>1260</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Горшина, д.1</td>
                        <td>
                          55.888248,
                          <br />
                          37.430823
                        </td>
                        <td>1261</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Левый берег, ул. Совхозная, д.27</td>
                        <td>
                          55.906041,
                          <br />
                          37.481518
                        </td>
                        <td>1269</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Аптечная, д. 5</td>
                        <td>
                          55.891120,
                          <br />
                          37.450058
                        </td>
                        <td>1316</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Пожарского, д. 15</td>
                        <td>
                          55.893504,
                          <br />
                          37.479146
                        </td>
                        <td>1317</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>мкр. Подрезково, ул. Центральная, д. 6 к. 2</td>
                        <td>
                          55.948881,
                          <br />
                          37.329857
                        </td>
                        <td>1318</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Чехов</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Московская, д. 81</td>
                        <td>
                          55.148177
                          <br />
                          37.459131
                        </td>
                        <td>1202</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Дружбы, д. 1а</td>
                        <td>
                          55.148619
                          <br />
                          37.465600.
                        </td>
                        <td>1203</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Земская, д. 13 </td>
                        <td>
                          55.169393,
                          <br />
                          37.465123
                        </td>
                        <td>1035</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Щелково</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Радужная, д. 21</td>
                        <td>
                          55.884619,
                          <br /> 37.931807
                        </td>
                        <td>1114</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>пл. Ленина, д. 1</td>
                        <td>
                          55.920749, <br /> 37.993221
                        </td>
                        <td>1140</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Пушкина, д. 26</td>
                        <td>
                          55.924059,
                          <br /> 37.977199
                        </td>
                        <td>1141</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОГК-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td> ул. Свирская, д. 2 А (МФЦ)</td>
                        <td>
                          55,914033
                          <br />
                          38,002378
                        </td>
                        <td>1022</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>Пролетарский проспект, д. 10 (ТЦ Щелково)</td>
                        <td>
                          55,924556
                          <br />
                          38,002031
                        </td>
                        <td>1031</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>Пролетарский проспект, д. 18 (ГМ «Глобус»)</td>
                        <td>
                          55,92989
                          <br />
                          38,003859
                        </td>
                        <td>1037</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Электрогорск</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Калинина, д. 15</td>
                        <td>
                          55.896228,
                          <br />
                          38.773455
                        </td>
                        <td>1139</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}>
            <div className="accordion-row__up">
              <span className="accordion-row__text">Городской округ Электросталь</span>
              <div className="accordion-row__wrap-arrow"></div>
            </div>
            <div className="accordion-row__drop-down">
              <div className="accordion-row__wrapper">
                <div className="wrap-table">
                  <table>
                    <tbody>
                      <tr>
                        <th>Адрес размещения ЭЗС</th>
                        <th>GPS-координаты места размещения ЭЗС</th>
                        <th>Порядковый номер ЭЗС</th>
                        <th>
                          Марка,
                          <br />
                          модель ЭЗС
                        </th>
                        <th>Мощность ЭЗС, кВт*ч</th>
                        <th>Тип разъема</th>
                        <th>Режим зарядки</th>
                      </tr>
                      <tr>
                        <td>ул. Жулябина д. 27</td>
                        <td>
                          55.796408,
                          <br />
                          38.432472
                        </td>
                        <td>1196</td>
                        <td>
                          ЛПАС.
                          <br />
                          565326.001ПС
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>массив 1, п. Случайный (ТЦ «Глобус»)</td>
                        <td>
                          55,759382
                          <br />
                          38,437411
                        </td>
                        <td>1018</td>
                        <td>ФОРА ЭЗС АС</td>
                        <td>22</td>
                        <td>
                          Schuko
                          <br />
                          /Type 2
                        </td>
                        <td>mode 2/3</td>
                      </tr>
                      <tr>
                        <td>проспект Ленина, д. 10 (ТРЦ «Эльград»)</td>
                        <td>
                          55,812456
                          <br />
                          38,431794
                        </td>
                        <td>1036</td>
                        <td>T Zone</td>
                        <td>22</td>
                        <td>Type 2</td>
                        <td>mode 3</td>
                      </tr>
                      <tr>
                        <td>ул. Комсомольская, д.&nbsp;6</td>
                        <td>
                          55.802193,
                          <br />
                          38.476838
                        </td>
                        <td>1112</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                      <tr>
                        <td>ул. Советская, д. 12а</td>
                        <td>
                          55.789754,
                          <br />
                          38.437886
                        </td>
                        <td>1113</td>
                        <td>
                          Сигма,
                          <br />
                          ЗС-ОС-Ш 3,5
                        </td>
                        <td>3,5</td>
                        <td>Schuko</td>
                        <td>mode 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <style>
style {display: none;}
.text-area .wrap-table table th {padding-left: 5px;padding-right: 5px;}
.text-area .wrap-table table {text-align: center;}
.text-area .wrap-table table td:first-child {text-align: left;}
</style> */}
          <p>
            <b>Технические характеристики электрических зарядных станций АО «Мособлэнерго»</b>
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
          <p>Типы разъемов</p>
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
            <p style={{textAlign: "center"}}>
              <img alt="быстрый способ зарядить автомобиль" src={`${addressServer}/uploads/24b2a02a593a04f610f047315a9c21f0_2c1a9efef7.jpg?updated_at=2022-11-14T11:45:15.654Z`} title="Слайд1.jpg" />
            </p>
            <br />
            <p style={{textAlign: "center"}}>
              <img alt="Слайд2.jpg" src={`${addressServer}/uploads/19f4e43cea4481f249a24b800d1a26e0_3bf048a6fd.jpg?updated_at=2022-11-14T11:45:15.850Z`} title="все зарядные станции в 1м мобильном приложении" />
            </p>
            <p style={{textAlign: "center"}}>
              <img alt="Слайд3.jpg" src={`${addressServer}/uploads/c94cc6038b67b985adb59129a8631db8_763a5b28b0.jpg?updated_at=2022-11-14T11:45:15.997Z`} title="зарядка автомобиля никогда не была настолько проста" />
            </p>
            <p style={{textAlign: "center"}}>
              <img alt="Слайд4.jpg" src={`${addressServer}/uploads/69c9c3ec0e6808dd52146384d46cdfcc_4654ba688f.jpg?updated_at=2022-11-14T11:45:16.231Z`} title="скачайте приложение" />
            </p>
            <p style={{textAlign: "center"}}>
              <img alt="Слайд5.jpg" src={`${addressServer}/uploads/e68cda5586ea121590e69913d5104dd0_5a31bd835b.jpg?updated_at=2022-11-14T11:45:14.678Z`} title="постройте маршрут до зарядной станции" />
            </p>
            <p style={{textAlign: "center"}}>
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
            <p style={{textAlign: "center"}}>
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
              <p style={{textAlign: "center"}}>
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
              <p style={{textAlign: "center"}}>
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
