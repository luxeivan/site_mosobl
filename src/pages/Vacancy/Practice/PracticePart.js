import React from "react";
import { Typography, Space, Divider } from "antd";
import VacanciesForm from "../VacanciesForm";
import GrowthСhart from "./GrowthСhart";

const { Title } = Typography;

export default function PracticePart() {
  return (
    <Space direction="vertical" size="large" style={{ padding: "20px" }}>
      <Title level={2}>Практика</Title>
      <Title level={3}>Путь к успеху в Мособлэнерго</Title>
      {/* График успехов */}
      <GrowthСhart />
      <Divider />
      <VacanciesForm />
    </Space>
  );
}