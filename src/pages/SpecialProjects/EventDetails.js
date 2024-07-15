import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Spin, Card, Typography, Row, Col } from "antd";
import axios from "axios";
import TopImage from "../../components/TopImage";
import img5d1dda82e3641ae19df5a51619ffb49c from "../../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";

const { Title, Paragraph } = Typography;
const addressServer =
  process.env.REACT_APP_BACKEND_SERVER || "https://mosoblenergo.ru/back";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `${addressServer}/api/speczialnye-proekties/${id}?populate=*`
        );
        const eventData = {
          id: response.data.data.id,
          title: response.data.data.attributes.title,
          date: new Date(
            response.data.data.attributes.createdAt
          ).toLocaleDateString(),
          description: response.data.data.attributes.description,
          image: `${addressServer}${response.data.data.attributes.mainPhoto.data.attributes.url}`,
        };
        setEvent(eventData);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id]);

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
      <Card style={{ margin: "20px" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <img
              src={event.image}
              alt={event.title}
              style={{ width: "100%" }}
            />
          </Col>
          <Col xs={24} sm={12} md={16} lg={18}>
            <Title level={2}>{event.title}</Title>
            <Paragraph>
              <strong>Дата:</strong> {event.date}
            </Paragraph>
            <Paragraph>
              <div dangerouslySetInnerHTML={{ __html: event.description }} />
            </Paragraph>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
}
