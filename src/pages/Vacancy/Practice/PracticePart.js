import React from "react";
import GrowthСhart from "./GrowthСhart";
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
        <GrowthСhart />
      </Card>
    </Flex>
  );
}
