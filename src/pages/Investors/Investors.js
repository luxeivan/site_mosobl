import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addressServer } from "../../config";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img4c2c362e8d8fa557788c556795d32fae from "../../img/photo_5343684875758200971_y.jpg";

export default function Investors() {
  const [investorSections, setInvestorSections] = useState([]);

  useEffect(() => {
    fetch(`${addressServer}/api/investorams?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Проверка связи", data);
        setInvestorSections(
          data.data.sort((a, b) => a.attributes.sort - b.attributes.sort)
        );
      })
      .catch((err) => {
        console.log(err);
        setInvestorSections([]);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img4c2c362e8d8fa557788c556795d32fae}
        title={"ИНВЕСТОРАМ"}
      />

      <div className="page-grid__content" id="content">
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          <a
            className="planned-notification__link"
            style={{
              border: "1px solid rgb(227, 112, 33)",
              boxShadow: "0px 0px 9px 3px rgba(227, 112, 33, 0.2)",
            }}
            href={`${addressServer}/uploads/20231123_Mosoblenergo_press_reliz_rus_5a57749dff.pdf?updated_at=2023-11-24T05:19:45.894Z`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Кредитный рейтинг компании АО "Мособлэнерго" на уровне АА+(RU),
            прогноз «Стабильный»
          </a>
        </p>
        <p style={{ textAlign: "center" }}>
          <a
            className="planned-notification__link"
            href="https://www.e-disclosure.ru/portal/company.aspx?id=15188"
            rel="noopener noreferrer"
            target="_blank"
          >
            Карточка компании АО "Мособлэнерго" на сайте центра раскрытия
            корпоративной информации
          </a>
        </p>

        <ul>
          {investorSections &&
            investorSections.map((item, index) => (
              <li key={index} className="investorSections__item">
                <Link
                  className="link-row link-row--change"
                  to={`/investors/${item.id}`} // Здесь заменяем href на to
                >
                  <span className="link-row__text">
                    {item.attributes.title}
                  </span>
                  <div className="link-row__wrap-arrow">
                    <svg className="nav-menu__arrow">
                      <path
                        d="M34.7143 9L39 5M39 5L34.7143 0.999999M39 5L1 5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </motion.div>
  );
}

// import React, { useEffect, useState } from "react";
// import { addressServer } from "../../config";
// import { motion } from "framer-motion";
// import TopImage from "../../components/TopImage";
// import img4c2c362e8d8fa557788c556795d32fae from "../../img/photo_5343684875758200971_y.jpg";

// export default function InformationOnBonds() {
//   const [informationDisclosures, setInformationDisclosures] = useState([]);

//   useEffect(() => {
//     fetch(
//       `${addressServer}/api/information-disclosures?populate[0]=groupInfo&populate[1]=groupInfo.list_files&populate[2]=groupInfo.list_files.file`
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) =>
//         setInformationDisclosures(
//           data.data.sort((a, b) => a.attributes.sort - b.attributes.sort)
//         )
//       )
//       .catch((err) => {
//         console.log(err);
//         setInformationDisclosures([]);
//       });
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         image={img4c2c362e8d8fa557788c556795d32fae}
//         title={"ИНВЕСТОРАМ"}
//       />

//       <div className="page-grid__content" id="content">
//         {/* Верхушка */}
//         <p style={{ textAlign: "center", marginBottom: "10px" }}>
//           <a
//             className="planned-notification__link"
//             style={{
//               border: "1px solid rgb(227, 112, 33)",
//               boxShadow: "0px 0px 9px 3px rgba(227, 112, 33, 0.2)",
//             }}
//             href={`${addressServer}/uploads/20231123_Mosoblenergo_press_reliz_rus_5a57749dff.pdf?updated_at=2023-11-24T05:19:45.894Z`}
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Кредитный рейтинг компании АО "Мособлэнерго" на уровне АА+(RU),
//             прогноз «Стабильный»
//           </a>
//         </p>
//         <p style={{ textAlign: "center" }}>
//           <a
//             className="planned-notification__link"
//             href="https://www.e-disclosure.ru/portal/company.aspx?id=15188"
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             Карточка компании АО "Мособлэнерго" на сайте центра раскрытия
//             корпоративной информации
//           </a>
//         </p>

//         {/* Вот тут дальше будет код, который всё мапит со страпи */}
//       </div>
//     </motion.div>
//   );
// }
