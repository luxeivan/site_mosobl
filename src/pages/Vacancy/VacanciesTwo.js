import React from "react";
import { motion } from "framer-motion";
import { Splitter, Grid, Space, Card, Typography } from "antd";
import TopImage from "../../components/TopImage";
import vacan_img from "../../img/d21248be80705e7a80efdf5efde73cc5.jpg";
import styles from "./Vacancies.module.css";

import JobPart from "./Job/JobPart";
import PracticePart from "./Practice/PracticePart";
import DownBlock from "./DownBlock/DownBlock";

const { Title, Text } = Typography;

const { useBreakpoint } = Grid;

export default function VacanciesTwo() {
  const screens = useBreakpoint();
  const isMobile = !screens.md; // md ~ 768px, если ширина < 768, считаем мобильной

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Заглавная картинка */}
      {/* <TopImage title={"Моя карьера"} image={vacan_img} /> */}
      <TopImage title={"Моя карьера"} />

      <div className="page-grid__content" id="content">
        {isMobile ? (
          // Мобильная верстка: блоки идут вертикально друг под другом
          <Space direction="vertical" style={{ width: "100%" }}>
            <JobPart />
            <PracticePart />
          </Space>
        ) : (
          // Десктопная верстка: используем Splitter
          <>
            <Splitter style={{ height: "auto" }}>
              <Splitter.Panel
                defaultSize="50%"
                min="30%"
                max="70%"
                className={styles.right}
              >
                <JobPart />
              </Splitter.Panel>
              <Splitter.Panel className={styles.left}>
                <PracticePart />
              </Splitter.Panel>
            </Splitter>
            {/* <DownBlock/> */}
          </>
        )}
      </div>
    </motion.div>
  );
}
