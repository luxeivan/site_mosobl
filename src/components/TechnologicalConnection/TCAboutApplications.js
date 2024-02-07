import React from "react";
import { addressServer } from "../../config";
import pdf from "../../img/pdf.svg";
import xls from "../../img/xls.svg";

export default function TCAboutApplications() {
  return (
    <div className="page-grid__content">
      <div className="text-area">
        <p>
          Информация о заключенных договорах об осуществлении технологического
          присоединения к электрическим сетям, содержащих сведения об объеме
          присоединяемой мощности, о сроках и плате по каждому договору.
        </p>
      </div>
      <div className="row-docs-age">
        {/* <a className="doc-line" href={`${addressServer}/uploads/Otchet_na_sajt_maj_2023_2e661e4368.pdf?updated_at=2023-06-13T10:22:03.398Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2023, май</span>
            <span className="doc-line__file-info">pdf, 311 кб</span>
          </div>
        </a>*/}
        <a
          className="doc-line"
          href={`${addressServer}/uploads/Otchet_na_sajt_2023_god_00f2a36c85.pdf?updated_at=2024-01-17T09:55:22.982Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2023</span>
            <span className="doc-line__file-info">pdf, 2 мб</span>
          </div>
        </a>
        {/* <a className="doc-line" href={`${addressServer}/uploads/Otchet_na_sajt_noyabr_2023_ba994d246e.pdf?updated_at=2023-12-12T05:24:01.980Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2023, ноябрь</span>
            <span className="doc-line__file-info">pdf, 1,4 мб</span>
          </div>
        </a> 
        <a className="doc-line" href={`${addressServer}/uploads/Otchet_na_sajt_oktyabr_2023_95b4ca6b65.pdf?updated_at=2023-11-14T04:45:16.587Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2023, октябрь</span>
            <span className="doc-line__file-info">pdf, 2 мб</span>
          </div>
        </a> 
        <a className="doc-line" href={`${addressServer}/uploads/Otchet_na_sajt_za_9_mesyaczev_AO_Mosoblenergo_29c60fb023.pdf?updated_at=2023-10-04T13:38:54.800Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2023, сентябрь</span>
            <span className="doc-line__file-info">pdf, 1 мб</span>
          </div>
        </a> 
        <a className="doc-line" href={`${addressServer}/uploads/otchet_na_sajt_avgust_2023_5f040e7352.pdf?updated_at=2023-09-06T05:20:06.199Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2023, август</span>
            <span className="doc-line__file-info">pdf, 1 мб</span>
          </div>
        </a> 
        <a className="doc-line" href={`${addressServer}/uploads/Otchet_na_sajt_za_iyul_2023_3a61dc7b0b.pdf?updated_at=2023-08-16T06:33:08.911Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2023, июль</span>
            <span className="doc-line__file-info">pdf, 980 кб</span>
          </div>
        </a> 
        <a className="doc-line" href={`${addressServer}/uploads/otchet_na_sajt_1_polugodie_2023_932cdce8a3.pdf?updated_at=2023-07-03T08:15:56.532Z`} download="" rel="noopener noreferrer" target="_blank" >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2023, первое полугодие</span>
            <span className="doc-line__file-info">pdf, 735 кб</span>
          </div>
        </a> */}
        <a
          className="doc-line"
          href={`${addressServer}/uploads/Otchet_na_sajt_oktyabr_2022_e573c08cc7.pdf?updated_at=2022-11-22T07:06:43.190Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2022</span>
            <span className="doc-line__file-info">pdf, 2 мб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/7e19ac7ce1b985ed1cfa83ffe5fd54d5_compressed_84ebbd92b4.pdf?updated_at=2022-11-15T11:55:47.907Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2021</span>
            <span className="doc-line__file-info">pdf, 1 мб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/326a015a2a401b12a27efb5416fc84d8_compressed_a20731e856.pdf?updated_at=2022-11-15T11:55:46.811Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2020</span>
            <span className="doc-line__file-info">pdf, 1 мб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/47a4bacc5d4c7a23e75dbf6add95de76_compressed_dfe96dd8a4.pdf?updated_at=2022-11-15T11:55:48.130Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2019</span>
            <span className="doc-line__file-info">pdf, 2 мб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/c103122e72849fa34d4a71510384d745_compressed_c5bc4d6cb0.pdf?updated_at=2022-11-15T11:55:48.323Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2018</span>
            <span className="doc-line__file-info">pdf, 3 мб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/d42bf738212e6d34a9798efca402c6b5_compressed_a931777fa0.pdf?updated_at=2022-11-15T11:55:47.747Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2017</span>
            <span className="doc-line__file-info">pdf, 2 мб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/8482c26cdddf834efc4e2802908df027_compressed_9ea8f77534.pdf?updated_at=2022-11-15T11:55:47.479Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2016</span>
            <span className="doc-line__file-info">pdf, 2 мб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/fd8ca365739d75411a4c86473292b91e_compressed_7afadf790c.pdf?updated_at=2022-11-15T11:55:47.234Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2015</span>
            <span className="doc-line__file-info">pdf, 1 мб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/bede0030dfa724b7200214f41b221794_compressed_9bcae9c46c.pdf?updated_at=2022-11-15T11:55:46.513Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2014</span>
            <span className="doc-line__file-info">pdf, 48 кб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/8734eb8da57a730a94556c277cc4cd70_213ee0fe39.xls?updated_at=2022-11-15T11:55:59.327Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={xls} alt="icon xls" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2013</span>
            <span className="doc-line__file-info">xls, 30 кб</span>
          </div>
        </a>
        <a
          className="doc-line"
          href={`${addressServer}/uploads/4133764831d0dc0400f43fe72f97c329_cdbeeb04a6.xls?updated_at=2022-11-15T11:55:59.129Z`}
          download=""
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="doc-line__wrap-icon">
            <img src={xls} alt="icon xls" />
          </div>
          <div className="doc-line__wrap-text">
            <span className="doc-line__name">2012</span>
            <span className="doc-line__file-info">xls, 29 кб</span>
          </div>
        </a>
      </div>
    </div>
  );
}
