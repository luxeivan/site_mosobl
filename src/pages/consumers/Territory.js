import React, { useEffect, useState } from "react";
import { DelayInput } from 'react-delay-input';
import { addressServer, chargingAddressServer } from "../../config";
import xlsx from "../../img/xlsx.svg";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img2fde80ac63c76cbc7aa002fb91d2bd94 from "../../img/2fde80ac63c76cbc7aa002fb91d2bd94.jpg";
import axios from "axios";

export default function Territory() {
  const [loading, setLoading] = useState(false)
  const [inputCity, setInputCity] = useState()
  const [inputStreet, setInputStreet] = useState()
  const [listFilials, setListFilials] = useState([])
  const [listCity, setListCity] = useState([])
  const [listStreet, setListStreet] = useState([])
  const [selectCity, setSelectCity] = useState()
  const [selectStreet, setSelectStreet] = useState()

  useEffect(() => {
    if (inputCity && inputCity.length > 2) {
      setLoading(true)
      axios.get(chargingAddressServer + `/api/allFilials?locality=${inputCity}`)
        .then((response) => {
          setListCity(response.data);
          setLoading(false)
        }
        )
        .catch((error) => {
          console.log("An error occurred:", error);
        });
    }
    if (inputCity < 3) {
      setListCity([])
    }
  }, [inputCity])
  useEffect(() => {
    if (inputStreet != '') {
      setListStreet(listCity.filter(item => item.street.toLowerCase().includes(inputStreet.toLowerCase())))
    } else {
      setListStreet(listCity)
    }
  }, [inputStreet])
  // useEffect(() => {
  //   console.log(selectCity)
  // }, [selectCity])
  // useEffect(() => {
  //   console.log(loading)
  // }, [loading])
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img2fde80ac63c76cbc7aa002fb91d2bd94} title={"Территория обслуживания сетевой организации"} />
      <div className="page-grid__content" id="content">
        <div className="row-docs-age border-bottom">
        <p class="row-docs-age__caption line-bottom">Список адресов, обслуживаемых АО «Мособлэнерго»:</p>
        {/* <p>Если в списках</p> */}
          <div className="search-territory">
            <div className="search-territory__item ">
              <div className="search-city">

                <p>Введите населенный пункт:</p>
                <DelayInput
                  className="search-city__city-input"
                  delayTimeout={1000}
                  value={inputCity}
                  onClick={event => {
                    setInputCity('')
                    setInputStreet('')
                    setSelectCity()
                    setSelectStreet()
                    setListCity([]);
                  }}
                  onChange={event => {
                    setInputCity(event.target.value)
                    setSelectCity()
                    setSelectStreet()
                  }} />
                {loading && !selectCity &&
                  <div className="search-city__city-list">
                    Загрузка...
                  </div>
                }
                {!loading && !selectCity && listCity.length > 0 &&
                  <div className="search-city__city-list">
                    <ul>
                      {listCity.filter((value, index, self) => self.findIndex((Emp) => Emp.locality === value.locality) === index).map((item, index) =>
                        <li key={index} data-locality={item.locality} className="search-city__city-item" onClick={event => {
                          setInputCity(event.currentTarget.dataset.locality)
                          setSelectCity(event.currentTarget.dataset.locality)
                          setListStreet(listCity)
                        }}>{item.locality} <span className="search-city__city-district">({item.cityDistrict})</span></li>
                      )}
                    </ul>
                  </div>
                }
              </div>
            </div>
            <div className="search-territory__item">
              {selectCity && listCity.length > 0 &&
                <>
                  <div className="search-street">

                    <p>Выберите улицу:</p>
                    <DelayInput
                      className="search-city__city-input"
                      delayTimeout={100}
                      value={inputStreet}
                      onClick={event => {
                        setInputStreet('')
                        setSelectStreet()
                      }}
                      onChange={event => {
                        setInputStreet(event.target.value)
                        setSelectStreet()
                      }} />
                    {loading && !selectStreet &&
                      <div className="search-city__city-list">
                        Загрузка...
                      </div>
                    }
                    {!loading && !selectStreet && listCity.length > 0  &&
                      <div className="search-city__city-list">
                        <ul>
                          {listStreet &&
                            listStreet.filter(item => item.locality == selectCity).map((item, index) => {
                              return (
                                <li key={index} data-street={item.street} className="search-city__city-item" onClick={event => {
                                  setInputStreet(event.target.dataset.street)
                                  setSelectStreet(event.target.dataset.street)
                                }}>{item.street}</li>

                              );
                            })}

                        </ul>
                      </div>
                    }
                    {/* <select
                    name="street"
                    id="street"
                    className="search-city__sity-list"
                    onChange={(event) => {
                      if (event.target.value) {
                        setSelectStreet(event.target.value)
                      } else {
                        setSelectStreet()
                      }
                    }}
                    >
                    <option value="" >
                    ----
                    </option>
                    {listCity &&
                      listCity.filter(item => item.locality == selectCity).map((item, index) => {
                        return (
                          <option key={index} value={item.street}>
                          {item.street}
                          </option>
                          );
                        })}
                      </select> */}
                  </div>
                </>
              }

            </div>
            <div className="search-territory__item">
              {selectStreet && listCity.length > 0 && <>
                <ul className="description">
                  <li className="description__item"><strong>Номера домов: </strong>{listCity.find(item => item.street == selectStreet).houseNumbers}</li>
                  <li className="description__item"><strong>Обслуживающий филиал: </strong>{listCity.find(item => item.street == selectStreet).addressingApplications}</li>
                  <li className="description__item"><strong>Городской округ: </strong>{listCity.find(item => item.street == selectStreet).cityDistrict}</li>
                  <li className="description__item"><strong>Производственное отделение: </strong>{listCity.find(item => item.street == selectStreet).po}</li>
                  <li className="description__item"><strong>Филиал: </strong>{listCity.find(item => item.street == selectStreet).filial}</li>
                  {listCity.find(item => item.street == selectStreet).note &&
                    <li className="description__item"><strong>Примечание: </strong>{listCity.find(item => item.street == selectStreet).note}</li>
                  }
                </ul>
              </>}
            </div>
          </div>
          <a className="doc-line" href={`${addressServer}/uploads/4327781bb104dac248633e279f302619_29561a75e9.xlsx?updated_at=2022-11-03T07:14:20.680Z`} download="" target="_blank">
            <div className="doc-line__wrap-icon">
              <img src={xlsx} alt="icon xlsx" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">Перечень потребителей АО "Мособлэнерго"</span>
              <span className="doc-line__file-info">xlsx, 663КБ</span>
            </div>
          </a>
        </div >
        <div className="text-area ">
          <p>Обеспечив географию присутствия наших филиалов в большинстве муниципальных образований Подмосковья, «Мособлэнерго» всего за несколько лет стало одной из крупнейших электросетевых компаний области.</p>
        </div>

      </div >
    </motion.div >
  );
}
