import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { addressServer } from "../config";
const mapState = { center: [55.76, 37.64], zoom: 8, behaviors: ["disable('scrollZoom')"] };
export default function Filial() {
  const [filial, setFilial] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`${addressServer}/api/filialies/${params.id}?populate[0]=proizvodstvennye_otdeleniyas&populate[1]=kontakties&populate[2]=proizvodstvennye_otdeleniyas.kontakties`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setFilial(data.data))
      .catch((err) => {
        console.log(err);
        setFilial({});
      });
  }, []);
  console.log(filial);
  return (
    <div>
        <div>
        <Link to="/filials" className="button__back">
          Назад
        </Link>
      </div>
      <YMaps className="YMaps">
        <Map state={mapState} className="yandex-map" modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}>
          <ZoomControl />
          {filial.attributes&&filial.attributes.proizvodstvennye_otdeleniyas.data.map((item, index) => (
            <Placemark
              key={index}
              geometry={{
                type: "Point",
                coordinates: [item.attributes.latitude, item.attributes.longitude],
              }}
              properties={{
                balloonContent: `<div class="ballon-down">${item.attributes.name}</div>`,
                hintContent: item.attributes.address,
              }}
              options={{
                preset: "islands#greenDotIconWithCaption",
              }}
            />
          ))}
        </Map>
      </YMaps>
    </div>
  );
}
