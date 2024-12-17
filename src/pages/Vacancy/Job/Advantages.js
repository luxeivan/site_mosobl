import React from "react";
import { Typography, Flex, Image, Card, List } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import advantagesimg from "../../../img/vacancies/job/Advantages.jpg";
const { Title } = Typography;

export default function Advantages() {
  const advantages = [
    "Твое здоровье - наша забота! Предлагаем добровольное медицинское страхование, включая стоматологическое обеспечение.",
    "Чтобы развиваться и расти вместе, даем возможности для повышения квалификации, прохождения переподготовки, а также для обучения по целевому договору.",
    "Участие в корпоративных спортивных мероприятиях – наше традиционное упражнение.",
    "Годовой бонус, отраслевая выплата, ежегодная выплата к отпуску и дополнительные выплаты по коллективному договору для поддержки важных моментов в жизни.",
  ];

  return (
    <Card
      style={{
        padding: "5px",
        margin: "10px",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #d9d9d9",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Flex align="center" justify="start" style={{ gap: 16 }}>
        <Image
          src={advantagesimg}
          alt="Фото"
          style={{
            maxWidth: "1300px",
            height: "auto",
            marginRight: "16px",
          }}
        />
        <Flex vertical justify="start" style={{ gap: 8 }}>
          <Title level={4}>Наши преимущества</Title>
          <List
            dataSource={advantages}
            renderItem={(item) => (
              <List.Item style={{ border: "none" }}>
                <CheckCircleTwoTone
                  twoToneColor="#52c41a"
                  style={{ marginRight: 8 }}
                />
                {item}
              </List.Item>
            )}
          />
        </Flex>
      </Flex>
    </Card>
  );
}
