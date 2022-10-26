import React from "react";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
const mapState = { center: [55.76, 37.64], zoom: 8, behaviors: ["disable('scrollZoom')"] };
const filials = [
  { name: "Сергиев Пасад", coordinates: [56.284814, 38.124429] },
  { name: "Щелково", coordinates: [55.912773, 37.996608] },
  { name: "Мытищи", coordinates: [55.939716, 37.766783] },
];
const getPointData = (index) => {
  return {
    balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
    clusterCaption: "placemark <strong>" + index + "</strong>",
  };
};
export default function Filials() {
  return (
    <div>
      <h1>Филиалы</h1>
      <YMaps>
        <Map state={mapState} className="yandex-map" modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}>
          <ZoomControl />
          {filials.map((item, index) => (
            <Placemark
              key={index}
              geometry={{
                type: "Point",
                coordinates: [item.coordinates[0], item.coordinates[1]],
              }}
              properties={{ balloonContent: `<div id="driver-2" class="ballon-down">${item.name}</div>`,  hintContent: item.name }}
              options={{
                // The placemark's icon will stretch to fit its contents.
                preset: "islands#greenDotIconWithCaption",
                // The placemark can be moved.
                //draggable: true,
              }}
              // geometry={{
              //   coordinates: [55.751574, 37.573856],
              // }}
              // properties={{
              //   hintContent: "Собственный значок метки",
              //   balloonContent: "Это красивая метка",
              // }}
              // options={{
              //   iconLayout: "default#image",
              //   iconImageSize: [30, 42],
              //   iconImageOffset: [-3, -42],
              // }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}
