import React from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import imgb04877a3110d6b586d064fc3a2853c70 from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";

import Paragraph from "antd/es/typography/Paragraph";

export default function TwentyYears() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={imgb04877a3110d6b586d064fc3a2853c70}
        title="20 лет «МосОблЭнерго»"
      />

      <Paragraph>Тут будет текст</Paragraph>
    </motion.div>
  );
}
