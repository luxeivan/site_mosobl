import React from "react";
import { motion } from "framer-motion";
import pdf from "../img/pdf.svg";
import Aktualnyj_address from "../img/specialProjects/Aktualnyj_adres_i_telefony_Czentra_SPID.jpg";
import img5d1dda82e3641ae19df5a51619ffb49c from "../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
import TopImage from "../components/TopImage";
import { addressServer } from "../config";

export default function SpecialProjects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img5d1dda82e3641ae19df5a51619ffb49c} title={"Специальные проекты"} />
      <div className="page-grid__content" id="content">
        <div className="row-docs-age">
          <a
            className="doc-line"
            href={`${addressServer}/uploads/Profilaktika_VI_Ch_dlya_rabotayushhego_naseleniya_2023_fcab394e2b.pdf?updated_at=2023-09-27T07:47:38.961Z`}
            download=""
            target="_blank"
          >
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">Профилактика ВИЧ для работающего населения 2023</span>
              <span className="doc-line__file-info">pdf, 2 МБ</span>
            </div>
          </a>
        </div>        
        <img src={Aktualnyj_address} alt="Aktualnyj_adres_i_telefony_Czentra_SPID" />
      </div>
    </motion.div>
  );
}
