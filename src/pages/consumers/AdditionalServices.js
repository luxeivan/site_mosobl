import React, { useEffect, useState } from "react";
import pdf from "../../img/pdf.svg";
import { addressServer } from "../../config";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img4c2c362e8d8fa557788c556795d32fae from "../../img/4c2c362e8d8fa557788c556795d32fae.jpg";

export default function AdditionalServices() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${addressServer}/api/dopolnitelnye-servisies`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setServices(data.data);
      })
      .catch((err) => {
        console.log(err);
        setServices([]);
      });
  }, []);
  const handlerAccordion = (event) => {
    event.currentTarget.classList.toggle("open-accordion");
    event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
    const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
    if (drop.style.maxHeight == "") {
      drop.style.maxHeight = `${drop.scrollHeight}px`;
    } else {
      drop.style.maxHeight = "";
    }
  };
  console.log(services);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img4c2c362e8d8fa557788c556795d32fae} title={"Дополнительные услуги"} />
      <div className="page-grid__content" id="content">
        <div className="text-area">
          {services.map((item, index) => 
            <div key={item.id} className="accordion-row" onClick={handlerAccordion}>
              <div className="accordion-row__up active">
                <span className="accordion-row__text">{item.attributes.title}</span>
                <div className="accordion-row__wrap-arrow"></div>
              </div>
              <div className="accordion-row__drop-down">
                <div className="accordion-row__wrapper" dangerouslySetInnerHTML={{ __html: item.attributes.html }}></div>
              </div>
            </div>
          )}
          
          

          <p>
            По вопросам оказания дополнительных услуг свяжитесь с нами: тел.:{" "}
            <a href="tel:+74957803962">
              <b>8 (495) 780-39-62</b>
            </a>{" "}
            доб. 3327, доб. 1096; e-mail:
            <a href="mailto:uslugi@mosoblenergo.ru">
              <b>uslugi@mosoblenergo.ru</b>
            </a>
          </p>
        </div>
        <br />
        <br />{" "}
        <div className="row-docs-age">
          <a className="doc-line" href="/upload/iblock/c94/c946c2e2c800837bd0f69971774f94cf.pdf" download="">
            <div className="doc-line__wrap-icon">
              <img src={pdf} alt="icon pdf" />
            </div>
            <div className="doc-line__wrap-text">
              <span className="doc-line__name">Скачать прейскурант дополнительных услуг</span>
              <span className="doc-line__file-info">pdf, 0 б</span>
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
