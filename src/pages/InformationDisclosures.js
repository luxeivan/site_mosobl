import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addressServer } from "../config";
import {motion} from 'framer-motion'

export default function InformationDisclosures() {
  const [informationDisclosures, setInformationDisclosures] = useState([]);

  useEffect(() => {
    fetch(`${addressServer}/api/information-disclosures?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setInformationDisclosures(data.data.sort((a,b)=>a.attributes.sort-b.attributes.sort)))
      .catch((err) => {
        console.log(err);
        setInformationDisclosures([]);
      });
  }, []);
  return (
    <motion.div className="page-grid__content"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration: .5}}
    >
      <h1 className="inner-post__title">Раскрытие информации</h1>

      <ul>
        {informationDisclosures &&
          informationDisclosures.map((item, index) => (
            <li key={index} className="informationDisclosures__item">
              <Link className="link-row link-row--change" to={`/informationDisclosures/${item.id}`}>
                <span className="link-row__text">{item.attributes.title}</span>
                <div className="link-row__wrap-arrow">
                  <svg className="nav-menu__arrow">
                    <path d="M34.7143 9L39 5M39 5L34.7143 0.999999M39 5L1 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </motion.div>
  );
}
