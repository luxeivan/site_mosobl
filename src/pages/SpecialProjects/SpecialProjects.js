import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, Col, Flex, Row, Spin, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TopImage from "../../components/TopImage";
import MarkDownText from "../../components/MarkDownText/MarkDownText";
import img5d1dda82e3641ae19df5a51619ffb49c from "../../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
import styles from "./SpecialProjects.module.css";

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
        console.log(response.data)
        const eventData = response.data.data.map((event) => ({
          id: event.id,
          title: event.attributes.title,
          date: event.attributes.dateEvent
            ? new Date(event.attributes.dateEvent).toLocaleDateString()
            : false,
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
      <div className="container">

      {/* <div className={styles.content} id="content"> */}
       <Flex className={styles.content} gap={20} align="stretch" wrap>

          {events.sort((a, b) => a.sort - b.sort).map((event) => (
            
              <Card
                hoverable
                className={styles.card}
                cover={
                  <div className={styles.cover}>
                    <img alt={event.title} src={event.image} />
                  </div>
                }
                onClick={() => navigate(event.link)}
              >
                <div className={styles.cardContent}>
                  <Typography.Title level={2}>{event.title}</Typography.Title>
                  <Typography.Paragraph type="secondary">
                    {event.date ? event.date : " "}
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    {event.shortDescription}
                  </Typography.Paragraph>
                </div>
              </Card>
            ))}
        </Flex>

        {/* </div> */}
      </div>
    </motion.div>
  );
}

//Старое
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Card, Col, Row, Spin } from "antd";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import TopImage from "../../components/TopImage";
// import MarkDownText from "../../../src/components/MarkDownText/MarkDownText";
// import img5d1dda82e3641ae19df5a51619ffb49c from "../../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";
// import "./SpecialProjects.css";

// const { Meta } = Card;

// const addressServer =
//   process.env.REACT_APP_BACKEND_SERVER || "https://mosoblenergo.ru/back";

// export default function SpecialProjects() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get(
//           `${addressServer}/api/speczialnye-proekties?populate=*`
//         );
//         const eventData = response.data.data.map((event) => ({
//           id: event.id,
//           title: event.attributes.title,
//           date: new Date(event.attributes.createdAt).toLocaleDateString(),
//           shortDescription: event.attributes.shortDescription,
//           description: event.attributes.description,
//           image: `${addressServer}${event.attributes.mainPhoto.data.attributes.url}`,
//           link: `/specialProjects/${event.id}`,
//         }));
//         setEvents(eventData);
//       } catch (error) {
//         console.error("Ошибка при загрузке данных:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchEvents();
//   }, []);

//   if (loading) {
//     return <Spin size="large" style={{ display: "block", margin: "0 auto" }} />;
//   }

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
//                 className="card-grid"
//                 cover={
//                   <div className="card-cover">
//                     <img alt={event.title} src={event.image} />
//                   </div>
//                 }
//                 onClick={() => navigate(event.link)}
//               >
//                 <div className="card-content">
//                   <Meta
//                     className="card-meta"
//                     title={event.title}
//                     description={event.date}
//                   />
//                   <p className="card-description">{event.shortDescription}</p>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </motion.div>
//   );
// }
