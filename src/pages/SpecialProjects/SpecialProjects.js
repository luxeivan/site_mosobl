import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, Col, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopImage from "../../components/TopImage";
import img5d1dda82e3641ae19df5a51619ffb49c from "../../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";

const { Meta } = Card;

const addressServer =
  process.env.REACT_APP_BACKEND_SERVER || "https://mosoblenergo.ru/back";

export default function SpecialProjects() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${addressServer}/api/speczialnye-proekties?populate=*`
        );
        const eventData = response.data.data.map((event) => ({
          id: event.id,
          title: event.attributes.title,
          date: new Date(event.attributes.createdAt).toLocaleDateString(),
          shortDescription: event.attributes.shortDescription,
          description: event.attributes.description,
          image: `${addressServer}${event.attributes.mainPhoto.data.attributes.url}`,
          link: `/specialProjects/${event.id}`,
        }));
        setEvents(eventData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return <Spin size="large" style={{ display: "block", margin: "0 auto" }} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        image={img5d1dda82e3641ae19df5a51619ffb49c}
        title={"Специальные проекты"}
      />
      <div className="page-grid__content" id="content">
        <Row gutter={[16, 16]}>
          {events.map((event) => (
            <Col key={event.id} span={8}>
              <Card
                hoverable
                cover={<img alt={event.title} src={event.image} />}
                onClick={() => navigate(event.link)}
              >
                <Meta title={event.title} description={event.date} />
                <p>{event.shortDescription}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </motion.div>
  );
}

// import React from "react";
// import { motion } from "framer-motion";
// import { Card, Col, Row } from "antd";
// import TopImage from "../../components/TopImage";
// import img5d1dda82e3641ae19df5a51619ffb49c from "../../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
// import exampleImage from "../../img/RG.jpeg";
// import exampleImageTwo from "../../img/RG2.jpeg";

// const { Meta } = Card;

// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // const addressServer = process.env.REACT_APP_BACKEND_SERVER;

// // const [events, setEvents] = useState([]);

// // useEffect(() => {
// //   const fetchEvents = async () => {
// //     try {
// //       const response = await axios.get(${addressServer}/events);
// //       setEvents(response.data);
// //     } catch (error) {
// //       console.error("Ошибка при загрузке данных:", error);
// //     }
// //   };
// //   fetchEvents();
// // }, []);

// // Моковые данные
// const events = [
//   {
//     id: 1,
//     title: "Событие 1",
//     date: "2024-07-15",
//     description: "Описание события 1",
//     image: exampleImage,
//     link: "https://example.com/event1",
//   },
//   {
//     id: 2,
//     title: "Событие 2",
//     date: "2024-08-10",
//     description: "Описание события 2",
//     image: exampleImageTwo,
//     link: "https://example.com/event2",
//   },
// ];

// export default function SpecialProjects() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         image={img5d1dda82e3641ae19df5a51619ffb49c}
//         title={"Специальные проекты"}
//       />
//       <div className="page-grid__content" id="content">
//         <Row gutter={[16, 16]}>
//           {events.map((event) => (
//             <Col key={event.id} span={8}>
//               <Card
//                 hoverable
//                 cover={<img alt={event.title} src={event.image} />}
//                 onClick={() => window.open(event.link, "_blank")}
//               >
//                 <Meta title={event.title} description={event.date} />
//                 <p>{event.description}</p>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </motion.div>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import pdf from "../img/pdf.svg";
// import Aktualnyj_address from "../img/specialProjects/Aktualnyj_adres_i_telefony_Czentra_SPID.jpg";
// import img5d1dda82e3641ae19df5a51619ffb49c from "../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
// import TopImage from "../components/TopImage";
// import { addressServer } from "../config";

// export default function SpecialProjects() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         image={img5d1dda82e3641ae19df5a51619ffb49c}
//         title={"Специальные проекты"}
//       />
//       <div className="page-grid__content" id="content">
//         <div className="row-docs-age">
//           <a
//             className="doc-line"
//             href={`${addressServer}/uploads/Profilaktika_VI_Ch_dlya_rabotayushhego_naseleniya_2023_fcab394e2b.pdf?updated_at=2023-09-27T07:47:38.961Z`}
//             download=""
//             rel="noopener noreferrer"
//             target="_blank"
//           >
//             <div className="doc-line__wrap-icon">
//               <img src={pdf} alt="icon pdf" />
//             </div>
//             <div className="doc-line__wrap-text">
//               <span className="doc-line__name">
//                 Профилактика ВИЧ для работающего населения 2023
//               </span>
//               <span className="doc-line__file-info">pdf, 2 МБ</span>
//             </div>
//           </a>
//         </div>
//         <img
//           src={Aktualnyj_address}
//           alt="Aktualnyj_adres_i_telefony_Czentra_SPID"
//         />
//       </div>
//     </motion.div>
//   );
// }
