import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, Button } from 'antd';
import axios from 'axios';
import TopImage from '../../components/TopImage';
import vacan_img from '../../img/d21248be80705e7a80efdf5efde73cc5.jpg';
import styles from './VacancyDetail.module.css';

const VacancyDetail = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(null);

  useEffect(() => {
    axios.get(`https://mosoblenergo.ru/back/api/vakansiis/${id}`)
      .then(response => {
        const vacancyData = {
          id: response.data.data.id,
          ...response.data.data.attributes,
        };
        setVacancy(vacancyData);
      })
      .catch(error => console.error('Error fetching vacancy:', error));
  }, [id]);

  if (!vacancy) {
    return <div>Загрузка...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopImage image={vacan_img} title={vacancy.title} />
      <div className="page-grid__content" id="content">
        <div className="vacancy-detail">
          <Card title={vacancy.title} className={styles.card}>
            <p><strong>Описание:</strong> {vacancy.description}</p>
            <p><strong>Зарплата:</strong> {vacancy.salary}</p>
            <p><strong>Требования:</strong> {vacancy.requirements}</p>
            <p><strong>Условия:</strong> {vacancy.conditions}</p>
            <Button type="primary" onClick={() => window.history.back()}>Назад</Button>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

export default VacancyDetail;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Card, Button } from 'antd';
// import TopImage from '../../components/TopImage';
// import vacan_img from '../../img/d21248be80705e7a80efdf5efde73cc5.jpg';
// import styles from './VacancyDetail.module.css';

// // Моковые данные для примера. Этот блок кода нужно удалить и заменить на реальный API-запрос позже.
// const mockVacancies = [
//   {
//     id: 1,
//     title: 'Инженер ПТО, инженер-сметчик',
//     shortDescription: 'Разработка и проверка сметной документации.',
//     description: 'Полное описание вакансии инженера ПТО, инженера-сметчика.',
//     salary: 'от 50 000 до 60 000 ₽',
//     requirements: 'Требования к инженеру ПТО, инженеру-сметчику.',
//     conditions: 'Условия работы инженером ПТО, инженером-сметчиком.',
//   },
//   {
//     id: 2,
//     title: 'Инженер по охране труда и технике безопасности',
//     shortDescription: 'Обеспечение безопасности на производстве.',
//     description: 'Полное описание вакансии инженера по охране труда и технике безопасности.',
//     salary: 'от 55 000 до 65 000 ₽',
//     requirements: 'Требования к инженеру по охране труда и технике безопасности.',
//     conditions: 'Условия работы инженером по охране труда и технике безопасности.',
//   },
// ];

// const VacancyDetail = () => {
//   const { id } = useParams();
//   const [vacancy, setVacancy] = useState(null);

//   useEffect(() => {
//     // Закомментированный код для получения данных с сервера
//     /*
//     axios.get(`https://api.yoursite.com/vacancies/${id}`)
//       .then(response => setVacancy(response.data))
//       .catch(error => console.error('Error fetching vacancy:', error));
//     */

//     // Использование моковых данных
//     const vacancyData = mockVacancies.find(v => v.id === parseInt(id));
//     setVacancy(vacancyData);
//   }, [id]);

//   if (!vacancy) {
//     return <div>Загрузка...</div>;
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <TopImage image={vacan_img} title={vacancy.title} />
//       <div className="page-grid__content" id="content">
//         <div className="vacancy-detail">
//           <Card title={vacancy.title} className={styles.card}>
//             <p><strong>Описание:</strong> {vacancy.description}</p>
//             <p><strong>Зарплата:</strong> {vacancy.salary}</p>
//             <p><strong>Требования:</strong> {vacancy.requirements}</p>
//             <p><strong>Условия:</strong> {vacancy.conditions}</p>
//             <Button type="primary" onClick={() => window.history.back()}>Назад</Button>
//           </Card>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default VacancyDetail;
