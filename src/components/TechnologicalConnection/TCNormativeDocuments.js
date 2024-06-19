import React, { useEffect, useState } from "react";
import { addressServer } from "../../config";
import axios from "axios";
import pdf from "../../img/pdf.svg";
import doc from "../../img/doc.svg";
import docx from "../../img/docx.svg";
import rar from "../../img/rar.svg";
import xls from "../../img/xls.svg";
import rtf from "../../img/rtf.svg";
const type = {
  pdf,
  doc,
  docx,
  rar,
  xls,
  rtf,
};

export default function TCNormativeDocuments() {
  const [docs, setDocs] = useState([])
  useEffect(() => {
    axios.get(`${addressServer}/api/tp-normativno-pravovye-akty?populate=*`)
      .then(response => {
        if (response.data) {
          // console.log(response.data.data.attributes.docs.data)
          setDocs(response.data.data.attributes.docs.data)
          // setDocs()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div className="page-grid__content">
      <div className="row-docs-age">
        {docs.length > 0 &&
          docs.map((item, index) =>
            <a
              className="doc-line"
              href={`${addressServer}${item.attributes.url}`}
              download=""
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="doc-line__wrap-icon">
                <img
                  src={type[item.attributes.ext.slice(1)]}
                  alt={`icon ${item.attributes.ext.slice(1)}`}
                />
              </div>
              <div className="doc-line__wrap-text">
                <span className="doc-line__name">{item.attributes.name}</span>
                <span className="doc-line__file-info">{Number(item.attributes.size) > 1000 ? `${(item.attributes.size / 1000).toFixed(2)} МБ`:`${Math.round(item.attributes.size)} КБ`}</span>
              </div>
            </a>
          )}        
      </div>
    </div>
  );
}
