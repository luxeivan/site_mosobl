import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import back from "../../img/20years/back.svg";
import logo from "../../img/20years/logo.png";
import styles from "./TwentyYears.module.css";
import { Flex, Typography } from "antd";
import HTMLFlipBook from "react-pageflip";

const { Title, Paragraph, Link } = Typography;

/* ===================  BOOK  =================== */
const PAGES = 17; // jpg pages

/* ==========  ARCHIVE auto-import  ========== */
/* берём все картинки рекурсивно из Archive */
const archiveReq = require.context(
  "../../img/20years/Archive",
  true,
  /\.(jpe?g|png|webp)$/i
);

/* группируем по папкам */
const archiveMap = archiveReq.keys().reduce((acc, path) => {
  const [, branch, file] = path.match(/^\.\/([^/]+)\/(.+)$/);
  const prettyName = file
    .replace(/\.(jpe?g|png|webp)$/i, "")
    .replace(/[_-]+/g, " ");
  (acc[branch] = acc[branch] || []).push({
    src: archiveReq(path),
    caption: prettyName,
  });
  return acc;
}, {}); // { 'Домодедовский филиал': [{src, caption}, ...], ... }

export default function TwentyYears() {
  const [open, setOpen] = useState(false);

  /* списки филиалов отсортированные */
  const branchNames = useMemo(
    () => Object.keys(archiveMap).sort((a, b) => a.localeCompare(b, "ru")),
    []
  );

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

      {/* Памятная книга */}
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

      {/* Архив */}
      <section className={styles.bookIntro}>
        <Title level={2} className={styles.sectionTitle}>
          Архивные материалы
        </Title>
        <Paragraph>
          В процессе работы над исследованием мы обнаружили уникальные архивные
          документы первых электросетевых предприятий городов Подмосковья, в том
          числе и довоенной эпохи – приказы, письма, распоряжения, десятки
          фотографий и свидетельств, воспоминаний и исторических фактов,
          свершившихся в различные периоды становления и развития отрасли. К
          сожалению, вместить в одну книгу подробную историю каждой электросети,
          которая теперь стала частью «Мособлэнерго», физически невозможно,
          поэтому мы постарались выбрать и включить в книгу основные события.
          Для всех, кто хотел бы более подробно погрузиться в историю
          электросетей Подмосковья мы разместили здесь всю найденную информацию
        </Paragraph>
      </section>

      {/* галереи по филиалам */}
      {branchNames.map((branch) => (
        <section key={branch} className={styles.branchSection}>
          <Title level={3}>{branch}</Title>
          <div className={styles.gallery}>
            {archiveMap[branch].map(({ src, caption }, idx) => (
              <figure key={idx} className={styles.galleryItem}>
                <img src={src} alt={caption} />
                <figcaption>{caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}

      {/* overlay-книга */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div
            className={styles.bookWrapper}
            onClick={(e) => e.stopPropagation()}
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
