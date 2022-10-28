import React from "react";
import transferEnergy from '../img/a79b60e9cc2583a3cdf047c313bf657e.webp'
import repairs from '../img/8fbf8269358c33a2d022ea0995bdd105.webp'
import connection from '../img/bd1ac77a3da7d2d1f3d67d7ba2308deb.webp'

export default function MainDirections() {
  return (
    <div className="page-grid__content" id="content">
        <h1 className="inner-post__title">Основные направления деятельности</h1>
      <div className="page-grid__content" id="content">
        <div className="block-info__up">
          <div className="block-info__wrap-img">
            <picture>
              <source srcSet={transferEnergy} type="image/webp" />
              <source srcSet={transferEnergy} type="image/png" />
              <img className="positions-post__img" src={transferEnergy} alt="Передача электроэнергии" title="Передача электроэнергии" />
            </picture>
          </div>
          <div className="block-info__wrap-text">
            <h3 className="block-info__caption">Передача электроэнергии</h3>
          </div>
        </div>
        <div className="block-info__up">
          <div className="block-info__wrap-img">
            <picture>
              <source srcSet={repairs} type="image/webp" />
              <source srcSet={repairs} type="image/png" />
              <img className="positions-post__img" src={repairs} alt="Передача электроэнергии" title="Передача электроэнергии" />
            </picture>
          </div>
          <div className="block-info__wrap-text">
            <h3 className="block-info__caption">Капитальный ремонт</h3>
          </div>
        </div>
        <div className="block-info__up">
          <div className="block-info__wrap-img">
            <picture>
              <source srcSet={connection} type="image/webp" />
              <source srcSet={connection} type="image/png" />
              <img className="positions-post__img" src={connection} alt="Передача электроэнергии" title="Передача электроэнергии" />
            </picture>
          </div>
          <div className="block-info__wrap-text">
            <h3 className="block-info__caption">Технологическое присоединение</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
