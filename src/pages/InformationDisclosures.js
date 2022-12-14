import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addressServer } from "../config";
import { motion } from "framer-motion";
import TopImage from "../components/TopImage";
import imgb04877a3110d6b586d064fc3a2853c70 from "../img/b04877a3110d6b586d064fc3a2853c70.jpg";

export default function InformationDisclosures() {
  const [informationDisclosures, setInformationDisclosures] = useState([]);

  useEffect(() => {
    fetch(`${addressServer}/api/information-disclosures?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setInformationDisclosures(data.data.sort((a, b) => a.attributes.sort - b.attributes.sort)))
      .catch((err) => {
        console.log(err);
        setInformationDisclosures([]);
      });
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={imgb04877a3110d6b586d064fc3a2853c70} title={"Раскрытие информации"} />
      <div className="page-grid__content" id="content">
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
      </div>
    </motion.div>
  );
}
