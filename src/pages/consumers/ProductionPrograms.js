import React, { useEffect, useState } from 'react'
import { YMaps, Map, Placemark, ZoomControl  } from "react-yandex-maps";
// import checkIcon from "../img/check-icon.svg";
import { motion } from 'framer-motion'
import TopImage from "../../components/TopImage";
import img37550ba6c53ac1236dc634e6c4f22cc1 from "../../img/37550ba6c53ac1236dc634e6c4f22cc1.jpg";
import { addressServer } from "../../config";

export default function ProductionPrograms() {

    const [productionPrograms, setProductionPrograms] = useState([]);
    

    useEffect(() => {
        fetch(`${addressServer}/api/proizvodstvennye-programmies?populate=*&pagination[pageSize]=100`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data)
                setProductionPrograms(data.data.sort((a, b) => {
                    if (a.attributes.name < b.attributes.name) {return -1;}
                    if (a.attributes.name > b.attributes.name) {return 1;}
                    return 0;
                }))
            })
            .catch((err) => {
                console.log(err);
                setProductionPrograms([]);
            });
    }, []);
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <TopImage image={img37550ba6c53ac1236dc634e6c4f22cc1} title={'Производственные программы на 2023 год'} />
            <div className="page-grid__content" id="content">
                <div className="text-area">
                    {/* <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <div>
                            <h3>Подольск</h3>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa13a1fac06f00e2586c3bfab4095c702036a015b55b3777f39ac19d158dd6927&amp;source=constructor" width="800" height="600" frameBorder="0"></iframe>
                        </div>
                        <div>
                            <h3>Красногорск</h3>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aba566851628bd46cba2e35d6bfbe5302343ab8ae6898f06bee49eae2e714d846&amp;source=constructor" width="800" height="600" frameBorder="0"></iframe>
                        </div>
                    </div> */}
                  
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
                            {productionPrograms.map((item, index) => {
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
                                            <p style="color: #000; margin-bottom: 5px">Производственная программа ${item.attributes.name}</p>
                                            <a href="${addressServer}${item.attributes.file.data[0].attributes.url}" target="_blank"> Скачать </a>
                                            </div>`,
                                            //iconContent: "X",
                                            //hintContent: "Ну давай уже тащи",
                                            //balloonContent: 'А эта — новогодняя',
                                            iconContent: `${item.attributes.name}`,
                                            hintContent: `${item.attributes.name}`,
                                        }}
                                        options={{
                                            //iconLayout: 'default#image',
                                            // Своё изображение иконки метки.
                                            //iconImageHref:                                                
                                            // Размеры метки.
                                            //iconImageSize,
                                            // Смещение левого верхнего угла иконки относительно
                                            // её "ножки" (точки привязки).
                                            //iconImageOffset: [-5, -38],
                                            preset: "islands#orangeStretchyIcon",
                                            // preset: "islands#icon",
                                            // preset: "islands#greenDotIconWithCaption",
                                            //iconLayout: "islands#orangeStretchyIcon",
                                             //iconColor: "red",
                                            //iconImageHref: noPlug,
                                        }}
                                    />
                                );
                            })}
                        </Map>
                    </YMaps>
                    <ul style={{
                        marginTop: "20px",
                        // display: 'flex', 
                        // flexWrap: 'wrap',
                        columnWidth: "300px"
                        }}>
                        {productionPrograms.map((item, index) =>
                            <li style={{ 
                                // width: '20%'
                                 }} key={index}>
                                <a href={`${addressServer}${item.attributes.file.data[0].attributes.url}`} target="_blank">{item.attributes.name}</a>
                            </li>
                        )}
                        {/* <h3>г.о. Подольск</h3>
                            <img src={`${addressServer}/uploads/Podolsk2023_85c78757bd.jpeg?updated_at=2023-03-01T13:36:17.436Z`} alt='Подольск карта' />
                            <br />
                            <a href={`${addressServer}/uploads/Podolsk2023_85c78757bd.jpeg?updated_at=2023-03-01T13:36:17.436Z`} download={'maps.jpeg'} target="_blank">Скачать</a> */}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}
