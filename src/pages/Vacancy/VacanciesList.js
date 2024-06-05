// import React, { useState, useEffect } from 'react';
// import { Card, Button, Input, Select } from 'antd';
// import axios from 'axios';
// import styles from './VacanciesList.module.css';

// const { Meta } = Card;
// const { Search } = Input;
// const { Option } = Select;

// const VacanciesList = () => {
//   const [vacancies, setVacancies] = useState([]);
//   const [filteredVacancies, setFilteredVacancies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     axios.get('https://mosoblenergo.ru/back/api/vakansiis')
//       .then(response => {
//         const vacanciesData = response.data.data.map(vacancy => ({
//           id: vacancy.id,
//           ...vacancy.attributes,
//         }));
//         setVacancies(vacanciesData);
//         setFilteredVacancies(vacanciesData);
//       })
//       .catch(error => console.error('Error fetching vacancies:', error));
//   }, []);

//   const handleSearch = (value) => {
//     setSearchTerm(value);
//     filterVacancies(value, selectedCategory);
//   };

//   const handleCategoryChange = (value) => {
//     setSelectedCategory(value);
//     filterVacancies(searchTerm, value);
//   };

//   const filterVacancies = (searchTerm, category) => {
//     let filtered = vacancies;

//     if (searchTerm) {
//       filtered = filtered.filter(vacancy =>
//         vacancy.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (category) {
//       filtered = filtered.filter(vacancy => vacancy.category === category);
//     }

//     setFilteredVacancies(filtered);
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Все вакансии</h2>
//       <div className={styles.filters}>
//         <Search
//           placeholder="Поиск вакансий"
//           onSearch={handleSearch}
//           enterButton
//           className={styles.search}
//         />
//         <Select
//           placeholder="Категория"
//           onChange={handleCategoryChange}
//           className={styles.select}
//         >
//           <Option value="">Все</Option>
//           <Option value="Техсервис">Техсервис</Option>
//           <Option value="Бэк-офис">Бэк-офис</Option>
//           <Option value="Обслуживание клиентов">Обслуживание клиентов</Option>
//           <Option value="IT">IT</Option>
//         </Select>
//       </div>
//       <div className={styles.grid}>
//         {filteredVacancies.map(vacancy => (
//           <Card
//             key={vacancy.id}
//             hoverable
//             className={styles.card}
//             onClick={() => window.location.href = `/vacancies/${vacancy.id}`}
//           >
//             <Meta title={vacancy.title} />
//             <div className={styles.cardBody}>
//               <p>{vacancy.shortDescription}</p>
//               <p className={styles.salary}>{vacancy.salary}</p>
//             </div>
//             <div className={styles.cardFooter}>
//               <Button type="primary">Подробнее</Button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VacanciesList;


// import React, { useState, useEffect } from 'react';
// import { Card, Button, Input, Select } from 'antd';
// import styles from './VacanciesList.module.css';

// const { Meta } = Card;
// const { Search } = Input;
// const { Option } = Select;

// const VacanciesList = () => {
//   const [vacancies, setVacancies] = useState([]);
//   const [filteredVacancies, setFilteredVacancies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     // Удалите этот блок кода и замените его на реальный API-запрос
//     const mockVacancies = [
//       {
//         id: 1,
//         title: 'Инженер ПТО',
//         shortDescription: 'Разработка и проверка сметной документации.',
//         salary: 'от 50 000 до 60 000 ₽',
//         category: 'techservice',
//       },
//       {
//         id: 2,
//         title: 'Инженер по охране труда и ТБ',
//         shortDescription: 'Обеспечение безопасности на производстве.',
//         salary: 'от 55 000 до 65 000 ₽',
//         category: 'techservice',
//       },
//       {
//         id: 3,
//         title: 'Инженер-энергетик',
//         shortDescription: 'Разработка и обслуживание энергетических систем.',
//         salary: 'от 60 000 до 70 000 ₽',
//         category: 'techservice',
//       },
//       {
//         id: 4,
//         title: 'Менеджер по закупкам',
//         shortDescription: 'Организация и контроль закупок.',
//         salary: 'от 45 000 до 55 000 ₽',
//         category: 'backoffice',
//       },
//       {
//         id: 5,
//         title: 'Менеджер по работе с партнерами',
//         shortDescription: 'Взаимодействие с партнерами и поставщиками.',
//         salary: 'от 50 000 до 60 000 ₽',
//         category: 'backoffice',
//       },
//       {
//         id: 6,
//         title: 'Секретарь',
//         shortDescription: 'Организация рабочего дня руководителя.',
//         salary: 'от 40 000 до 50 000 ₽',
//         category: 'backoffice',
//       },
//       {
//         id: 7,
//         title: 'Оператор call-центра',
//         shortDescription: 'Обработка звонков и консультация клиентов.',
//         salary: 'от 30 000 до 40 000 ₽',
//         category: 'customerService',
//       },
//       {
//         id: 8,
//         title: 'Системный администратор',
//         shortDescription: 'Поддержка и обслуживание IT-инфраструктуры.',
//         salary: 'от 55 000 до 65 000 ₽',
//         category: 'it',
//       },
//       {
//         id: 9,
//         title: 'Сетевой инженер',
//         shortDescription: 'Разработка и поддержка сетевой инфраструктуры.',
//         salary: 'от 60 000 до 70 000 ₽',
//         category: 'it',
//       },
//       {
//         id: 10,
//         title: 'Инженер-электроник',
//         shortDescription: 'Обслуживание и ремонт электронной техники.',
//         salary: 'от 50 000 до 60 000 ₽',
//         category: 'it',
//       },
//     ];
//     setVacancies(mockVacancies);
//     setFilteredVacancies(mockVacancies);
//     // Конец блока моковых данных
//     /*
//     axios.get('https://api.yoursite.com/vacancies') // Здесь должен быть ваш реальный API
//       .then(response => {
//         setVacancies(response.data);
//         setFilteredVacancies(response.data);
//       })
//       .catch(error => console.error('Error fetching vacancies:', error));
//     */
//   }, []);

//   const handleSearch = (value) => {
//     setSearchTerm(value);
//     filterVacancies(value, selectedCategory);
//   };

//   const handleCategoryChange = (value) => {
//     setSelectedCategory(value);
//     filterVacancies(searchTerm, value);
//   };

//   const filterVacancies = (searchTerm, category) => {
//     let filtered = vacancies;

//     if (searchTerm) {
//       filtered = filtered.filter(vacancy =>
//         vacancy.title.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (category) {
//       filtered = filtered.filter(vacancy => vacancy.category === category);
//     }

//     setFilteredVacancies(filtered);
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Все вакансии</h2>
//       <div className={styles.filters}>
//         <Search
//           placeholder="Поиск вакансий"
//           onSearch={handleSearch}
//           enterButton
//           className={styles.search}
//         />
//         <Select
//           placeholder="Категория"
//           onChange={handleCategoryChange}
//           className={styles.select}
//         >
//           <Option value="">Все</Option>
//           <Option value="techservice">Техсервис</Option>
//           <Option value="backoffice">Бэк-офис</Option>
//           <Option value="customerService">Обслуживание клиентов</Option>
//           <Option value="it">IT</Option>
//         </Select>
//       </div>
//       <div className={styles.grid}>
//         {filteredVacancies.map(vacancy => (
//           <Card
//             key={vacancy.id}
//             hoverable
//             className={styles.card}
//             onClick={() => window.location.href = `/vacancies/${vacancy.id}`}
//           >
//             <Meta title={vacancy.title} />
//             <div className={styles.cardBody}>
//               <p>{vacancy.shortDescription}</p>
//               <p className={styles.salary}>{vacancy.salary}</p>
//             </div>
//             <div className={styles.cardFooter}>
//               <Button type="primary">Подробнее</Button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VacanciesList;
