import React from 'react'
import { motion } from "framer-motion";
import TopImage from "../components/TopImage";
import vacan_img from '../img/d21248be80705e7a80efdf5efde73cc5.jpg'
import QR_vacansies from '../img/QR_vacansies.jpg'

export default function Vacancies() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <TopImage image={vacan_img} title={"Вакансии"} />
            <div className="page-grid__content" id="content">
                <div className='vacancies'>
                    <div className='vacancies__text-area'>
                        <h3 >Актуальные вакансии компании можно посмотреть на официальной странице HeadHunter </h3>
                        <div className='vacancies__button-area'> <a href='https://hh.ru/employer/221874' target="_blank" className='open-map__button'>Перейти на HH</a></div>
                    </div>
                    <img className='vacancies__img' src={QR_vacansies} />
                </div>
            </div>
        </motion.div>
    )
}
