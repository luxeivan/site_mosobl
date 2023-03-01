import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


export default function ElectricChargingStations() {
    const [listStation, setListStation] = useState([])
    function getStation(page = 1) {
        axios.get(`http://localhost:1337/api/gorodskoj-okrugs?populate=*&pagination[page]=${page}&pagination[pageSize]=100`).then(res => {
            setListStation(listStation.concat(res.data.data))


            console.log(res.data)
            if (res.data.meta.pagination.pageCount !== res.data.meta.pagination.page) {
                getStation(res.data.meta.pagination.page + 1)
            }
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        getStation();
    }, [])
    return (
        <>
            {listStation.map((item, index) =>



                <div className="accordion-row"
                    key={index}
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
                        <span className="accordion-row__text">Городской округ {item.attributes.city}</span>
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
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}
