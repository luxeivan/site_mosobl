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
//           ...vacancy,
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