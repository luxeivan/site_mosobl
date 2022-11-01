import React from "react";
import pdf from "../img/pdf.svg";
import { addressServer } from "../config";
import {motion} from 'framer-motion'

export default function Certs() {
  return (
    <motion.div className="page-grid__content" id="content"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration: .5}}
    >
      <h1 className="inner-post__title">Сертификаты</h1>
      <div class="row-docs-age">
        <a class="doc-line" href={`${addressServer}/uploads/b0bfad9761462fc15e13c0a467d3222a_compressed_16d27663a4.pdf?updated_at=2022-10-28T11:38:17.350Z`} download="" target="_blank">
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Сертификат соответствия по ГОСТ Р ИСО 9001-2015</span>
            <span class="doc-line__file-info">pdf, 1мб</span>
          </div>
        </a>

        <a class="doc-line" href={`${addressServer}/uploads/6c361f0b60af4fb806c890d0f972112d_compressed_be901966f5.pdf?updated_at=2022-10-28T11:38:17.248Z`} download="" target="_blank">
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Cертификационный аудит систем экологического менеджмента на соответствие требованиям ГОСТ Р ИСО 14001-2016 «Системы экологического менеджмента. Требования и руководство по применению»</span>
            <span class="doc-line__file-info">pdf, 205 кб</span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
