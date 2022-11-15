import React from "react";
import pdf from "../../img/pdf.svg";
import { addressServer } from "../../config";

export default function TCInformationAboutConnection() {
  return (
    <div className="page-grid__content">
      <div className="row-docs-age">
        <a className="doc-line" href={`${addressServer}/uploads/71983ef3cda2a4cb2c9cee492c405ad0_szhatyj_6f1ee1772a.pdf?updated_at=2022-11-15T11:49:25.233Z`} download="" target="_blank">
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">Информация о наличии объема свободной для технологического присоединения потребителей трансформаторной мощности по подстанциям и распределительным пунктам напряжением ниже 35 кВ с дифференциацией по всем уровням напряжения по состоянию на 31.03.2021.</span>
            <span className="doc-line__file-info">pdf, 1 мб</span>
          </div>
        </a>
      </div>
    </div>
  );
}
