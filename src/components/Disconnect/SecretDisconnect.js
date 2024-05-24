import React, { useEffect, useState } from "react";
import qs from "qs";
import { DateTime } from "luxon";
import axios from "axios";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./SecretDisconnect.module.css";

export default function SecretDisconnect() {
  const [disconnects, setDisconnects] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    DateTime.now().plus({ days: 1 }).toISO()
  );

  useEffect(() => {
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
                    $gte: DateTime.fromJSDate(selectedDate).startOf("day").ts,
                  },
                },
                {
                  begin: {
                    $lte: DateTime.fromJSDate(selectedDate).endOf("day").ts,
                  },
                },
              ],
            },
            {
              $and: [
                {
                  end: {
                    $gte: DateTime.fromJSDate(selectedDate).startOf("day").ts,
                  },
                },
                {
                  end: {
                    $lte: DateTime.fromJSDate(selectedDate).endOf("day").ts,
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
    console.log(query);
    axios
      .get(
        "https://nopowersupply.mosoblenergo.ru/back/api/otklyuchenies?" +
          query +
          "&pagination[pageSize]=100000"
      )
      .then((response) => {
        const groupedData = response.data.data.reduce((acc, item) => {
          const city =
            item.attributes.uzel_podklyucheniya.data.attributes.gorod.data.attributes.name.replace(
              /^г\s/,
              ""
            );
          let streets =
            item.attributes.uzel_podklyucheniya.data.attributes.uliczas.data
              .map(
                (street) =>
                  street.attributes.name + ` ` + street.attributes.comment
              )
              .join(", ");

          // Удаляем все упоминания "ул. г Истра" и "г Истра"
          const cityPattern = new RegExp(
            `(ул\\.\\s*г\\с*${city},\\s*)|(г\\с*${city},\\с*)|(ул\\.\\с*г\\с*${city})|(г\\с*${city})`,
            "gi"
          );
          streets = streets.replace(cityPattern, "").trim();

          const comment = item.attributes.comment || "Без комментария";
          const begin = DateTime.fromISO(item.attributes.begin).toFormat(
            "dd.MM.yyyy (HH:mm"
          );
          const end = DateTime.fromISO(item.attributes.end).toFormat("HH:mm");
          const formattedDisconnect = {
            text: `${begin}-${end}) г. о. ${city}, ${streets}.${comment}`,
            addedAt: DateTime.fromISO(item.attributes.updatedAt).toMillis(), // Записываем время последнего обновления записи
          };

          if (!acc[city]) {
            acc[city] = [];
          }
          if (
            !acc[city].some((disconnect) => disconnect.text.includes(streets))
          ) {
            acc[city].push(formattedDisconnect);
          }

          return acc;
        }, {});

        setDisconnects(groupedData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedDate]);

  const prefix =
    "«Мособлэнерго» информирует о возможных плановых отключениях электроэнергии. На энергообъектах, обслуживаемых компанией, будут проводиться технические работы для повышения надежности электроснабжения потребителей. Для обеспечения безопасного выполнения работ отключение электричества планируется:";
  const sufix =
    "По вопросам отключений и качества электроснабжения обращаться на «Горячую линию» АО «Мособлэнерго» по телефону 8(495) 99-500-99.";

  const highlightStyle = { backgroundColor: "red" }; // Стиль для выделения новых записей

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage title={""} />
      <div style={{ whiteSpace: "pre-wrap", padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontWeight: 700 }}>Дата отключений: </span>
          <DatePicker
            showIcon
            selected={selectedDate}
            onChange={(date) => {
              console.log(date);
              setSelectedDate(date);
            }}
            dateFormat="dd.MM.yyyy"
            // className={styles.datepicker}
            //  locale="ru"
            //  style={{zIndex:"1000"}}
          />
        </div>
        {Object.keys(disconnects).length === 0 ? (
          <p>Нет запланированных отключений на выбранную дату.</p>
        ) : (
          Object.entries(disconnects).map(([city, disconnects]) => (
            <div
              key={city}
              style={{
                marginBottom: "20px",
                borderBottom: "1px solid #ddd",
                paddingBottom: "10px",
              }}
            >
              <h2>{`В городском округе ${city} ${DateTime.fromJSDate(
                selectedDate
              ).toFormat("d MMMM", {
                locale: "ru",
              })} возможны плановые отключения электроэнергии`}</h2>
              <p>{prefix}</p>
              {disconnects.map((disconnect, index) => (
                <p
                  key={index}
                  // style={disconnect.addedAt > lastCheck ? highlightStyle : {}}
                >
                  {disconnect.text}
                </p>
                // Если запись добавлена после последнего захода, выделяем её
              ))}
              <p>{sufix}</p>
              <button
                className={styles.button}
                onClick={() => {
                  let text = `В городском округе ${city} ${DateTime.fromJSDate(
                    selectedDate
                  ).toFormat("d MMMM", {
                    locale: "ru",
                  })} возможны плановые отключения электроэнергии\r\n`;
                  text = text + prefix + "\r\n";
                  disconnects.forEach((item) => {
                    text = text + item.text + "\r\n";
                  });
                  text = text + sufix;
                  navigator.clipboard.writeText(text);
                }}
              >
                Копировать в буфер
              </button>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}

// import React, { useEffect, useState } from "react";
// import qs from "qs";
// import { DateTime } from "luxon";
// import axios from "axios";
// import { motion } from "framer-motion";
// import TopImage from "../../components/TopImage";
// import styles from "./SecretDisconnect.module.css";

// export default function SecretDisconnect() {
//   const [disconnects, setDisconnects] = useState([]);
//   const [lastCheck, setLastCheck] = useState(Date.now()); // Время последнего посещения страницы
//   const currentDate = DateTime.now().plus({ days: 1 });

//   const query = qs.stringify(
//     {
//       populate: {
//         uzel_podklyucheniya: { populate: { uliczas: true, gorod: true } },
//       },
//       filters: {
//         $or: [
//           {
//             $and: [
//               {
//                 begin: {
//                   $gte: currentDate.startOf("day").ts,
//                 },
//               },
//               {
//                 begin: {
//                   $lte: currentDate.endOf("day").ts,
//                 },
//               },
//             ],
//           },
//           {
//             $and: [
//               {
//                 end: {
//                   $gte: currentDate.startOf("day").ts,
//                 },
//               },
//               {
//                 end: {
//                   $lte: currentDate.endOf("day").ts,
//                 },
//               },
//             ],
//           },
//         ],
//       },
//     },
//     {
//       encodeValuesOnly: true,
//     }
//   );

//   useEffect(() => {
//     axios
//       .get(
//         "https://nopowersupply.mosoblenergo.ru/back/api/otklyuchenies?" +
//           query +
//           "&pagination[pageSize]=100000"
//       )
//       .then((response) => {
//         const groupedData = response.data.data.reduce((acc, item) => {
//           const city =
//             item.attributes.uzel_podklyucheniya.data.attributes.gorod.data.attributes.name.replace(
//               /^г\s/,
//               ""
//             );
//           let streets =
//             item.attributes.uzel_podklyucheniya.data.attributes.uliczas.data
//               .map((street) => street.attributes.name + ` `+ street.attributes.comment)
//               .join(", ");

//           // Удаляем все упоминания "ул. г Истра" и "г Истра"
//           const cityPattern = new RegExp(
//             `(ул\\.\\s*г\\s*${city},\\s*)|(г\\s*${city},\\s*)|(ул\\.\\s*г\\s*${city})|(г\\s*${city})`,
//             "gi"
//           );
//           streets = streets.replace(cityPattern, "").trim();

//           const comment = item.attributes.comment || "Без комментария";
//           const begin = DateTime.fromISO(item.attributes.begin).toFormat(
//             "dd.MM.yyyy (HH:mm"
//           );
//           const end = DateTime.fromISO(item.attributes.end).toFormat("HH:mm");
//           const formattedDisconnect = {
//             text: `${begin}-${end}) г. о. ${city}, ${streets}.${comment}`,
//             addedAt: DateTime.fromISO(item.attributes.updatedAt).toMillis(), // Записываем время последнего обновления записи
//           };

//           if (!acc[city]) {
//             acc[city] = [];
//           }
//           if (
//             !acc[city].some((disconnect) => disconnect.text.includes(streets))
//           ) {
//             acc[city].push(formattedDisconnect);
//           }

//           return acc;
//         }, {});

//         setDisconnects(groupedData);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [query]);

//   const prefix =
//     "«Мособлэнерго» информирует о возможных плановых отключениях электроэнергии. На энергообъектах, обслуживаемых компанией, будут проводиться технические работы для повышения надежности электроснабжения потребителей. Для обеспечения безопасного выполнения работ отключение электричества планируется:";
//   const sufix =
//     "По вопросам отключений и качества электроснабжения обращаться на «Горячую линию» АО «Мособлэнерго» по телефону 8(495) 99-500-99.";

//   const highlightStyle = { backgroundColor: "red" }; // Стиль для выделения новых записей

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage title={""} />
//       <div style={{ whiteSpace: "pre-wrap", padding: "20px" }}>
//         {Object.keys(disconnects).length === 0 ? (
//           <p>Нет запланированных отключений на сегодня.</p>
//         ) : (
//           Object.entries(disconnects).map(([city, disconnects]) => (
//             <div
//               key={city}
//               style={{
//                 marginBottom: "20px",
//                 borderBottom: "1px solid #ddd",
//                 paddingBottom: "10px",
//               }}
//             >
//               <h2>{`В городском округе ${city} ${currentDate.toFormat(
//                 "d MMMM",
//                 {
//                   locale: "ru",
//                 }
//               )} возможны плановые отключения электроэнергии`}</h2>
//               <p>{prefix}</p>
//               {disconnects.map((disconnect, index) => (
//                 <p
//                   key={index}
//                   style={disconnect.addedAt > lastCheck ? highlightStyle : {}}
//                 >
//                   {disconnect.text}
//                 </p>
//                 // Если запись добавлена после последнего захода, выделяем её
//               ))}
//               <p>{sufix}</p>
//               <button
//                 className={styles.button}
//                 onClick={() => {
//                   let text = `В городском округе ${city} ${DateTime.fromJSDate(
//                     currentDate
//                   ).toFormat("d MMMM", {
//                     locale: "ru",
//                   })} возможны плановые отключения электроэнергии\r\n`;
//                   text = text + prefix + "\r\n";
//                   disconnects.forEach((item) => {
//                     text = text + item.text + "\r\n";
//                   });
//                   text = text + sufix;
//                   navigator.clipboard.writeText(text);
//                 }}
//               >
//                 Копировать в буфер
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </motion.div>
//   );
// }
