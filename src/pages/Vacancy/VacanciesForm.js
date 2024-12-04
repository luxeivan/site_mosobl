import React from "react";
import { Button, Form, Input, Select, Checkbox } from "antd";
const { Option } = Select;

export default function VacanciesForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  const moscowCities = [
    "Москва",
    "Зеленоград",
    "Троицк",
    "Щербинка",
    // Другие города Московской области
  ];

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="ФИО"
        name="fio"
        rules={[{ required: true, message: "Пожалуйста, введите ваше ФИО" }]}
      >
        <Input placeholder="Введите ваше полное имя" />
      </Form.Item>
      <Form.Item
        label="Возраст"
        name="age"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите ваш возраст",
          },
        ]}
      >
        <Input type="number" placeholder="Введите ваш возраст" />
      </Form.Item>
      <Form.Item
        label="Живу в г."
        name="city"
        rules={[{ required: true, message: "Пожалуйста, выберите город" }]}
      >
        <Select placeholder="Выберите город">
          {moscowCities.map((city) => (
            <Option key={city} value={city}>
              {city}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="lookingForPractice" valuePropName="checked">
        <Checkbox>Ищу практику</Checkbox>
      </Form.Item>
      <Form.Item
        label="Интересует сфера"
        name="interest"
        rules={[
          {
            required: true,
            message: "Пожалуйста, укажите интересующую сферу",
          },
        ]}
      >
        <Input placeholder="Введите интересующую сферу" />
      </Form.Item>
      <Form.Item label="Мои контакты" required>
        <Input.Group compact>
          <Form.Item
            name="phone"
            noStyle
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваш телефон",
              },
            ]}
          >
            <Input style={{ width: "50%" }} placeholder="Телефон" />
          </Form.Item>
          <Form.Item
            name="email"
            noStyle
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваш email",
              },
              { type: "email", message: "Введите корректный email" },
            ]}
          >
            <Input style={{ width: "50%" }} placeholder="Email" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
}
