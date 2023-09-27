import React from "react";
import { motion } from "framer-motion";
import img5d1dda82e3641ae19df5a51619ffb49c from "../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
import TopImage from "../components/TopImage";
import { addressServer } from "../config";

export default function SpecialProjects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img5d1dda82e3641ae19df5a51619ffb49c} title={"Специальные проекты"} />
      <div className="page-grid__content" id="content">
        <h1>Специальные проекты</h1>
        <embed width="100%" height="1000" src={`${addressServer}/uploads/Profilaktika_VI_Ch_dlya_rabotayushhego_naseleniya_2023_fcab394e2b.pdf?updated_at=2023-09-27T07:47:38.961Z`}/>
        <embed width="100%" height="1000" src={`${addressServer}/uploads/Aktualnyj_adres_i_telefony_Czentra_SPID_a14c80a877.pdf?updated_at=2023-09-27T07:47:38.782Z`}/>
  
      </div>
    </motion.div>
  );
}
