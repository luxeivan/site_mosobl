import React, { useEffect, useState } from "react";
import qs from "qs";
import { DateTime } from "luxon";
import axios from "axios";
import DatePicker from "react-date-picker";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";

export default function Disconnect() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [listDisconnect, setListDisconnect] = useState();
  const [currentOpenRow, setCurrentOpenRow] = useState();

  //   http://localhost:1337/api/otklyuchenies?
  //   populate[uzel_podklyucheniya][populate][0]=uliczas
  //   &populate[uzel_podklyucheniya][populate][1]=gorod
  //   &filters[$and][0][begin][$gte]=2022-12-01T08:00:00.000Z&filters[$and][1][end][$lte]=2022-12-02T00:00:00.000Z
  const query = qs.stringify(
    {
      // fields: ['title', 'slug'],
      populate: {
        uzel_podklyucheniya: { populate: { uliczas: true, gorod: true } },
      },
      filters: {
        $or: [
          {
            $and: [
              {
                begin: {
                  $gte: DateTime.fromMillis(parseInt(currentDate.getTime())).startOf("day").ts, //больше
                },
              },
              {
                begin: {
                  $lte: DateTime.fromMillis(parseInt(currentDate.getTime())).endOf("day").ts, //меньше
                },
              },
            ],
          },
          {
            $and: [
              {
                end: {
                  $gte: DateTime.fromMillis(parseInt(currentDate.getTime())).startOf("day").ts, //больше
                },
              },
              {
                end: {
                  $lte: DateTime.fromMillis(parseInt(currentDate.getTime())).endOf("day").ts, //меньше
                },
              },
            ],
          },
        ],
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  useEffect(() => {
    // console.log(query);
    axios
      .get("https://nopowersupply.mosoblenergo.ru/back/api/otklyuchenies?" + query + "&pagination[pageSize]=100000")
      .then((responce) => {
        console.log(responce.data.data);
        const newarray = responce.data.data.reduce((objectsByKeyValue, obj) => {
          const value = obj.attributes.uzel_podklyucheniya.data.attributes.gorod.data.attributes.name;
          objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
          return objectsByKeyValue;
        }, {});
        // const groupArr = responce.data.data.group(item=>item.attributes.uzel_podklyucheniya.data.attributes.gorod.data.attributes.name)
        setListDisconnect(newarray);
        //console.log(newarray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentDate]);
  useEffect(() => {
    console.log(currentOpenRow);
  }, [currentOpenRow]);
  // console.log(listDisconnect);
  return (
    <div className="disconnect">
      <span style={{ fontWeight: 700 }}>Дата отключений: </span>
      <DatePicker onChange={setCurrentDate} value={currentDate} showLeadingZeros={true} clearIcon={null} />

      <div className="disconnect__area">
        {listDisconnect && Object.keys(listDisconnect).length !== 0 && (
          <ul className="disconnect__list">
            {Object.entries(listDisconnect).map((item, index) => {
              // console.log(item);

              return (
                <div key={index} className="accordion-row">
                  <div
                    className="accordion-row__up"
                    onClick={(event) => {
                      document.querySelectorAll(".accordion-row");
                      event.currentTarget.closest(".accordion-row").classList.toggle("open-accordion");
                      event.currentTarget.classList.toggle("active");
                      const drop = event.currentTarget.closest(".accordion-row").querySelector(".accordion-row__drop-down");
                      if (drop.style.maxHeight == "") {
                        drop.style.maxHeight = `${drop.scrollHeight + 1200}px`;
                      } else {
                        drop.style.maxHeight = "";
                      }
                    }}
                  >
                    <span className="accordion-row__text city">{item[0]}</span>
                  </div>
                  <div className="accordion-row__drop-down">
                    <div className="accordion-row__wrapper1">
                      <div className="text-area1 disconnect__for-desktop">
                        <ul className="street__list">
                          <li className="street__item street-row">
                            <div className="street-table__th">Улицы</div>
                            <div className="street-table__th">Комментарий</div>
                            <div className="street-table__th">Начало</div>
                            <div className="street-table__th">Окончание</div>
                          </li>
                          {item[1].map((item, index) => {
                            const begin = DateTime.fromISO(item.attributes.begin).toLocal().c;
                            const end = DateTime.fromISO(item.attributes.end).toLocal().c;
                            // console.log(item);
                            return (
                              <li key={index} className="street__item street-row">
                                <div className="street-table__td street-table">
                                  <ul>
                                    {item.attributes.uzel_podklyucheniya.data.attributes.uliczas.data.map((item, index) => (
                                      <li className="street-table__item" type="none" style={{ listStyle: "none" }} key={index}>
                                        <b>{item.attributes.name}</b> - {item.attributes.comment}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="street-table__td">{item.attributes.comment}</div>
                                <div className="street-table__td">
                                  {begin.day < 10 ? "0" + begin.day : begin.day}.{begin.month < 10 ? "0" + begin.month : begin.month}.{begin.year} {begin.hour < 10 ? "0" + begin.hour : begin.hour}:
                                  {begin.minute < 10 ? "0" + begin.minute : begin.minute}
                                </div>
                                <div className="street-table__td">
                                  {end.day < 10 ? "0" + end.day : end.day}.{end.month < 10 ? "0" + end.month : end.month}.{end.year} {end.hour < 10 ? "0" + end.hour : end.hour}:{end.minute < 10 ? "0" + end.minute : end.minute}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div className="text-area1 disconnect__for-mobile">
                        <ul className="street__list">
                          <li className="street__item street-row">
                            <div className="street-table__th">Улицы</div>
                            <div className="street-table__th">Комментарий</div>
                            <div className="street-table__th">Время</div>
                          </li>
                          {item[1].map((item, index) => {
                            const begin = DateTime.fromISO(item.attributes.begin).toLocal().c;
                            const end = DateTime.fromISO(item.attributes.end).toLocal().c;
                            // console.log(item);
                            return (
                              <li key={index} className="street__item street-row">
                                <div className="street-table__td street-table">
                                  <ul>
                                    {item.attributes.uzel_podklyucheniya.data.attributes.uliczas.data.map((item, index) => (
                                      <li className="street-table__item" type="none" style={{ listStyle: "none" }} key={index}>
                                        <b>{item.attributes.name}</b> - {item.attributes.comment}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="street-table__td">{item.attributes.comment}</div>
                                <div className="street-table__td">
                                  <b>Начало:</b><br/>
                                  {begin.day < 10 ? "0" + begin.day : begin.day}.{begin.month < 10 ? "0" + begin.month : begin.month}.{begin.year} {begin.hour < 10 ? "0" + begin.hour : begin.hour}:
                                  {begin.minute < 10 ? "0" + begin.minute : begin.minute}
                                  <br/>
                                  <b>Окончание:</b>
                                  <br/>
                                  {end.day < 10 ? "0" + end.day : end.day}.{end.month < 10 ? "0" + end.month : end.month}.{end.year} {end.hour < 10 ? "0" + end.hour : end.hour}:{end.minute < 10 ? "0" + end.minute : end.minute}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>




                      <div className="open-map">
                        <button
                          type="button"
                          className="open-map__button"
                          onClick={(event) => {
                            if (currentOpenRow === index) {
                              setCurrentOpenRow();
                            } else {
                              setCurrentOpenRow(index);
                            }
                          }}
                        >
                          {currentOpenRow === index?"Скрыть карту":"Показать на карте"}
                          
                        </button>
                      </div>
                      {currentOpenRow === index && (
                        <>
                          <YMaps>
                            <Map
                              state={{
                                center: [item[1][0].attributes.uzel_podklyucheniya.data.attributes.gorod.data.attributes.fias.data.geo_lat, item[1][0].attributes.uzel_podklyucheniya.data.attributes.gorod.data.attributes.fias.data.geo_lon],
                                zoom: 10,
                                behaviors: ["disable('scrollZoom')", "drag"],
                              }}
                              className="yandex-map"
                              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                            >
                              <ZoomControl />
                              {item[1].map((item, index) => {
                                return item.attributes.uzel_podklyucheniya.data.attributes.uliczas.data.map((item, index) => {
                                  return (
                                    <Placemark
                                      key={index}
                                      geometry={{
                                        type: "Point",
                                        coordinates: [item.attributes.fias.data.geo_lat, item.attributes.fias.data.geo_lon],
                                      }}
                                      properties={{
                                        //       balloonContent: `<div className="ballon-down">${item.attributes.fias.value}<br>
                                        //     Подробнее
                                        // </div>`,
                                        iconContent: "X",
                                        //hintContent: "Ну давай уже тащи",
                                        hintContent: item.attributes.fias.value,
                                      }}
                                      options={{
                                        preset: "islands#redDotIcon",
                                        // preset: "islands#icon",
                                        // preset: "islands#greenDotIconWithCaption",
                                        // iconLayout: "default#image",
                                        // iconColor: "red",

                                        //iconImageHref: noPlug,
                                      }}
                                    />
                                  );
                                });
                              })}
                            </Map>
                          </YMaps>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        )}
        {listDisconnect && Object.keys(listDisconnect).length === 0 && <h2>Отключений на эту дату нет</h2>}
      </div>
    </div>
  );
}
