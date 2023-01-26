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

export default function InformationDisclosuresItem() {
  const params = useParams();
  const [informationDisclosureItem, setinformationDisclosureItem] = useState({});
  const [copy, setCopy] = useState({});

  useEffect(() => {
    fetch(`${addressServer}/api/information-disclosures/${params.id}?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`)
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
    console.log(copy);
    let copyObj = JSON.parse(JSON.stringify(copy));
    console.log(copyObj);
    if (copyObj.attributes) {
      copyObj.attributes.groupInfo.forEach((element) => {
        element.list_files.data = element.list_files.data.filter((item) => item.attributes.name.toLowerCase().includes(event.target.value.toLowerCase()));
      });
      //copyObj.attributes.groupInfo = copyObj.attributes.groupInfo.filter((item) => item.title.includes(event.target.value));
      setinformationDisclosureItem(copyObj);
    }
  };

  const handlerClear = (event) => {
    document.querySelector(".informationDisclosures_search").value = "";
    document.querySelector(".informationDisclosures_search").click();
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={imgf4f40bee4b8a3fb6f95707a4da41d873} title={informationDisclosureItem.attributes && informationDisclosureItem.attributes.title} />
      <div className="page-grid__content" id="content">
        <div>
          <Link to="/informationDisclosures" className="button__back">
            Назад
          </Link>
          <input type="text" className="informationDisclosures_search" placeholder="Поиск на текущей странице" onChange={handlerSearch} onClick={handlerSearch} />
          <button className="button__clear" onClick={handlerClear}>
            Очистить
          </button>
        </div>
        {/* <h1 className="inner-post__title">{informationDisclosureItem.attributes && informationDisclosureItem.attributes.title}</h1> */}
        <ul>
          {informationDisclosureItem &&
            informationDisclosureItem.attributes &&
            informationDisclosureItem.attributes.groupInfo &&
            informationDisclosureItem.attributes.groupInfo.map((item, index) => {
              if (item.list_files.data.length < 1) {
                return false;
              } else {
                return (
                  <li className="page-grid__content" id="content" key={index}>
                    <div className="row-docs-age">
                      <h3 className="row-docs-age__caption line-bottom">{item.title}</h3>
                      <ul>
                        {item.list_files.data
                          .sort((a, b) => {
                            if (a.attributes.name.search(/20[0-9]{2} /gm) != -1 && b.attributes.name.search(/20[0-9]{2} /gm) == -1) {
                              return -1;
                            }
                            if (a.attributes.name.search(/20[0-9]{2} /gm) == -1 && b.attributes.name.search(/20[0-9]{2} /gm) != -1) {
                              return 1;
                            }
                            //a.match(/20[0-9]{3} /gm)[0]
                            //a.attributes.name.search(/20[0-9]{3} /gm)[0]
                            return b.id - a.id;
                          })
                          .sort((a, b) => {
                            if (a.attributes.name.search(/20[0-9]{2} /gm) != -1 && b.attributes.name.search(/20[0-9]{2} /gm) != -1) {
                              return b.attributes.name.match(/20[0-9]{2} /gm)[0].slice(0, -1) - a.attributes.name.match(/20[0-9]{2} /gm)[0].slice(0, -1);
                            }
                          })
                          .map((item, index) => (
                            <li key={index} className="page-grid__content__li">
                              <a className="doc-line" href={`${addressServer}${item.attributes.file.data.attributes.url}`} download="" target="_blank">
                                <div className="doc-line__wrap-icon">
                                  <img src={type[item.attributes.type]} alt={`icon ${item.attributes.type}`} />
                                </div>
                                <div className="doc-line__wrap-text">
                                  <span className="doc-line__name">{item.attributes.name}</span>
                                  <span className="doc-line__file-info">
                                    {item.attributes.type} {Math.round(item.attributes.file.data.attributes.size)}kb
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
            })}
        </ul>
      </div>
    </motion.div>
  );
}
