import React, { useState } from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import back from "../../img/20years/back.svg";
import logo from "../../img/20years/logo.png";
import styles from "./TwentyYears.module.css";
import { Flex, Typography } from "antd";
import HTMLFlipBook from "react-pageflip";

const { Title, Paragraph, Link } = Typography;
const PAGES = 17; // jpg-страниц в /public/20years/pages/

export default function TwentyYears() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage title="20 лет «МосОблЭнерго»" />

      {/* шапка */}
      <Flex justify="space-between" align="center" className={styles.flex}>
        <img src={back} className={`${styles.img} ${styles.reverse}`} alt="" />
        <img src={logo} className={styles.logo} alt="20 лет МосОблЭнерго" />
        <img src={back} className={styles.img} alt="" />
        <div className={styles.line}>20 лет во благо Подмосковья!</div>
      </Flex>

      {/* интро-блок */}
      <section className={styles.bookIntro}>
        <Title level={2} className={styles.sectionTitle}>
          Памятная книга
        </Title>

        <Paragraph>
          Специально к юбилею АО «Мособлэнерго» выпустило памятную книгу,
          посвященную истории развития компании и ее филиалов. История АО
          «Мособлэнерго» — это гораздо больше, чем 20 лет. Электросети городов
          Подмосковья, профессиональные коллективы которых по сей день хранят
          уникальные воспоминания за более чем 85 лет работы, сегодня стали
          частью нашей большой компании. Бесценные рассказы ветеранов отрасли и
          самые яркие вехи истории электросетевых предприятий легли в основу
          нашей памятной книги.
        </Paragraph>

        <Link onClick={() => setOpen(true)}>Читать онлайн</Link>
      </section>

      {/* overlay-книга */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div
            className={styles.bookWrapper}
            onClick={(e) =>
              e.stopPropagation()
            } /* чтобы клик по книге не закрывал */
          >
            <HTMLFlipBook
              width={1000}
              height={700}
              size="stretch"
              minWidth={300}
              maxWidth={1800}
              minHeight={300}
              maxHeight={1000}
              showCover
              mobileScrollSupport
              className={styles.book}
            >
              {Array.from({ length: PAGES }, (_, i) => (
                <div key={i} className={styles.page}>
                  <img
                    src={`${process.env.PUBLIC_URL}/20years/pages/page-${
                      i + 1
                    }.jpg`}
                    alt={`Страница ${i + 1}`}
                    className={styles.pageImg}
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// import React from "react";
// import { motion } from "framer-motion";
// import TopImage from "../../components/TopImage";
// import imgb04877a3110d6b586d064fc3a2853c70 from "../../img/b04877a3110d6b586d064fc3a2853c70.jpg";
// import back from "../../img/20years/back.svg";
// import logo from "../../img/20years/logo.png";
// import styles from "./TwentyYears.module.css";

// import Paragraph from "antd/es/typography/Paragraph";
// import { Flex } from "antd";

// export default function TwentyYears() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         // image={imgb04877a3110d6b586d064fc3a2853c70}
//         title="20 лет «МосОблЭнерго»"
//       />

//       {/* <Paragraph>Тут будет текст</Paragraph> */}
//       <Flex
//         justify="space-between"
//         align="center"
//         style={{ position: "relative" }}
//       >
//         <img
//           src={back}
//           width={400}
//           style={{ transform: "scaleX(-1)" }}
//           className={styles.img}
//         />
//         <img src={logo} width={400} style={{ marginBottom: 100 }} />
//         <img src={back} width={400} className={styles.img} />
//         <div className={styles.line}>20 лет во благо Подмосковья!</div>
//       </Flex>
//     </motion.div>
//   );
// }
