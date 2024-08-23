import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { addressServer } from "../../config";
import TopImage from "../../components/TopImage";
import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
import rtf from "../../img/rtf.svg";
import img0ee8b84173f27d6237b20317168e863e from "../../img/0ee8b84173f27d6237b20317168e863e.jpg";
const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
  rtf,
};

export default function RegulatoryLegalActs() {
  const [acts, setActs] = useState([]);
  const [setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${addressServer}/api/normativnye-pravovye-akty?populate=*`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setActs(data.data);
      })
      .catch((err) => {
        console.log(err);
        setActs([]);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img0ee8b84173f27d6237b20317168e863e}
        title={"Нормативные правовые акты"}
      />
      <div className="page-grid__content">
        <ul>
          {acts &&
            acts.attributes &&
            acts.attributes.files.data
              .sort((a, b) => {
                return (
                  parseInt(a.attributes.name, 10) -
                  parseInt(b.attributes.name, 10)
                );
              })

              .map((item, index) => (
                <li key={index} className="page-grid__content__li">
                  <a
                    className="doc-line"
                    href={`${addressServer}${item.attributes.url}`}
                    download=""
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="doc-line__wrap-icon">
                      <img src={type[item.attributes.ext.slice(1)]} alt={`icon ${item.attributes.ext.slice(1)}`} />
                    </div>
                    <div className="doc-line__wrap-text">
                      <span className="doc-line__name">{item.attributes.name}</span>
                      <span className="doc-line__file-info">{Number(item.attributes.size) > 1000 ? `${(item.attributes.size / 1000).toFixed(2)} МБ`:`${Math.round(item.attributes.size)} КБ`}</span>
                    </div>
                  </a>
                </li>
              ))}
        </ul>
      </div>
    </motion.div>
  );
}
