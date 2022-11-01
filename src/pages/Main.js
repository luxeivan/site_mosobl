import React, { useEffect, useState } from "react";
import sun from "../img/sun.svg";
import { addressServer } from "../config";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Main() {
  const [publication, setPublication] = useState([]);
  useEffect(() => {
    fetch(`${addressServer}/api/main-page-menus?populate=*`)
      .then((response) => response.json())
      .then((data) => setPublication(data.data))
      .catch((err) => {
        console.log(err);
        setPublication([]);
      });
  }, []);
  return (
    <motion.main className="page-grid__content" id="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="marquee-line marquee3k is-init" style={{ backgroundColor: "#E37021" }} data-speed="1">
        <div className="items-wrap">
          <div className="items marquee">
            <img className="" src={sun} />
            <span className="marquee__text">
              Внимание! Для предотвращения угроз информационной безопасности АО «Мособлэнерго» осуществляет блокировку доставки и приема писем от доменов-отправителей, страной происхождения которых являются США и страны Европейского союза -
              gmail.com, outlook.com, yahoo.com.
            </span>
          </div>
          <div aria-hidden="true" className="items marquee">
            <img className="" src={sun} />
            <span className="marquee__text">
              Внимание! Для предотвращения угроз информационной безопасности АО «Мособлэнерго» осуществляет блокировку доставки и приема писем от доменов-отправителей, страной происхождения которых являются США и страны Европейского союза -
              gmail.com, outlook.com, yahoo.com.
            </span>
          </div>
        </div>
      </div>

      <section className="grid-posts">
        <div className="container">
          <div className="grid-posts__wrapper">
            {publication &&
              publication.map((item, index) => (
                <div className="post-block" key={item.id}>
                  {item.attributes.url&&item.attributes.url.includes("http") ? (
                    <a className="post-block__wrapper" href={item.attributes.url}>
                      {index < 4 ? (
                        <div>
                          <div className="post-block__bg"></div>
                          <div className="post-block__bg-image"></div>
                        </div>
                      ) : (
                        false
                      )}
                      <picture className="post-block__image-hover">
                        <source srcSet={addressServer + item.attributes.image.data.attributes.url} type="image/webp" />
                        {/* <source srcSet={imgc369cfb9b079726e4c79af4b2d7aff07} type="image/jpeg" /> */}
                        <img src={addressServer + item.attributes.image.data.attributes.url} alt="ПЛАНОВЫЕ ОТКЛЮЧЕНИЯ" />
                      </picture>
                      <div className="post-block__wrap-img">
                        <img className="post-block__img" src={addressServer + item.attributes.pic.data.attributes.url} alt="icon" />
                      </div>
                      <div className="post-block__wrap-text">
                        <div className="post-block__up">
                          <h4 className="post-block__caption">{item.attributes.title}</h4>
                        </div>
                        <div className="post-block__down">
                          <p className="post-block__text">{item.attributes.description}</p>
                          <button className="block-btn">
                            <span className="block-btn__text">Смотреть</span>
                            <div className="block-btn__wrap-svg">
                              <svg className="block-btn__arrow">
                                <use href="/local/templates/vg/assets/img/arrow-link.svg#arrow-link"></use>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <Link className="post-block__wrapper" to={item.attributes.url}>
                      {index < 4 ? (
                        <div>
                          <div className="post-block__bg"></div>
                          <div className="post-block__bg-image"></div>
                        </div>
                      ) : (
                        false
                      )}
                      <picture className="post-block__image-hover">
                        <source srcSet={addressServer + item.attributes.image.data.attributes.url} type="image/webp" />
                        {/* <source srcSet={imgc369cfb9b079726e4c79af4b2d7aff07} type="image/jpeg" /> */}
                        <img src={addressServer + item.attributes.image.data.attributes.url} alt="ПЛАНОВЫЕ ОТКЛЮЧЕНИЯ" />
                      </picture>
                      <div className="post-block__wrap-img">
                        <img className="post-block__img" src={addressServer + item.attributes.pic.data.attributes.url} alt="icon" />
                      </div>
                      <div className="post-block__wrap-text">
                        <div className="post-block__up">
                          <h4 className="post-block__caption">{item.attributes.title}</h4>
                        </div>
                        <div className="post-block__down">
                          <p className="post-block__text">{item.attributes.description}</p>
                          <button className="block-btn">
                            <span className="block-btn__text">Смотреть</span>
                            <div className="block-btn__wrap-svg">
                              <svg className="block-btn__arrow">
                                <use href="/local/templates/vg/assets/img/arrow-link.svg#arrow-link"></use>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
