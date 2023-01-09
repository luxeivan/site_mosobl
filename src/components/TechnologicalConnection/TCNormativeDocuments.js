import React from "react";
import { addressServer } from "../../config";
import pdf from "../../img/pdf.svg";

export default function TCNormativeDocuments() {
  return (
    <div className="page-grid__content">
      <div class="row-docs-age">
        <a class="doc-line" href={`${addressServer}/uploads/0393635d7a28b8159f98c2b77e7ae593_compressed_7ba29118df.pdf?updated_at=2022-11-15T11:14:09.693Z`} download="" target="_blank">
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Постановление Правительства РФ от 27.12.2004 N 861 (ред. от 14.03.2022) "Об утверждении Правил недискриминационного доступа к услугам по передаче электрической энергии и оказания этих услуг, Правил недискриминационного доступа к услугам по оперативно-диспетчерскому управлению в электроэнергетике и оказания этих услуг, Правил недискриминационного доступа к услугам администратора торговой системы оптового рынка и оказания этих услуг и Правил технологического присоединения энергопринимающих устройств потребителей электрической энергии, объектов по производству электрической энергии, а также объектов электросетевого хозяйства, принадлежащих сетевым организациям и иным лицам, к электрическим сетям"</span>
            <span class="doc-line__file-info">pdf, 3 мб</span>
          </div>
        </a>
        <a class="doc-line" href={`${addressServer}/uploads/a39d05db450798c6a10493990e9f0b43_compressed_b59b179e89.pdf?updated_at=2022-11-15T11:14:08.971Z`} download="" target="_blank">
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Федеральный закон от 26.03.2003 N 35-ФЗ (ред. от 11.06.2021) "Об электроэнергетике" (с изм. и доп., вступ. в силу с 01.07.2021)</span>
            <span class="doc-line__file-info">pdf, 1 мб</span>
          </div>
        </a>
        <a class="doc-line" href={`${addressServer}/back/uploads/78abd60a95359ea40e8c0a3dbe9c12a3_compressed_2dbf759ece.pdf?updated_at=2022-11-15T11:14:09.896Z`} download="" target="_blank">
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Постановление Правительства РФ от 04.05.2012 N 442 (ред. от 28.12.2021) "О функционировании розничных рынков электрической энергии, полном и (или) частичном ограничении режима потребления электрической энергии" (вместе с "Основными положениями функционирования розничных рынков электрической энергии", "Правилами полного и (или) частичного ограничения режима потребления электрической энергии")</span>
            <span class="doc-line__file-info">pdf, 4 мб</span>
          </div>
        </a>
        <a class="doc-line" href={`${addressServer}/uploads/74e116107e48c562936c3762ee67f888_compressed_8daae71838.pdf?updated_at=2022-11-15T11:14:08.502Z`} download="" target="_blank">
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Приказ Минэнерго России от 07.07.2021 N 541 "О внесении изменений в Единые стандарты качества обслуживания сетевыми организациями потребителей услуг сетевых организаций, утвержденные приказом Минэнерго России от 15 апреля 2014 г. N 186" (Зарегистрировано в Минюсте России 05.10.2021 N 65297)</span>
            <span class="doc-line__file-info">pdf, 148 кб</span>
          </div>
        </a>
        <a class="doc-line" href={`${addressServer}/uploads/Rasporyazhenie_komiteta_po_czenam_i_tarifam_Moskovskoj_oblasti_ot_28_12_2022_286_R_5f6d2d481b.pdf?updated_at=2023-01-09T13:16:51.217Z`} download="" target="_blank">
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Распоряжение Комитета по ценам и тарифам Московской области от 28.12.2022 N 286-Р.</span>
            <span class="doc-line__file-info">pdf, 950 кб</span>
          </div>
        </a>
        <a class="doc-line" href={`${addressServer}/uploads/438c5f87850b9e58324c2304ae59b829_compressed_d9c3cfa0ed.pdf?updated_at=2022-11-15T11:14:08.320Z`} download="" target="_blank">
          <div class="doc-line__wrap-icon">
            <img src={pdf} alt="icon pdf" />
          </div>
          <div class="doc-line__wrap-text">
            <span class="doc-line__name">Политика обработки и защиты персональных данных АО «Мособлэнерго»</span>
            <span class="doc-line__file-info">pdf, 650 кб</span>
          </div>
        </a>
      </div>
    </div>
  );
}
