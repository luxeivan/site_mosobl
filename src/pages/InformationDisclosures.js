import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addressServer } from "../config";

export default function InformationDisclosures() {
  const [informationDisclosures, setInformationDisclosures] = useState([]);

  useEffect(() => {
    fetch(`${addressServer}/api/information-disclosures?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setInformationDisclosures(data.data))
      .catch((err) => {
        console.log(err);
        setInformationDisclosures([]);
      });
  }, []);

  return (
    <div className="page-content">
      <h1>Раскрытие информации</h1>

      <ul>
        {informationDisclosures &&
          informationDisclosures.map((item,index) => (
            <li key={index} className="informationDisclosures__item">
              <Link className="link-row link-row--change" to={`/informationDisclosures/${item.id}`}>
                <span className="link-row__text">{item.attributes.title}</span>
                <div className="link-row__wrap-arrow">
                  <svg className="link-row__arrow">
                    <use href="/local/templates/vg/assets/img/arrow-nav.svg#arrow-nav"></use>
                  </svg>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
