import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addressServer } from "../config";
import pdf from "../img/pdf.svg";
import doc from "../img/doc.svg";
import docx from "../img/docx.svg";
import rar from "../img/rar.svg";
import xls from "../img/xls.svg";
import jpg from "../img/jpg.svg";
import { motion } from "framer-motion";

import TopImage from "../components/TopImage";
import imgf4f40bee4b8a3fb6f95707a4da41d873 from "../img/f4f40bee4b8a3fb6f95707a4da41d873.jpg";

const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
  jpg,
};

// Массив, определяющий нужный порядок документов
const customOrder = [
  'Устав акционерного общества "Московская областная энергосетевая компания" (новая редакция № 8) от 16.05.2019 № 15ВР-782',
  "Изменения № 1 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 05.12.2019 № 15ВР-1991",
  "Изменения № 2 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 09.03.2021 № 15ВР-327",
  "Изменения № 3 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 20.01.2022 № 15ВР-35",
  "Изменения № 4 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 24.05.2021 № 15ВР-840",
  "Изменения № 5 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 04.10.2022 №15ВР-2058",
  "Изменения № 6 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 02.02.2023 № 15ВР-150",
  "Изменения № 7 к Уставу акционерного общества «Московская областная энергосетевая компания» (новая редакция № 8) от 15.05.2024 № 15ВР-898",
];

export default function InformationDisclosuresItem() {
  const params = useParams();
  const [informationDisclosureItem, setinformationDisclosureItem] = useState(
    {}
  );
  const [copy, setCopy] = useState({});

  useEffect(() => {
    fetch(
      `${addressServer}/api/information-disclosures/${params.id}?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setinformationDisclosureItem(data.data);
        setCopy(data.data);
      })
      .catch((err) => {
        console.log(err);
        setinformationDisclosureItem({});
      });
  }, []);

  const handlerSearch = (event) => {
    let copyObj = JSON.parse(JSON.stringify(copy));
    if (copyObj.attributes) {
      copyObj.attributes.groupInfo.forEach((element) => {
        element.list_files.data = element.list_files.data.filter((item) =>
          item.attributes.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        );
      });
      setinformationDisclosureItem(copyObj);
    }
  };

  const handlerClear = (event) => {
    document.querySelector(".informationDisclosures_search").value = "";
    document.querySelector(".informationDisclosures_search").click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={imgf4f40bee4b8a3fb6f95707a4da41d873}
        title={
          informationDisclosureItem.attributes &&
          informationDisclosureItem.attributes.title
        }
      />
      <div className="page-grid__content" id="content">
        <div>
          <Link to="/informationDisclosures" className="button__back">
            Назад
          </Link>
          <input
            type="text"
            className="informationDisclosures_search"
            placeholder="Поиск на текущей странице"
            onChange={handlerSearch}
            onClick={handlerSearch}
          />
          <button className="button__clear" onClick={handlerClear}>
            Очистить
          </button>
        </div>
        <ul>
          {informationDisclosureItem &&
            informationDisclosureItem.attributes &&
            informationDisclosureItem.attributes.groupInfo &&
            informationDisclosureItem.attributes.groupInfo.map(
              (item, index) => {
                if (item.list_files.data.length < 1) {
                  return false;
                } else {
                  return (
                    <li className="page-grid__content" id="content" key={index}>
                      <div className="row-docs-age">
                        <h3 className="row-docs-age__caption line-bottom">
                          {item.title}
                        </h3>
                        <ul>
                          {item.list_files.data
                            .filter(
                              (doc) =>
                                !doc.attributes.name.includes(
                                  "Антикоррупционная политика"
                                )
                            )
                            .sort((a, b) => {
                              if (
                                a.attributes.name.includes(
                                  "Устав акционерного общества"
                                )
                              ) {
                                return -1; // Устав всегда должен быть первым
                              }
                              return (
                                customOrder.indexOf(a.attributes.name) -
                                customOrder.indexOf(b.attributes.name)
                              );
                            })
                            .map((item, index) => (
                              <li
                                key={index}
                                className="page-grid__content__li"
                              >
                                <a
                                  className="doc-line"
                                  href={`${addressServer}${item.attributes.file.data.attributes.url}`}
                                  download=""
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <div className="doc-line__wrap-icon">
                                    <img
                                      src={type[item.attributes.type]}
                                      alt={`icon ${item.attributes.type}`}
                                    />
                                  </div>
                                  <div className="doc-line__wrap-text">
                                    <span className="doc-line__name">
                                      {item.attributes.name}
                                    </span>
                                    <span className="doc-line__file-info">
                                      {item.attributes.type}{" "}
                                      {Math.round(
                                        item.attributes.file.data.attributes
                                          .size
                                      )}
                                      kb
                                    </span>
                                  </div>
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </li>
                  );
                }
              }
            )}
        </ul>
      </div>
    </motion.div>
  );
}
