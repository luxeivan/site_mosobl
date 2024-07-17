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
import styles from './EventDetails.module.css'

const { Title, Paragraph, Text } = Typography;
const addressServer =
  process.env.REACT_APP_BACKEND_SERVER || "https://mosoblenergo.ru/back";

export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);

  // Параметры для настройки отображения фото
  const layout = "columns"; // Возможные значения: "rows", "columns", "masonry"
  const spacing = 20; // Расстояние между фото в пикселях
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
          date: response.data.data.attributes.dateEvent ? new Date(
            response.data.data.attributes.dateEvent
          ).toLocaleDateString() : false,
          description: response.data.data.attributes.description,
          mainPhoto: `${addressServer}${response.data.data.attributes.mainPhoto.data.attributes.url}`,
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
        image={event.mainPhoto}
        title={event.title}
      />
      <div className="container" style={{ padding: 20 }}>

        <Row gutter={[32, 32]}>
          <Col span={24}>
            {/* <Title level={1}>{event.title}</Title> */}
            {event.date &&
              <Paragraph type="secondary">Дата события: {event.date}</Paragraph>
            }
            <MarkDownText>{event.description}</MarkDownText>

          </Col>
          <Col span={24}>
            <PhotoAlbum
              layout={layout}
              photos={event.images}
              spacing={spacing}
              columns={event.images > 10 ? 4 : 3}
              padding={padding}

              width={`${width}%`}
              onClick={({ index }) => setIndex(index)}
              renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                <div
                  // href={photo.href}
                  className={styles.photo}
                  style={wrapperStyle}
                // target="_blank"
                // rel="noreferrer noopener"
                // style={{border:"1px solid black"}}
                >
                  {renderDefaultPhoto({ wrapped: true })}
                </div>
              )}
            />
          </Col>
        </Row>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={event.images}
      />
    </motion.div>
  );
}
