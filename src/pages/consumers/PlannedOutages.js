import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Disconnect from "../../components/Disconnect/Disconnect";
import TopImage from "../../components/TopImage";
import { DateTime } from "luxon";
import img1327b1c06a19e1362c9d6bc894981c97 from "../../img/1327b1c06a19e1362c9d6bc894981c97.jpg";
import telegramQR from "../../img/planned/YQR.svg";
import alarm from "../../img/planned/alarm_alert_bell.svg";
import axios from "axios";
import "./PlannedOutages.css";

export default function PlannedOutages() {
  const [disconnects, setDisconnects] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://nopowersupply.mosoblenergo.ru/station/api/avarijnye-otklyucheniyas"
      )
      .then((res) => setDisconnects(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage
        // image={img1327b1c06a19e1362c9d6bc894981c97}
        title={"Плановые отключения"}
      />
      <div className="page-grid__content" id="content">
        <div
          className="text-area creditRating"
          style={{
            margin: "0 auto",
            padding: "10px",
            flexDirection: "column",
            maxWidth: "100%",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ marginBottom: "20px", color: "red" }}>
            Аварийные отключения
          </h2>
          {disconnects.length < 1 && <h3>На данный момент отключений нет</h3>}
          {disconnects.length > 0 && (
            <div className="table-container">
              <table style={{ maxWidth: "200%" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        backgroundColor: "#f2f2f2",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        verticalAlign: "middle"
                      }}
                    >
                      Городской
                      <br /> округ
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        backgroundColor: "#f2f2f2",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        verticalAlign: "middle"
                      }}
                    >
                      Улицы
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        backgroundColor: "#f2f2f2",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        verticalAlign: "middle"
                      }}
                    >
                      Дата и время <br />
                      отключения
                    </th>
                    <th
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        backgroundColor: "#f2f2f2",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        verticalAlign: "middle"
                      }}
                    >
                      Прогнозируемое <br />
                      время включения <br />в течение (часов)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {disconnects.map((item, index) => (
                    <tr key={index}>
                      <td style={{ textAlign: "center", padding: "10px" }}>
                        {item.attributes.go}
                      </td>
                      <td style={{ textAlign: "center", padding: "10px" }}>
                        {item.attributes.addressDisconnected}
                      </td>
                      <td style={{ textAlign: "center", padding: "10px" }}>
                        {DateTime.fromISO(
                          item.attributes.dateDisconnected
                        ).toLocaleString(DateTime.DATETIME_SHORT)}
                      </td>
                      <td style={{ textAlign: "center", padding: "10px" }}>
                        {item.attributes.durationSolution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="subscription-block">
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
            Плановые отключения
          </h2>
          <div className="planned-notification">
            <div className="planned-notification__area planned-notification__area_col">
              <div className="planned-notification__title-area">
                <img src={alarm} className="planned-notification__picture" />
                <h3 className="planned-notification__title">
                  Уведомления в Telegram о возможных плановых отключениях по
                  указанному адресу
                </h3>
              </div>
              <div className="planned-notification__text">
                <p>
                  Уважаемые потребители! АО «Мособлэнерго» предлагает вам
                  воспользоваться удобным способом получения информации о
                  возможных <span style={{ fontWeight: "700" }}>плановых</span>{" "}
                  (НЕ аварийных) отключениях электроэнергии в сетях компании
                  через специальный{" "}
                  <a
                    style={{
                      color: "#0061aa",
                      textDecorationColor: "#85a0b5",
                      textDecorationLine: "underline",
                    }}
                    href="https://t.me/Mosoblenergo24_bot"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Telegram-бот
                  </a>{" "}
                </p>
                <p style={{ fontWeight: 600 }}>Подписывайтесь!</p>
              </div>
            </div>
            <div className="planned-notification__area">
              <div className="planned-notification__link-area">
                <img
                  src={telegramQR}
                  alt="qr"
                  className="planned-notification__qr"
                />
                <a
                  type="button"
                  className="planned-notification__link"
                  href="https://t.me/Mosoblenergo24_bot"
                  target="_blank"
                >
                  Перейти в Telegram
                </a>
              </div>
            </div>
          </div>
          <Disconnect />
          <div className="text-area">
            <p>
              Актуальную информацию о плановых отключениях можно получить в
              соцсетях компании:
            </p>
            <ul>
              <li>
                <a
                  href="https://vk.com/mosoblenergo24"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://vk.com/mosoblenergo24
                </a>
              </li>
              <li>
                <a
                  href="https://ok.ru/mosoblenergo24"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://ok.ru/mosoblenergo24
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/mosoblenergo24"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://t.me/mosoblenergo24
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}



// import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import Disconnect from "../../components/Disconnect/Disconnect";
// import TopImage from "../../components/TopImage";
// import { DateTime } from "luxon";
// import img1327b1c06a19e1362c9d6bc894981c97 from "../../img/1327b1c06a19e1362c9d6bc894981c97.jpg";
// import telegramQR from "../../img/planned/YQR.svg";
// import alarm from "../../img/planned/alarm_alert_bell.svg";
// import axios from "axios";
// import "./PlannedOutages.css";

// export default function PlannedOutages() {
//   const [disconnects, setDisconnects] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://nopowersupply.mosoblenergo.ru/station/api/avarijnye-otklyucheniyas"
//       )
//       .then((res) => setDisconnects(res.data.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         // image={img1327b1c06a19e1362c9d6bc894981c97}
//         title={"Плановые отключения"}
//       />
//       <div className="page-grid__content" id="content">
//         <div
//           className="text-area creditRating"
//           style={{
//             margin: "0 auto",
//             padding: "10px",
//             flexDirection: "column",
//             maxWidth: "100%",
//             marginBottom: "40px",
//           }}
//         >
//           <h2 style={{ marginBottom: "20px", color: "red" }}>
//             Аварийные отключения
//           </h2>
//           {disconnects.length < 1 && <h3>На данный момент отключений нет</h3>}
//           {disconnects.length > 0 && (
//             <div className="table-container">
//               <table style={{ maxWidth: "200%" }}>
//                 <thead>
//                   <tr>
//                     <th
//                       style={{
//                         textAlign: "center",
//                         padding: "10px",
//                         backgroundColor: "#f2f2f2",
//                         fontWeight: "bold",
//                         fontSize: "1rem",
//                         verticalAlign: "middle" 
//                       }}
//                     >
//                       Городской
//                       <br /> округ
//                     </th>
//                     <th
//                       style={{
//                         textAlign: "center",
//                         padding: "10px",
//                         backgroundColor: "#f2f2f2",
//                         fontWeight: "bold",
//                         fontSize: "1rem",
//                         verticalAlign: "middle"
//                       }}
//                     >
//                       Улицы
//                     </th>
//                     <th
//                       style={{
//                         textAlign: "center",
//                         padding: "10px",
//                         backgroundColor: "#f2f2f2",
//                         fontWeight: "bold",
//                         fontSize: "1rem",
//                         verticalAlign: "middle"
//                       }}
//                     >
//                       Дата и время <br />
//                       отключения
//                     </th>
//                     <th
//                       style={{
//                         textAlign: "center",
//                         padding: "10px",
//                         backgroundColor: "#f2f2f2",
//                         fontWeight: "bold",
//                         fontSize: "1rem",
//                         verticalAlign: "middle" 
//                       }}
//                     >
//                       Прогнозируемое <br />
//                       время включения <br />в течение (часов)
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {disconnects.map((item, index) => (
//                     <tr key={index}>
//                       <td style={{ textAlign: "center", padding: "10px" }}>
//                         {item.attributes.go}
//                       </td>
//                       <td style={{ textAlign: "center", padding: "10px" }}>
//                         {item.attributes.addressDisconnected}
//                       </td>
//                       <td style={{ textAlign: "center", padding: "10px" }}>
//                         {DateTime.fromISO(
//                           item.attributes.dateDisconnected
//                         ).toLocaleString(DateTime.DATETIME_SHORT)}
//                       </td>
//                       <td style={{ textAlign: "center", padding: "10px" }}>
//                         {item.attributes.durationSolution}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//         <div className="subscription-block">
//           <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
//             Плановые отключения
//           </h2>
//           <div className="planned-notification">
//             <div className="planned-notification__area planned-notification__area_col">
//               <div className="planned-notification__title-area">
//                 <img src={alarm} className="planned-notification__picture" />
//                 <h3 className="planned-notification__title">
//                   Уведомления в Telegram о возможных плановых отключениях по
//                   указанному адресу
//                 </h3>
//               </div>
//               <div className="planned-notification__text">
//                 <p>
//                   Уважаемые потребители! АО «Мособлэнерго» предлагает вам
//                   воспользоваться удобным способом получения информации о
//                   возможных <span style={{ fontWeight: "700" }}>плановых</span>{" "}
//                   (НЕ аварийных) отключениях электроэнергии в сетях компании
//                   через специальный{" "}
//                   <a
//                     style={{
//                       color: "#0061aa",
//                       textDecorationColor: "#85a0b5",
//                       textDecorationLine: "underline",
//                     }}
//                     href="https://t.me/Mosoblenergo24_bot"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     Telegram-бот
//                   </a>{" "}
//                 </p>
//                 <p style={{ fontWeight: 600 }}>Подписывайтесь!</p>
//               </div>
//             </div>
//             <div className="planned-notification__area">
//               <div className="planned-notification__link-area">
//                 <img
//                   src={telegramQR}
//                   alt="qr"
//                   className="planned-notification__qr"
//                 />
//                 <a
//                   type="button"
//                   className="planned-notification__link"
//                   href="https://t.me/Mosoblenergo24_bot"
//                   target="_blank"
//                 >
//                   Перейти в Telegram
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="text-area">
//             <p>
//               Актуальную информацию о плановых отключениях можно получить в
//               соцсетях компании:
//             </p>
//             <ul>
//               <li>
//                 <a
//                   href="https://vk.com/mosoblenergo24"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   https://vk.com/mosoblenergo24
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://ok.ru/mosoblenergo24"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   https://ok.ru/mosoblenergo24
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://t.me/mosoblenergo24"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 >
//                   https://t.me/mosoblenergo24
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


//Изначальный вариант
// import { motion } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import Disconnect from "../../components/Disconnect/Disconnect";
// import TopImage from "../../components/TopImage";
// import { DateTime } from 'luxon'
// import img1327b1c06a19e1362c9d6bc894981c97 from "../../img/1327b1c06a19e1362c9d6bc894981c97.jpg";
// import telegramQR from "../../img/planned/YQR.svg";
// import alarm from "../../img/planned/alarm_alert_bell.svg";
// import axios from "axios";

// export default function PlannedOutages() {
//   const [disconnects, setDisconnects] = useState([])
//   useEffect(() => {
//     axios.get('https://nopowersupply.mosoblenergo.ru/station/api/avarijnye-otklyucheniyas')
//       .then(res => setDisconnects(res.data.data))
//       .catch(err => console.log(err))
//   }, [])
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage
//         //image={img1327b1c06a19e1362c9d6bc894981c97}
//         title={"Плановые отключения"}
//       />
//       <div className="page-grid__content" id="content">
//         <div className="text-area creditRating" style={{ margin: "0 auto", padding: "10px", flexDirection: "column", maxWidth: "100%", marginBottom: "40px" }}>
//           <h2 style={{ marginBottom: "20px",color:"red" }}>Аварийные отключения</h2>
//           {disconnects.length < 1 && <h3>На данный момент отключений нет</h3>}
//           {disconnects.length > 0 &&
//             <div className="wrap-table" style={{ maxWidth: "100%" }}>
//               <table style={{ maxWidth: "200%" }}>

//                 <tbody>
//                   <tr>
//                     <th style={{ textAlign: "center", padding: "10px" }}>Городской<br /> округ</th>
//                     <th style={{ textAlign: "center", padding: "10px" }}>Улицы</th>
//                     <th style={{ textAlign: "center", padding: "10px" }}>Дата и время <br />отключения</th>
//                     <th style={{ textAlign: "center", padding: "10px" }}>Прогнозируемое <br />время включения <br />в течение (часов)</th>
//                   </tr>
//                   {disconnects.map((item, index) =>
//                     <tr key={index}>
//                       <td style={{ textAlign: "center", padding: "10px" }}>{item.attributes.go}</td>
//                       <td style={{ textAlign: "center", padding: "10px" }}>{item.attributes.addressDisconnected}</td>
//                       <td style={{ textAlign: "center", padding: "10px" }}>{DateTime.fromISO(item.attributes.dateDisconnected).toLocaleString(DateTime.DATETIME_SHORT)}</td>
//                       <td style={{ textAlign: "center", padding: "10px" }}>{item.attributes.durationSolution}</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           }
//         </div>
//         <div className="subscription-block">
//           <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Плановые отключения</h2>
//           <div className="planned-notification">
//             <div className="planned-notification__area planned-notification__area_col">
//               <div className="planned-notification__title-area">
//                 <img src={alarm} className="planned-notification__picture" />
//                 <h3 className="planned-notification__title">
//                   Уведомления в Telegram о возможных плановых отключениях по
//                   указанному адресу
//                 </h3>
//               </div>
//               <div className="planned-notification__text">
//                 <p>
//                   Уважаемые потребители! АО «Мособлэнерго» предлагает вам
//                   воспользоваться удобным способом получения информации о
//                   возможных <span style={{ fontWeight: "700" }}>плановых</span>{" "}
//                   (НЕ аварийных) отключениях электроэнергии в сетях компании
//                   через специальный{" "}
//                   <a
//                     style={{
//                       color: "#0061aa",
//                       textDecorationColor: "#85a0b5",
//                       textDecorationLine: "underline",
//                     }}
//                     href="https://t.me/Mosoblenergo24_bot"
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     Telegram-бот
//                   </a>{" "}
//                 </p>
//                 <p style={{ fontWeight: 600 }}>Подписывайтесь!</p>
//               </div>
//             </div>
//             <div className="planned-notification__area">
//               <div className="planned-notification__link-area">
//                 <img
//                   src={telegramQR}
//                   alt="qr"
//                   className="planned-notification__qr"
//                 />
//                 <a
//                   type="button"
//                   className="planned-notification__link"
//                   href="https://t.me/Mosoblenergo24_bot"
//                   target="_blank"
//                 >
//                   Перейти в Telegram
//                 </a>
//               </div>
//             </div>
//           </div>
//           <Disconnect />
//           <div className="text-area">
//             <p>
//               Актуальную информацию о плановых отключениях можно получить в
//               соцсетях компании:
//             </p>
//             <ul>
//               <li>
//                 <a
//                   href="https://vk.com/mosoblenergo24"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 //rel="nofollow"
//                 >
//                   https://vk.com/mosoblenergo24
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://ok.ru/mosoblenergo24"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 //rel="nofollow"
//                 >
//                   https://ok.ru/mosoblenergo24
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://t.me/mosoblenergo24"
//                   rel="noopener noreferrer"
//                   target="_blank"
//                 //rel="nofollow"
//                 >
//                   https://t.me/mosoblenergo24
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
