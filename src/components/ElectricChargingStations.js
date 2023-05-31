import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { chargingAddressServer } from '../config';
import chargingIco from '../img/Chargingico.png'
import chargingIco22 from '../img/Chargingico22.png'
import chargingIco_dis from '../img/Chargingico_dis.png'
import qrPlaymarket from '../img/qr_plugme_playmarket.svg'
import qrAppstore from '../img/qr_plugme_appstore.svg'
import Playmarket from '../img/playmarket.png'
import Appstore from '../img/appstore.png'
import plugme from '../img/plugme.webp'

import { utils, writeFileXLSX } from 'xlsx'

const iconImageSize = [130 / 4, 221 / 4]


export default function ElectricChargingStations() {
    const [loadingAllStation, setLoadingAllStation] = useState(false)
    const [listStation, setListStation] = useState([])
    const [listAllStation, setAllListStation] = useState([])
    const [currentOpenRow, setCurrentOpenRow] = useState();
    const [copy, setCopy] = useState([]);
    function getStation(page = 1) {
        axios.get(`${chargingAddressServer}/api/gorodskoj-okrugs?populate=*&pagination[page]=${page}&pagination[pageSize]=100`).then(res => {
            setListStation(prev => prev.concat(res.data.data))
            setCopy(prev => prev.concat(res.data.data))
            // console.log(res.data)
            if (res.data.meta.pagination.pageCount !== res.data.meta.pagination.page) {
                getStation(res.data.meta.pagination.page + 1)
            }
        }).catch(err => {
            console.log(err);
        })
    }
    // let tempAllStation = []
    function getAllStation(page = 1) {
        axios.get(`${chargingAddressServer}/api/ezses?populate=*&pagination[page]=${page}&pagination[pageSize]=100`).then(res => {
            setAllListStation(prev => prev.concat(res.data.data))
            // tempAllStation.concat(res.data.data)
            // console.log(res.data)
            if (res.data.meta.pagination.pageCount !== res.data.meta.pagination.page) {
                getAllStation(res.data.meta.pagination.page + 1)
            }
            // else {
            //     setAllListStation(tempAllStation)
            // }
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        getAllStation();
        getStation();
    }, [])
    useEffect(() => {
        console.log(listAllStation)
    }, [listAllStation])



    const handlerSearch = (event) => {
        let copyObj = JSON.parse(JSON.stringify(copy));
        if (copyObj) {
            copyObj = copyObj.filter((element, index) => element.attributes.city.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setListStation(copyObj);
        }
    };


    const handlerClear = (event) => {
        document.querySelector(".informationDisclosures_search").value = "";
        document.querySelector(".informationDisclosures_search").click();
    };

    const getXlsxFile = () => {
        setLoadingAllStation(true)
        const arrayStation = listAllStation.map(item => {
            return {
                "Адрес": item.attributes.address,
                "Режим зарядки": item.attributes.charging_mode,
                "Тип разьема": item.attributes.connector_type,
                "Статус": item.attributes.disabled ? 'Временно отключена' : 'Работает',
                "Широта": item.attributes.latitude,
                "Долгота": item.attributes.longitude,
                "Метод установки": item.attributes.method_of_installation,
                "Мобильное приложение": item.attributes.mobile_applications,
                "Кол-во разьемов": item.attributes.number_of_connectors,
                "Режим работы": item.attributes.operating_mode,
                "Мощность": item.attributes.power,
                "Тех. поддержка": item.attributes.support_phone_number
            }
        })
        const wb = utils.book_new();
        const ws = utils.json_to_sheet(arrayStation);
        ws["!cols"] = [{ wch: 50 }];
        utils.book_append_sheet(wb, ws, "Таблица1");
        writeFileXLSX(wb, "ЭЗС Мособлэнерго.xlsx");
        setLoadingAllStation(false)

    }

    return (
        <>
            {/* <h2>Карта электрических зарядных станций</h2> */}

            <div className='qr-plugme-comp'>
                <div className='qr-plugme-comp__text-area'>
                    <div className='qr-plugme-comp__title-area'>
                        <img src={plugme} />
                        <h3 style={{ textTransform: 'inherit' }}>PlugMe - зарядные станции</h3>
                    </div>
                    <p>Мобильное приложение для управление ЭЗС АО «Мособлэнерго»</p>

                    <p>
                        Круглосуточная техническая поддержка: <a href="tel:+78002509779" className='qr-plugme-comp__tel'>+7 (800) 250-97-79</a>
                    </p>
                </div>
                <div className='qr-plugme-comp__qr-area'>
                    <div className='qr-plugme-comp__qr' >
                        <a type="button" className="qr-plugme-comp__link" href='https://play.google.com/store/apps/details?id=com.plugme' target='_blank'><img src={Playmarket} alt='Playmarket' /></a>
                        <img src={qrPlaymarket} alt='qr' className='qr-plugme-comp__img' />
                    </div>
                    <div className='qr-plugme-comp__qr' >
                        <a type="button" className="qr-plugme-comp__link" href='https://apps.apple.com/ru/app/plugme-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D0%B8/id1541521419' target='_blank'><img src={Appstore} alt='Appstore' /></a>
                        <img src={qrAppstore} alt='qr' className='qr-plugme-comp__img' />
                    </div>

                </div>

            </div>

            {listAllStation.length > 0 ?
                <>
                    <div style={{ display: "flex", marginBottom: "-15px" }}>
                        <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                            <img style={{ width: `25px` }} src={chargingIco} />
                            <h4 style={{ marginBottom: "0" }}>- 3,5 кВт/ч;</h4>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                            <img style={{ width: `25px` }} src={chargingIco22} />
                            <h4 style={{ marginBottom: "0" }}>- 22 кВт/ч;</h4>
                        </div>
                    </div>
                    <YMaps>
                        <Map
                            state={{
                                center: [55.754475, 37.621869],
                                zoom: 8,
                                behaviors: ["scrollZoom", "drag"],
                            }}
                            className="yandex-map"
                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                        >
                            <ZoomControl />
                            {listAllStation.map((item, index) => {
                                return (
                                    <Placemark
                                        // onClick={(event) => {
                                        //     event.preventDefault()
                                        //     console.log(item.attributes.address)
                                        // }}
                                        key={index}
                                        geometry={{
                                            type: "Point",
                                            coordinates: [item.attributes.latitude, item.attributes.longitude],
                                        }}
                                        properties={{
                                            balloonContent: `<div className="ballon-down">
                                                            <b>Адрес:</b> ${item.attributes.address}<br>
                                                            <b>Мощность:</b> ${item.attributes.power} кВт/ч<br>
                                                            <b>Тип разьема:</b> ${item.attributes.connector_type}<br>
                                                            <b>Режим зарядки:</b> ${item.attributes.charging_mode}<br>
                                                            <b>Способ монтажа:</b> ${item.attributes.method_of_installation}<br>
                                                            <b>Мобильное приложение:</b> ${item.attributes.mobile_applications}<br>
                                                            <b>Тех. поддержка:</b> ${item.attributes.support_phone_number}<br>
                                                            <b>Режим работы:</b> ${item.attributes.operating_mode}<br>
                                                            ${item.attributes.disabled ? "<h4 style='color: red; margin-bottom: 0'>ВРЕМЕННО НЕДОСТУПНА</h4>" : ""}
                                                            </div>`,
                                            //iconContent: "X",
                                            //hintContent: "Ну давай уже тащи",
                                            //balloonContent: 'А эта — новогодняя',
                                            iconContent: '12',
                                            hintContent: `${item.attributes.address}`,
                                        }}
                                        options={{
                                            iconLayout: 'default#image',
                                            // Своё изображение иконки метки.
                                            iconImageHref:
                                                item.attributes.power == 22 ?
                                                    item.attributes.disabled ? chargingIco_dis : chargingIco22 :
                                                    item.attributes.disabled ? chargingIco_dis : chargingIco,
                                            // Размеры метки.
                                            iconImageSize,
                                            // Смещение левого верхнего угла иконки относительно
                                            // её "ножки" (точки привязки).
                                            //iconImageOffset: [-5, -38],
                                            //preset: "islands#orangeAutoIcon",
                                            // preset: "islands#icon",
                                            // preset: "islands#greenDotIconWithCaption",
                                            // iconLayout: "default#image",
                                            // iconColor: "red",
                                            //iconImageHref: noPlug,
                                        }}
                                    />
                                );
                            })}
                        </Map>
                    </YMaps>
                </>
                : false}
            <input type="text" className="informationDisclosures_search" placeholder="Поиск по городу" onChange={handlerSearch} onClick={handlerSearch} />
            <button className="button__clear" onClick={handlerClear}>
                Очистить
            </button>

            {listStation.map((item, index) => {
                if (item.attributes.ezs.data.length === 0) return null

                return <div className="accordion-row" key={index}>
                    <div className="accordion-row__up"
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
                        }}>
                        <span className="accordion-row__text">{item.attributes.city}</span>
                        <div className="accordion-row__wrap-arrow"></div>
                    </div>
                    <div className="accordion-row__drop-down" >
                        <div className="accordion-row__wrapper">
                            <div className="wrap-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Адрес</th>
                                            <th>GPS-координаты</th>
                                            <th>Мощность (кВт*ч)</th>
                                            <th>Тип разъема</th>
                                            <th>Режим зарядки</th>
                                            <th>Способ монтажа</th>
                                            <th>Количество коннекторов</th>
                                            {/* <th>Мобильное приложения для управления ЭЗС</th>
                                            <th>Телефон технической поддержки</th>
                                            <th>Режим работы технической поддержки «PlugMe»</th> */}
                                        </tr>
                                        {item.attributes.ezs.data.map((item, index) =>
                                            <tr key={index}>
                                                <td>{item.attributes.address}</td>
                                                <td>{item.attributes.latitude} {item.attributes.longitude}</td>
                                                <td>{item.attributes.power}</td>
                                                <td>{item.attributes.connector_type}</td>
                                                <td>{item.attributes.charging_mode}</td>
                                                <td>{item.attributes.method_of_installation}</td>
                                                <td>{item.attributes.number_of_connectors}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="open-map">
                                <button
                                    type="button"
                                    className="open-map__button charging-open-map__button"
                                    onClick={(event) => {
                                        if (currentOpenRow === index) {
                                            setCurrentOpenRow();
                                        } else {
                                            setCurrentOpenRow(index);
                                        }
                                    }}
                                >
                                    {currentOpenRow === index ? "Скрыть карту" : "Показать на карте"}

                                </button>
                            </div>
                            {currentOpenRow === index && (
                                <>
                                    <YMaps>
                                        <Map
                                            state={{
                                                center: [item.attributes.ezs.data[0].attributes.latitude, item.attributes.ezs.data[0].attributes.longitude],
                                                zoom: 11,
                                                behaviors: ["disable('scrollZoom')", "drag"],
                                            }}
                                            className="yandex-map"
                                            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
                                        >
                                            <ZoomControl />
                                            {item.attributes.ezs.data.map((item, index) => {
                                                return (
                                                    <Placemark
                                                        key={index}
                                                        geometry={{
                                                            type: "Point",
                                                            coordinates: [item.attributes.latitude, item.attributes.longitude],
                                                        }}
                                                        properties={{
                                                            balloonContent: `<div className="ballon-down">
                                                            <b>Адрес:</b> ${item.attributes.address}<br>
                                                            <b>Мощность:</b> ${item.attributes.power} кВт/ч<br>
                                                            <b>Тип разьема:</b> ${item.attributes.connector_type}<br>
                                                            <b>Режим зарядки:</b> ${item.attributes.charging_mode}<br>
                                                            <b>Мобильное приложение:</b> ${item.attributes.mobile_applications}<br>
                                                            <b>Тех. поддержка:</b> ${item.attributes.support_phone_number}<br>
                                                            <b>Режим работы:</b> ${item.attributes.operating_mode}<br>
                                                            </div>`,
                                                            //iconContent: "X",
                                                            //hintContent: "Ну давай уже тащи",
                                                            //balloonContent: 'А эта — новогодняя',
                                                            iconContent: '12',
                                                            hintContent: `${item.attributes.address}`,
                                                        }}
                                                        options={{
                                                            iconLayout: 'default#image',
                                                            // Своё изображение иконки метки.
                                                            iconImageHref: chargingIco,
                                                            // Размеры метки.
                                                            iconImageSize,
                                                            // Смещение левого верхнего угла иконки относительно
                                                            // её "ножки" (точки привязки).
                                                            //iconImageOffset: [-5, -38],
                                                            //preset: "islands#orangeAutoIcon",
                                                            // preset: "islands#icon",
                                                            // preset: "islands#greenDotIconWithCaption",
                                                            // iconLayout: "default#image",
                                                            // iconColor: "red",
                                                            //iconImageHref: noPlug,
                                                        }}
                                                    />
                                                );
                                            })}
                                        </Map>
                                    </YMaps>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            })
            }
            <button className="planned-notification__link" onClick={getXlsxFile} disabled={loadingAllStation} style={{ display: 'block', width: '300px', margin: '30px auto' }}>{!loadingAllStation ? 'Скачать полный список ЭЗС' : 'Загрузка...'}</button>
        </>
    )
}
