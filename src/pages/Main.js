import React, { useEffect, useState } from "react";
import sun from "../img/sun.svg";
import { addressServer } from "../config";
import img1ee0a79e102a5b6ea01d046cf8e82a57 from "../img/1ee0a79e102a5b6ea01d046cf8e82a57.webp";
import imge54832f7dbfda94124b128c06418c71e from "../img/e54832f7dbfda94124b128c06418c71e.svg";
import img3585fe3a230de1b8a67030ea0c9ed918 from "../img/3585fe3a230de1b8a67030ea0c9ed918.webp";
import img8c5e47832182ed15c58bfcb452b1f4fc from "../img/8c5e47832182ed15c58bfcb452b1f4fc.svg";
import imga94a6716496a0a6d6a8786001a4de82c from "../img/a94a6716496a0a6d6a8786001a4de82c.webp";
import imgefffd6ec8e2d13a79ac23af8f98f4ba6a from "../img/fffd6ec8e2d13a79ac23af8f98f4ba6a.svg";
import img1ef36f1347f0193e12440fee4d7f2c5b from "../img/1ef36f1347f0193e12440fee4d7f2c5b.webp";
import img80a7a5e7c2396116f93d507823602bb4 from "../img/80a7a5e7c2396116f93d507823602bb4.svg";
import img5d9e88a98eeace21ac4658f9840f9658 from "../img/5d9e88a98eeace21ac4658f9840f9658.webp";
import imga1c9b8119a2a57e350304e0fa6522103 from "../img/a1c9b8119a2a57e350304e0fa6522103.svg";
import img9ba7ef10b4231c7123a609158e4b211b from "../img/9ba7ef10b4231c7123a609158e4b211b.webp";
import img9247c1fdbcb536cc713fee93c2145bf0 from "../img/9247c1fdbcb536cc713fee93c2145bf0.svg";
import img9d4b583792d00352f89a1f19fca6cabb from "../img/9d4b583792d00352f89a1f19fca6cabb.webp";
import img33e64b680dfe89019de758c6ce9ee2a3 from "../img/33e64b680dfe89019de758c6ce9ee2a3.svg";
import img21c5a542e2c32fc1e3867970b8afc3a2 from "../img/21c5a542e2c32fc1e3867970b8afc3a2.webp";
import img4d4790f54e3b9e3c33c3cc7f809f26b1 from "../img/4d4790f54e3b9e3c33c3cc7f809f26b1.svg";

export default function Main() {
  const [publication, setPublication] = useState([]);
  useEffect(() => {
    fetch(`${addressServer}/api/main-page-menus?populate=*`)
      .then((response) => response.json())
      .then((data) => setPublication(data.data));
  }, []);
  return (
    <main>
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
            {publication.map((item, index) => (
              <div className="post-block" key={item.id}>
                <a className="post-block__wrapper" href="#">
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
                      <p className="post-block__text">{item.attributes.Description}</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
