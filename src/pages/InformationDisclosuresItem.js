import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addressServer } from "../config";
import pdf from "../img/pdf.svg";
import doc from "../img/doc.svg";
import docx from "../img/docx.svg";
import rar from "../img/rar.svg";
const type = {
  pdf,
  doc,
  docx,
  rar,
};

export default function InformationDisclosuresItem() {
  const params = useParams();
  const [informationDisclosureItem, setinformationDisclosureItem] = useState({});

  useEffect(() => {
    fetch(`${addressServer}/api/information-disclosures/${params.id}?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setinformationDisclosureItem(data.data))
      .catch((err) => {
        console.log(err);
        setinformationDisclosureItem({});
      });
  }, []);

  return (
    <div className="page-content">
      <div>
        <Link to="/informationDisclosures" className="button__back">
          Назад
        </Link>
      </div>
      <ul>
        {informationDisclosureItem &&
          informationDisclosureItem.attributes &&
          informationDisclosureItem.attributes.groupInfo &&
          informationDisclosureItem.attributes.groupInfo.map((item, index) => (
            <li className="page-grid__content" id="content" key={index}>
              <div className="row-docs-age">
                <h3 className="row-docs-age__caption line-bottom">{item.title}</h3>
                <ul>
                  {item.list_files.data.map((item, index) => (
                    <li key={index}>
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
          ))}
      </ul>
    </div>
  );
}
