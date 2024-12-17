import React from "react";
import { Typography, Flex, Card, Button } from "antd";

const { Title, Text } = Typography;

export default function PracticePart() {
  return (
    <Flex vertical align="center" justify="center">
      <Title level={2} style={{ textAlign: "center" }}>
        Практика
      </Title>
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
          Приоритетными являются электроэнергетические направления обучения
        </Title>
      </Card>
    </Flex>
  );
}

// import React from "react";
// import { Typography, Space, Divider } from "antd";
// import VacanciesForm from "../VacanciesForm";
// import GrowthСhart from "./GrowthСhart";

// const { Title } = Typography;

// export default function PracticePart() {
//   return (
//     <Space direction="vertical" size="large" style={{ padding: "20px" }}>
//       <Title level={2}>Практика</Title>
//       <Title level={3}>Путь к успеху в Мособлэнерго</Title>
//       {/* График успехов */}
//       <GrowthСhart />
//       <Divider />
//       <VacanciesForm />
//     </Space>
//   );
// }
