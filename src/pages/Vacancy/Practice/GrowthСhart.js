import React from "react";
import { Typography, Steps } from "antd";
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
  const timelineData = [
    {
      title: "1 курс",
      description: "Заключение договора о целевом обучении",
      icon: <BookOutlined style={{ color: "#1890ff" }} />,
      reward: "Стипендия",
      rewardIcon: <GiftOutlined style={{ color: "#52c41a" }} />,
    },
    {
      title: "2 курс",
      description: "Обучение. Прохождение практики",
      icon: <SmileOutlined style={{ color: "#1890ff" }} />,
      reward: "Стипендия",
      rewardIcon: <GiftOutlined style={{ color: "#52c41a" }} />,
    },
    {
      title: "3 курс",
      description:
        "Заключение срочного трудового договора. Направление на бесплатное обучение",
      icon: <RocketOutlined style={{ color: "#1890ff" }} />,
      reward: "Зарплата",
      rewardIcon: <DollarCircleOutlined style={{ color: "#faad14" }} />,
    },
    {
      title: "4 курс",
      description:
        "Пабота по срочному трудовому договору. Обучение по индивидуальному графику.",
      icon: <StarOutlined style={{ color: "#1890ff" }} />,
      reward: "Зарплата",
      rewardIcon: <DollarCircleOutlined style={{ color: "#faad14" }} />,
    },
    {
      title: "Работа в Мособлэнерго",
      description:
        "Работа на постоянной основе. Перспектива профессионального роста. Возможность получения высшего образования",
      icon: <TrophyOutlined style={{ color: "#1890ff" }} />,
      reward: "Зарплата",
      rewardIcon: <DollarCircleOutlined style={{ color: "#faad14" }} />,
    },
  ];

  return (
    <Steps>
      {timelineData.map((item, index) => (
        <Steps.Step
          key={index}
          title={item.title}
          icon={item.icon}
          description={
            <>
              <p>{item.description}</p>
              {item.rewardIcon} {item.reward}
            </>
          }
        />
      ))}
    </Steps>
  );
}
