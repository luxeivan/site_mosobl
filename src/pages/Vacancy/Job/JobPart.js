import React from "react";
import { Typography, Button, Space, Image, Form } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

import qr_rabota_ru from "../../../img/QR_HH.png";

const { Title, Paragraph } = Typography;

export default function JobPart() {
  const [form] = Form.useForm();

  return (
    <Space direction="vertical" size="large" style={{ padding: "20px" }}>
      <Title level={2}>Работа</Title>
      <Title level={3}>
        По вопросам трудоустройства и прохождения производственной практики
        звоните:
      </Title>
      <Button
        type="link"
        href="tel:+74957803962"
        icon={<PhoneOutlined />}
        style={{ padding: 0, fontSize: "20px" }}
      >
        +7 (495) 780-39-62, доб. 1057
      </Button>
      <Title level={3}>
        Актуальные вакансии можно посмотреть на платформе hh.ru
      </Title>
      <Button
        type="primary"
        href="https://hh.ru/employer/221874"
        target="_blank"
      >
        Перейти на hh.ru
      </Button>
      <Image src={qr_rabota_ru} alt="QR Code hh.ru" width={200} />
      {/* <Title level={2}>МОСОБЛЭНЕРГО ЭТО:</Title>
      <Space direction="vertical" size="middle">
        <div>
          <Title level={3}>10</Title>
          <Paragraph>УКРУПНЕННЫХ ФИЛИАЛОВ</Paragraph>
        </div>
        <div>
          <Title level={4}>6 200</Title>
          <Paragraph>Специалистов в коллективе</Paragraph>
        </div>
        <div>
          <Title level={4}>49 968</Title>
          <Paragraph>Кабельные и воздушные линии (км)</Paragraph>
        </div>
        <div>
          <Title level={4}>13 400</Title>
          <Paragraph>ТП, РП (шт)</Paragraph>
        </div>
        <div>
          <Title level={4}>14,9</Title>
          <Paragraph>
            Объем переданной электроэнергии в 2022 г. (млрд. киловатт-часов)
          </Paragraph>
        </div>
      </Space> */}
    </Space>
  );
}
