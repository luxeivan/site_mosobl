import React, { useEffect, useState } from "react";
import qs from "qs";
import { DateTime } from "luxon";
import axios from "axios";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";

export default function SecretDisconnect() {
  const [disconnects, setDisconnects] = useState([]);
  const currentDate = new Date();

  const query = qs.stringify(
    {
      populate: {
        uzel_podklyucheniya: { populate: { uliczas: true, gorod: true } },
      },
      filters: {
        $or: [
          {
            $and: [
              {
                begin: {
                  $gte: DateTime.fromMillis(
                    parseInt(currentDate.getTime())
                  ).startOf("day").ts,
                },
              },
              {
                begin: {
                  $lte: DateTime.fromMillis(
                    parseInt(currentDate.getTime())
                  ).endOf("day").ts,
                },
              },
            ],
          },
          {
            $and: [
              {
                end: {
                  $gte: DateTime.fromMillis(
                    parseInt(currentDate.getTime())
                  ).startOf("day").ts,
                },
              },
              {
                end: {
                  $lte: DateTime.fromMillis(
                    parseInt(currentDate.getTime())
                  ).endOf("day").ts,
                },
              },
            ],
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  useEffect(() => {
    axios
      .get(
        "https://nopowersupply.mosoblenergo.ru/back/api/otklyuchenies?" +
          query +
          "&pagination[pageSize]=100000"
      )
      .then((response) => {
        const groupedData = response.data.data.reduce((acc, item) => {
          const city =
            item.attributes.uzel_podklyucheniya.data.attributes.gorod.data
              .attributes.name.replace(/^г\s/, '');
          const streets = item.attributes.uzel_podklyucheniya.data.attributes.uliczas.data
            .map((street) => `ул. ${street.attributes.name}`)
            .join(", ");
          const comment = item.attributes.comment || "Без комментария";
          const begin = DateTime.fromISO(item.attributes.begin).toFormat(
            "dd.MM.yyyy (HH:mm)"
          );
          const end = DateTime.fromISO(item.attributes.end).toFormat("HH:mm");
          const formattedDisconnect = `${begin}-${end}) г. о. ${city}, ${streets}.${comment}`;

          if (!acc[city]) {
            acc[city] = [];
          }

          // Check for duplicate streets and avoid adding them
          if (!acc[city].some(disconnect => disconnect.includes(streets))) {
            acc[city].push(formattedDisconnect);
          }

          return acc;
        }, {});

        setDisconnects(groupedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage title={""} />
      <div style={{ whiteSpace: "pre-wrap", padding: "20px" }}>
        {Object.keys(disconnects).length === 0 ? (
          <p>Нет запланированных отключений на сегодня.</p>
        ) : (
          Object.entries(disconnects).map(([city, disconnects]) => (
            <div key={city} style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
              <h2>{`В городском округе ${city} ${DateTime.fromJSDate(currentDate).toFormat('d MMMM', { locale: 'ru' })} возможны плановые отключения электроэнергии`}</h2>
              <p>
                «Мособлэнерго» информирует о возможных плановых отключениях электроэнергии. На энергообъектах, обслуживаемых компанией, будут проводиться технические работы для повышения надежности электроснабжения потребителей. Для обеспечения безопасного выполнения работ отключение электричества планируется:
              </p>
              {disconnects.map((disconnect, index) => (
                <p key={index}>{disconnect}</p>
              ))}
              <p>
                По вопросам отключений и качества электроснабжения обращаться на «Горячую линию» АО «Мособлэнерго» по телефону 8(495) 99-500-99.
              </p>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}