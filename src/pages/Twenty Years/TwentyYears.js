import React from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import imgb04877a3110d6b586d064fc3a2853c70 from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";
import back from '../../img/20years/back.svg'
import logo from '../../img/20years/logo.png'
import styles from './TwentyYears.module.css'

import Paragraph from "antd/es/typography/Paragraph";
import { Flex } from "antd";

export default function TwentyYears() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        // image={imgb04877a3110d6b586d064fc3a2853c70}
        title="20 лет «МосОблЭнерго»"
      />

      {/* <Paragraph>Тут будет текст</Paragraph> */}
      <Flex justify="space-between" align="center" style={{ position: "relative" }}>
        <img src={back} width={400} style={{ transform: "scaleX(-1)" }} className={styles.img}/>
        <img src={logo} width={400} style={{ marginBottom: 100 }} />
        <img src={back} width={400} className={styles.img}/>
        <div className={styles.line}>20 лет во благо Подмосковья!</div>
      </Flex>
    </motion.div>
  );
}
