import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Spin, Card, Typography, Row, Col } from "antd";
import axios from "axios";
import TopImage from "../../components/TopImage";
import MarkDownText from "../../components/MarkDownText/MarkDownText";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import img5d1dda82e3641ae19df5a51619ffb49c from "../../img/5d1dda82e3641ae19df5a51619ffb49c.jpg";

const { Title, Paragraph } = Typography;
const addressServer =
  process.env.REACT_APP_BACKEND_SERVER || "https://mosoblenergo.ru/back";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);

  // Параметры для настройки отображения фото
  const layout = "rows"; // Возможные значения: "rows", "columns", "masonry"
  const spacing = 10; // Расстояние между фото в пикселях
  const padding = 10; // Внутренний отступ фото в пикселях
  const width = 100; // Ширина фото в процентах от доступного пространства

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
          images: response.data.data.attributes.photos.data.map((photo) => ({
            src: `${addressServer}${photo.attributes.url}`,
            width: photo.attributes.width,
            height: photo.attributes.height,
          })),
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
          <Col span={24}>
            <PhotoAlbum
              layout={layout}
              photos={event.images}
              spacing={spacing}
              padding={padding}
              width={`${width}%`}
              onClick={({ index }) => setIndex(index)}
            />
          </Col>
          <Col span={24}>
            <Title level={2}>{event.date}</Title>
            <Paragraph>
              <MarkDownText>{event.description}</MarkDownText>
            </Paragraph>
          </Col>
        </Row>
      </Card>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={event.images}
      />
    </motion.div>
  );
}
