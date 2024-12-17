import React from "react";
import { Typography, Button, Flex, Image, Card } from "antd";
import qr_rabota_ru from "../../../img/QR_HH.png";

const { Title, Text } = Typography;

export default function QrCodeHH() {
  return (
    <Card
      style={{
        margin: 10,
        padding: 20,
        borderRadius: 10,
        border: "2px solid #d9d9d9",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Title
        level={3}
        style={{ margin: 0, textAlign: "center", width: "100%" }}
      >
        Все вакансии
      </Title>
      <Flex
        justify="center"
        align="center"
        wrap
        style={{ marginTop: 20, gap: 16 }}
      >
        <Flex vertical style={{ gap: 12, minWidth: 200 }}>
          <Text style={{ textAlign: "center" }}>
            Сканируйте QR или нажмите кнопку:
          </Text>
          <Button
            type="primary"
            href="https://hh.ru/employer/221874"
            className="hh-button"
          >
            Перейти на hh.ru
          </Button>
        </Flex>
        <Image src={qr_rabota_ru} alt="QR Code hh.ru" width={150} />
      </Flex>
    </Card>
  );
}

// import React from "react";
// import { Typography, Button, Flex, Image, Card } from "antd";
// import qr_rabota_ru from "../../../img/QR_HH.png";

// const { Title, Text } = Typography;

// export default function QrCodeHH() {
//   return (
//     <Card
//       style={{
//         margin: 10,
//         padding: 20,
//         borderRadius: 10,
//         border: "2px solid #d9d9d9",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//         position: "relative",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Title level={3} style={{ margin: 0 }}>
//         Все вакансии
//       </Title>
//       <Flex justify="space-between" align="center" wrap>
//         <Flex vertical style={{ gap: 12 }}>
//           {/* <Title level={3} style={{ margin: 0 }}>
//             Все вакансии
//           </Title> */}
//           <Text>Сканируйте QR или нажмите кнопку:</Text>
//           <Button
//             type="primary"
//             href="https://hh.ru/employer/221874"
//             style={{ color: "#fff" }} //Добавил потому что глобально там что-то перебивается
//           >
//             Перейти на hh.ru
//           </Button>
//         </Flex>
//         <Image src={qr_rabota_ru} alt="QR Code hh.ru" width={150} />
//       </Flex>
//     </Card>
//   );
// }
