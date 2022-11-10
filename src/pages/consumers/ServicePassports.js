import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { addressServer } from "../../config";
import { Link } from "react-router-dom";
import TopImage from "../../components/TopImage";
import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
};
export default function ServicePassports() {
  const [pasports, setPasports] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${addressServer}/api/pasporta-uslug?populate=*`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPasports(data.data);
      })
      .catch((err) => {
        console.log(err);
        setPasports([]);
      });
  }, []);
  console.log(pasports);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage title={""} />
      <div className="page-grid__content">
        {pasports.attributes &&
          pasports.attributes.files.data.map((item, index) => (
            <li key={index} className="page-grid__content__li">
              <a className="doc-line" href={`${addressServer}${item.attributes.url}`} download="" target="_blank">
                <div className="doc-line__wrap-icon">
                  <img src={type[item.attributes.ext.slice(1)]} alt={`icon ${item.attributes.ext.slice(1)}`} />
                </div>
                <div className="doc-line__wrap-text">
                  <span className="doc-line__name">{item.attributes.name}</span>
                  <span className="doc-line__file-info">
                    {item.attributes.ext.slice(1)} {Math.round(item.attributes.size)}kb
                  </span>
                </div>
              </a>
            </li>
          ))}
      </div>
    </motion.div>
  );
}
