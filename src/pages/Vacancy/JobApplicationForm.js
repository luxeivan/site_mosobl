//Форма отклика в новых Вакансиях
import React, { useState } from "react";
import styles from "./Job.module.css";

const JobApplicationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    ФИО: "",
    МестоРаботы: "",
    Специализация: "",
    Контакты: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel}>ФИО соискателя</label>
        <input
          type="text"
          name="ФИО"
          value={formData.ФИО}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel}>
          Возможное место работы
        </label>
        <select
          name="МестоРаботы"
          value={formData.МестоРаботы}
          onChange={handleChange}
          className={styles.input}
          required
        >
          <option value="">Выберите место работы</option>
          <option value="Адрес 1">Адрес 1</option>
          <option value="Адрес 2">Адрес 2</option>
          <option value="Адрес 3">Адрес 3</option>
        </select>
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel}>Специализация</label>
        <input
          type="text"
          name="Специализация"
          value={formData.Специализация}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.inputWrapper}>
        <label className={styles.inputLabel}>
          Контакты (телефон/почта)
        </label>
        <input
          type="text"
          name="Контакты"
          value={formData.Контакты}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Отправить
      </button>
    </form>
  );
};

export default JobApplicationForm;
