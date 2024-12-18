import { Modal, Form, Input, Button, message, Typography } from "antd";

const { Paragraph } = Typography;

export default function ModalJob({ visible, onCancel }) {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    console.log("Полученные данные с формы:", values);
    message.success("Данные успешно отправлены!");
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title="Отклик на вакансию"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      destroyOnClose
    >
      <Paragraph>
        Заполните форму, и мы обязательно свяжемся с вами по указанным
        контактам.
      </Paragraph>

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="firstName"
          label="Имя"
          rules={[{ required: true, message: "Введите ваше имя" }]}
        >
          <Input placeholder="Иван" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Фамилия"
          rules={[{ required: true, message: "Введите вашу фамилию" }]}
        >
          <Input placeholder="Иванов" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Введите email" },
            { type: "email", message: "Введите корректный email" },
          ]}
        >
          <Input placeholder="you@example.com" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Телефон"
          rules={[
            { required: true, message: "Введите номер телефона" },
            {
              pattern: /^\+?\d{7,14}$/,
              message: "Введите корректный номер телефона",
            },
          ]}
        >
          <Input placeholder="+7XXXXXXXXXX" />
        </Form.Item>

        <Form.Item
          name="sity"
          label="Город (населенный пункт)"
          rules={[{ required: true, message: "Введите город" }]}
        >
          <Input placeholder="Красногорск" />
        </Form.Item>

        <Form.Item
          name="activity"
          label="Сфера деятельности"
          rules={[
            { required: true, message: "Введите свою сферу деятельности" },
          ]}
        >
          <Input placeholder="Кладовщик" />
        </Form.Item>

        <Form.Item style={{ textAlign: "right", marginTop: 20 }}>
          <Button onClick={onCancel} style={{ marginRight: 10 }}>
            Отмена
          </Button>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
