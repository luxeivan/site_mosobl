//Новые вакансии, которые переехали наверх
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopImage from "../../components/TopImage";
import vacan_img from "../../img/d21248be80705e7a80efdf5efde73cc5.jpg";
import companyImage from "../../img/Stas1.jpg";
import compenceImage from "../../img/Stas2.jpg";
import lockationImage from "../../img/Stas3.jpg";
import styles from "./Job.module.css";
import JobApplicationForm from "./JobApplicationForm";
import PreviewModal from "./PreviewModal";
import VacanciesList from "./VacanciesList";

const Job = () => {
  const [activeTab, setActiveTab] = useState("company");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewContent, setPreviewContent] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFormSubmit = (formData) => {
    let bodyText = "Здравствуйте! Я хотел бы у вас работать\r\n\r\n";
    Object.entries(formData).forEach(([key, value]) => {
      bodyText += `${key}: ${value}\r\n`;
    });
    setPreviewContent(bodyText);
    setIsPreviewOpen(true);

    const encodedBody = encodeURIComponent(bodyText);
    window.location.href = `mailto:mail@mosoblenergo.ru?subject=Job Application&body=${encodedBody}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage image={vacan_img} title={"Вакансии"} />
      {/* Ниже горе фильтр */}
      {/* <div>
        <VacanciesList />
      </div> */}
      <div className={styles.container}>
        <div className={styles.header}>
          <button
            className={
              activeTab === "company"
                ? `${styles.button} ${styles.activeButton}`
                : styles.button
            }
            onClick={() => handleTabClick("company")}
          >
            Ждем вас в нашей команде!
          </button>
          <button
            className={
              activeTab === "compensation"
                ? `${styles.button} ${styles.activeButton}`
                : styles.button
            }
            onClick={() => handleTabClick("compensation")}
          >
            Почему стоит работать у нас?
          </button>
          <button
            className={
              activeTab === "workplace"
                ? `${styles.button} ${styles.activeButton}`
                : styles.button
            }
            onClick={() => handleTabClick("workplace")}
          >
            Как к нам попасть?
          </button>
        </div>
        <div className={styles.content}>
          <AnimatePresence exitBeforeEnter>
            {activeTab === "company" && (
              <motion.div
                key="company"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className={styles.panel}
              >
                <img
                  className={styles.image}
                  src={companyImage}
                  alt="Компания"
                />
                <div>
                  <p className={styles.text}>
                    Мы собираем как энергетическую команду – электромонтеров,
                    диспетчеров сетей и инженеров, так и профессионалов своего
                    дела в иных областях, поэтому будем рады соискателям из
                    разных сфер. В обслуживании Общества 54 городских округа,
                    поэтому мы всегда сможем предложить трудоустройство рядом с
                    домом. И, независимо от рабочего места, везде вас будет
                    ожидать дружелюбная атмосфера и поддержка коллег, ведь
                    энергетика – как большая семья.
                  </p>
                </div>
              </motion.div>
            )}
            {activeTab === "compensation" && (
              <motion.div
                key="compensation"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className={styles.panel}
              >
                <img
                  className={styles.image}
                  src={compenceImage}
                  alt="Компенсации и бонусы"
                />
                <div>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>
                      Твое здоровье - наша забота! Предлагаем добровольное
                      медицинское страхование, включая стоматологическое
                      обеспечение.
                    </li>
                    <li className={styles.listItem}>
                      Чтобы развиваться и расти вместе, даем возможности для
                      повышения квалификации, прохождения переподготовки, а
                      также для обучения по целевому договору в НИУ МЭИ,
                      РГАУ-МСХА имени К.А. Тимирязева, Университете Вернадского
                      и ФГБОУ ВО ВГУИТ.
                    </li>
                    <li className={styles.listItem}>
                      Участие в корпоративных спортивных мероприятиях – наша
                      традиция.
                    </li>
                    <li className={styles.listItem}>
                      Годовой бонус, ежегодная выплата к отпуску и
                      дополнительные выплаты по коллективному договору для
                      поддержки важных моментов в жизни.
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
            {activeTab === "workplace" && (
              <motion.div
                key="workplace"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className={styles.panel}
              >
                <img
                  className={styles.image}
                  src={lockationImage}
                  alt="Место работы"
                />
                <JobApplicationForm onSubmit={handleFormSubmit} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {isPreviewOpen && (
        <PreviewModal
          title="Резюме"
          content={previewContent}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </motion.div>
  );
};

export default Job;
