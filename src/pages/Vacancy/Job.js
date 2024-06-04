import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopImage from "../../components/TopImage";
import vacan_img from "../../img/d21248be80705e7a80efdf5efde73cc5.jpg";
import companyImage from "../../img/Stas1.jpg";
import compenceImage from "../../img/Stas2.jpg";
import lockationImage from "../../img/Stas3.jpg";

const Job = () => {
  const [activeTab, setActiveTab] = useState("company");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const containerStyle = {
    width: "100%",
    margin: "0 auto",
    paddingTop: "5%",
    paddingBottom: "5%",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    padding: "0px 10px",
    fontSize: "18px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    margin: "10 10px",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    borderBottom: "2px solid #007bff",
    fontWeight: "bold",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  };

  const panelStyle = {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    width: "80%",
  };

  const imgStyle = {
    maxWidth: "50%",
    height: "auto",
    marginRight: "20px",
  };

  const textStyle = {
    fontSize: "16px",
    margin: "10px 0",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage image={vacan_img} title={"Вакансии"} />
      <div style={containerStyle}>
        <div style={headerStyle}>
          <button
            style={activeTab === "company" ? activeButtonStyle : buttonStyle}
            onClick={() => handleTabClick("company")}
          >
            Компания
          </button>
          <button
            style={
              activeTab === "compensation" ? activeButtonStyle : buttonStyle
            }
            onClick={() => handleTabClick("compensation")}
          >
            Компенсации и бонусы
          </button>
          <button
            style={activeTab === "workplace" ? activeButtonStyle : buttonStyle}
            onClick={() => handleTabClick("workplace")}
          >
            Место работы
          </button>
        </div>
        <div style={contentStyle}>
          <AnimatePresence exitBeforeEnter>
            {activeTab === "company" && (
              <motion.div
                key="company"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                style={panelStyle}
              >
                <img style={imgStyle} src={companyImage} alt="Компания" />
                <div>
                  <p style={textStyle}>
                    АО «Мособлэнерго» является одной из крупнейших энергосетевых
                    компаний региона, которая обеспечивает потребности экономики в
                    передающих мощностях.
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
                style={panelStyle}
              >
                <img
                  style={imgStyle}
                  src={compenceImage}
                  alt="Компенсации и бонусы"
                />
                <div>
                  <p style={textStyle}>
                    Твое здоровье - наша забота! Предлагаем добровольное
                    медицинское страхование, включая стоматологическое
                    обеспечение.
                  </p>
                  <p style={textStyle}>
                    Чтобы развиваться и расти вместе, даем возможности для
                    повышения квалификации, прохождения переподготовки, а также
                    для обучения по целевому договору в НИУ МЭИ.
                  </p>
                  <p style={textStyle}>
                    Участие в корпоративных спортивных мероприятиях – наше
                    традиционное упражнение.
                  </p>
                  <p style={textStyle}>
                    Годовой бонус, ежегодная выплата к отпуску и дополнительные
                    выплаты по коллективному договору для поддержки важных
                    моментов в жизни.
                  </p>
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
                style={panelStyle}
              >
                <img style={imgStyle} src={lockationImage} alt="Место работы" />
                <div>
                  <p style={textStyle}>
                    Мы собираем энергетическую команду по всей Московской области:
                    обслуживаем 54 городских округа.
                  </p>
                  <p style={textStyle}>
                    Независимо от рабочего места, везде вас будет ожидать
                    дружелюбная атмосфера и поддержка коллег, ведь энергетика –
                    как большая семья.
                  </p>
                  <p style={textStyle}>
                    Присоединяйтесь к нашей команде, вместе мы создаем энергию
                    Подмосковья!
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Job;
