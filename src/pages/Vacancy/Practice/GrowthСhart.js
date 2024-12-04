import React from "react";
import { Typography, Space, Timeline, Badge } from "antd";
import {
  TrophyOutlined,
  GiftOutlined,
  DollarCircleOutlined,
  BookOutlined,
  SmileOutlined,
  RocketOutlined,
  StarOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function GrowthСhart() {
  const moscowCities = [
    "Москва",
    "Зеленоград",
    "Троицк",
    "Щербинка",
    // Добавьте другие города Московской области
  ];

  const timelineData = [
    {
      title: "1 курс",
      description: "Знакомство с компанией, участие в экскурсиях и семинарах",
      icon: <BookOutlined style={{ color: "#1890ff" }} />,
      reward: "Стипендия",
      rewardIcon: <GiftOutlined style={{ color: "#52c41a" }} />,
    },
    {
      title: "2 курс",
      description: "Участие в учебных проектах, менторство от специалистов",
      icon: <SmileOutlined style={{ color: "#1890ff" }} />,
      reward: "Стипендия",
      rewardIcon: <GiftOutlined style={{ color: "#52c41a" }} />,
    },
    {
      title: "3 курс",
      description: "Прохождение практики с реальными задачами",
      icon: <RocketOutlined style={{ color: "#1890ff" }} />,
      reward: "Зарплата",
      rewardIcon: <DollarCircleOutlined style={{ color: "#faad14" }} />,
    },
    {
      title: "4 курс",
      description: "Стажировка с возможностью трудоустройства",
      icon: <StarOutlined style={{ color: "#1890ff" }} />,
      reward: "Зарплата",
      rewardIcon: <DollarCircleOutlined style={{ color: "#faad14" }} />,
    },
    {
      title: "Работа в Мособлэнерго",
      description: "Начало карьеры в нашей компании",
      icon: <TrophyOutlined style={{ color: "#1890ff" }} />,
      reward: "Зарплата",
      rewardIcon: <DollarCircleOutlined style={{ color: "#faad14" }} />,
    },
  ];

  return (
    <Timeline mode="alternate">
      {timelineData.map((item, index) => (
        <Timeline.Item key={index} dot={item.icon} color="green">
          <Title level={4}>{item.title}</Title>
          <Paragraph>{item.description}</Paragraph>
          <Space>
            {item.rewardIcon}
            <Badge
              count={item.reward}
              style={{
                backgroundColor:
                  item.reward === "Стипендия" ? "#52c41a" : "#faad14",
              }}
            />
          </Space>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
