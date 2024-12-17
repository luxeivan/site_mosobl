import React from "react";
import { Typography, Button, Flex, Image, Card } from "antd";
import qr_rabota_ru from "../../../img/QR_HH.png";

const { Title, Text } = Typography;

export default function QrCodeHH() {
  return (
    <Card
      style={{
        border: "2px solid #d9d9d9",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Flex justify="space-between" align="center" wrap>
        <Flex vertical style={{ gap: 12 }}>
          <Title level={3} style={{ margin: 0 }}>
            Все вакансии
          </Title>
          <Text>Сканируйте QR или нажмите кнопку:</Text>
          <Button
            type="primary"
            href="https://hh.ru/employer/221874"
            target="_blank"
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

// const { Title } = Typography;

// export default function QrCodeHH() {
//   return (
//     <Card
//       style={{
//         padding: "10px",
//         borderRadius: "10px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         border: "2px solid #d9d9d9",
//         boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <Flex vertical align="center" justify="center">
//         <Title level={3} style={{ textAlign: "center" }}>
//           Все вакансии
//         </Title>
//         <Button
//           type="primary"
//           href="https://hh.ru/employer/221874"
//           target="_blank"
//           style={{ marginBottom: "20px" }}
//         >
//           Перейти на hh.ru
//         </Button>
//         <Image src={qr_rabota_ru} alt="QR Code hh.ru" width={200} />
//       </Flex>
//     </Card>
//   );
// }
