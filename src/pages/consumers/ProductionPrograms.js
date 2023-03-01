import React from 'react'
// import checkIcon from "../img/check-icon.svg";
import { motion } from 'framer-motion'
import TopImage from "../../components/TopImage";
import img37550ba6c53ac1236dc634e6c4f22cc1 from "../../img/37550ba6c53ac1236dc634e6c4f22cc1.jpg";
import { addressServer } from "../../config";

export default function ProductionPrograms() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <TopImage image={img37550ba6c53ac1236dc634e6c4f22cc1} title={'Производственные программы на 2023 год'} />
            <div className="page-grid__content" id="content">
                <div className="text-area">

                    <ul style={{display: 'flex', flexWrap: 'wrap'}}>
                        <li style={{maxWidth: '50%'}}>
                            <h3>г.о. Подольск</h3>
                            <img src={`${addressServer}/uploads/Podolsk2023_85c78757bd.jpeg?updated_at=2023-03-01T13:36:17.436Z`} alt='Подольск карта'/>
                            <br/>
                            <a href={`${addressServer}/uploads/Podolsk2023_85c78757bd.jpeg?updated_at=2023-03-01T13:36:17.436Z`} download={'maps.jpeg'} target="_blank">Скачать</a>
                            </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}
