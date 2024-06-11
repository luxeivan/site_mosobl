import React from "react";
import { Modal, Button } from "antd";
import styles from "./Job.module.css";

const PreviewModal = ({ title, content, onClose }) => {
  return (
    <Modal
      visible={true}
      title={title}
      onCancel={onClose}
      footer={[
        <Button
          key="copy"
          onClick={() => navigator.clipboard.writeText(content)}
        >
          Копировать текст письма
        </Button>,
        <Button key="close" onClick={onClose}>
          Закрыть
        </Button>,
      ]}
    >
      <pre className={styles.previewContent}>{content}</pre>
    </Modal>
  );
};

export default PreviewModal;
