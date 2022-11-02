import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { addressServer } from "../config";
import { motion } from "framer-motion";
import TopImage from "../components/TopImage";
import loading from "../img/loading.png";
const mapState = { center: [55.76, 37.64], zoom: 8, behaviors: ["disable('scrollZoom')"] };
// const filials = [
//   { name: "Сергиев Посад", coordinates: [56.284814, 38.124429],location: "Московская область, г. Сергиев Посад, Московское шоссе, д. 40" },
//   { name: "Щелково", coordinates: [55.912773, 37.996608],location: "Московская область, г. Щелково, ул. Советская, д. 23" },
//   { name: "Мытищи", coordinates: [55.939716, 37.766783],location: "Московская область, г. Мытищи, ул. Угольная, д. 1" },
//   { name: "Павловский Посад", coordinates: [55.773687, 38.712879],location: "Московская область, г. Павловский Посад, Интернациональный переулок, д. 26" },
//   { name: "Раменское", coordinates: [55.572533, 38.219605],location: "Московская область, г. Раменское, ул. Махова, д. 6" },
//   { name: "Красногорск", coordinates: [55.819317, 37.350566],location: "Московская область, г. Красногорск, Коммунальный квартал, д. 1" },
//   { name: "Одинцово", coordinates: [55.671605, 37.290792],location: "143006, Московская область, г. Одинцово, ул. Союзная, д. 9" },
//   { name: "Краснознаменск", coordinates: [55.596401, 37.040405],location: "143090, Московская область, г.о.Краснознаменск, ул. Краснознамённая, 14а" },
//   { name: "Домодедово", coordinates: [55.444584, 37.751287],location: "142001, Московская область, г. Домодедово, мкр. Северный, ул. Дачная, д.2" },
//   { name: "Коломна", coordinates: [55.095735, 38.772249],location: "140407, Московская область, г. Коломна, ул. Красногвардейская, д. 36" },
// ];

export default function Filials() {
  const [filials, setFilials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${addressServer}/api/filialies?populate=proizvodstvennye_otdeleniyas`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setFilials(data.data);
      })
      .catch((err) => {
        console.log(err);
        setFilials([]);
      });
  }, []);
  
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        <TopImage title={"Информация о компании"} />
        <div className="page-grid__content" id="content">
          <h1 className="inner-post__title">Филиалы</h1>
          <div class="branches">
            {isLoading?<div className="isLoading"><img className="isLoading__img" src={loading}/></div>:
            <div class="branches__grid">
              {filials &&
                filials.map((item) => (
                  <Link className="post-branches" to={`/filials/${item.id}`}>
                    <div className="post-branches__up">
                      <span className="post-branches__title">{item.attributes.name}</span>
                      
                    </div>
                    <div className="post-branches__down">
                      <ul class="post-branches__list">
                        {item.attributes.proizvodstvennye_otdeleniyas.data.map((item) => (
                          <li className="post-branches__item">
                            <svg className="post-branches__icon" stroke="#e37021" viewBox="0 0 20 20">
                              <path fill="none" xmlns="http://www.w3.org/2000/svg" d="M6.40039 10.0004L9.10039 12.7004L13.6004 6.40039" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                              <path
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                                stroke-width="2"
                                stroke-miterlimit="10"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <span className="post-branches__text">{item.attributes.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                ))}
            </div>}
          </div>
        </div>
        <YMaps>
          <Map state={mapState} className="yandex-map" modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}>
            <ZoomControl />
            {filials.map((item, index) => (
              <Placemark
                key={index}
                geometry={{
                  type: "Point",
                  coordinates: [item.attributes.latitude, item.attributes.longitude],
                }}
                properties={{
                  balloonContent: `<div class="ballon-down">${item.attributes.name}<br>
                  <a href="/filials/${item.id}" class="yandex-map__button">
                    Подробнее
                  </a>
                </div>`,
                  hintContent: item.attributes.address,
                }}
                options={{
                  preset: "islands#greenDotIconWithCaption",
                  iconLayout: "default#image",
                  iconImageHref: `${addressServer}/uploads/Point1_0971a3cd12.svg?updated_at=2022-10-26T13:39:22.952Z`,
                }}
              />
            ))}
          </Map>
        </YMaps>
      </motion.div>
    );
  
}
