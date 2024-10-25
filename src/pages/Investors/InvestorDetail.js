import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { addressServer } from "../../config";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img4c2c362e8d8fa557788c556795d32fae from "../../img/photo_5343684875758200971_y.jpg";

import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
import jpg from "../../img/jpg.svg";

const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
  jpg,
};

export default function InvestorDetail() {
  const params = useParams();
  const [section, setSection] = useState(null);
  const [copy, setCopy] = useState(null);

  useEffect(() => {
    fetch(
      `${addressServer}/api/investorams/${params.id}??populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Полученные данные:", data); // выводим все данные для отладки
        setSection(data.data);
        setCopy(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!section || !section.attributes) return <div>Загрузочка...</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img4c2c362e8d8fa557788c556795d32fae}
        title={section.attributes.title}
      />
      <div className="page-grid__content" id="content">
        <div>
          <Link to="/investors" className="button__back">
            Назад
          </Link>
        </div>

        <ul>
          {section &&
            section.attributes &&
            section.attributes.groupInfo &&
            section.attributes.groupInfo.map((group, groupIndex) => {
              if (group.list_files.data.length < 1) {
                return false;
              } else {
                return (
                  <li key={groupIndex} className="page-grid__content__li">
                    <div className="row-docs-age">
                      <h3 className="row-docs-age__caption line-bottom">
                        {group.title}
                      </h3>
                      <ul>
                        {group.list_files.data.map((item, fileIndex) => (
                          <li
                            key={fileIndex}
                            className="page-grid__content__li"
                          >
                            <a
                              className="doc-line"
                              href={`${addressServer}${item.attributes.file.data.attributes.url}`}
                              target="_blank"
                              rel="noopener noreferrer"
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
                                    item.attributes.file.data.attributes.size
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
            })}
        </ul>
      </div>
    </motion.div>
  );
}
