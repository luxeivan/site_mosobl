import { motion } from "framer-motion";
import React from "react";
import TopImage from "../../components/TopImage";
import img2b65d686819fc9b93c206372c993dcd8 from "../../img/2b65d686819fc9b93c206372c993dcd8.jpg";

export default function ElectricityAccounting() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img2b65d686819fc9b93c206372c993dcd8} title={"Коммерческий учет электрической энергии"} />
      <div className="page-grid__content" id="content">
        <div className="text-area">
          <p>
            Коммерческий учет электрической энергии (мощности) - процесс измерения количества электрической энергии и определения объема мощности, сбора, хранения, обработки, передачи результатов этих измерений и формирования, в том числе расчетным
            путем, данных о количестве произведенной и потребленной электрической энергии (мощности) для целей взаиморасчетов за поставленные электрическую энергию и мощность, а также за связанные с указанными поставками услуги.
          </p>
        </div>

        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Общая информация</span>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  Энергетический ресурс&nbsp;— носитель энергии, энергия которого используется или может быть использована при осуществлении хозяйственной и&nbsp;иной деятельности, а&nbsp;также вид энергии (атомная, тепловая, электрическая,
                  электромагнитная энергия или другой вид энергии).
                </p>
                <p>
                  В&nbsp;соответствии со&nbsp;статьей 13&nbsp;Федерального закона от&nbsp;23&nbsp;ноября 2009 года №&nbsp;261-ФЗ «Об&nbsp;энергосбережении и&nbsp;о&nbsp;повышении энергетической эффективности и&nbsp;о&nbsp;внесении изменений
                  в&nbsp;отдельные законодательные акты Российской Федерации» производимые, передаваемые, потребляемые энергетические ресурсы подлежат обязательному учету с&nbsp;применением приборов учета используемых энергетических ресурсов. Расчеты
                  за&nbsp;энергетические ресурсы должны осуществляться на&nbsp;основании данных о&nbsp;количественном значении энергетических ресурсов, произведенных, переданных, потребленных, определенных при помощи приборов учета используемых
                  энергетических ресурсов. Расчетным учетом электроэнергии называется учет выработанной, а&nbsp;также отпущенной потребителям электроэнергии для денежного расчета за&nbsp;нее. Счетчики, устанавливаемые для расчетного учета, называются
                  расчетными счетчиками.
                </p>
                <p>
                  Для учета электрической энергии используются приборы учета, типы которых утверждены федеральным органом исполнительной власти по&nbsp;техническому регулированию и&nbsp;метрологии и&nbsp;внесены в&nbsp;государственный реестр средств
                  измерений. Классы точности приборов учета определяются в&nbsp;соответствии с&nbsp;техническими регламентами и&nbsp;иными обязательными требованиями, установленными для классификации средств измерений.
                </p>
                <p>
                  Коммерческий учет электрической энергии (мощности)&nbsp;— процесс измерения количества электрической энергии и&nbsp;определения объема мощности, сбора, хранения, обработки, передачи результатов этих измерений и&nbsp;формирования,
                  в&nbsp;том числе расчетным путем, данных о&nbsp;количестве произведенной и&nbsp;потребленной электрической энергии (мощности) для целей взаиморасчетов за&nbsp;поставленные электрическую энергию и&nbsp;мощность, а&nbsp;также
                  за&nbsp;связанные с&nbsp;указанными поставками услуги.
                </p>
                <p>
                  В&nbsp;соответствии с&nbsp;разделом Х&nbsp;Постановления Правительства Российской Федерации от&nbsp;4&nbsp;мая 2012 года №&nbsp;442 «О&nbsp;функционировании розничных рынков электрической энергии, полном&nbsp;и (или) частичном
                  ограничении режима потребления электрической энергии» гарантирующие поставщики и&nbsp;сетевые организации обеспечивают коммерческий учет электрической энергии (мощности) на&nbsp;розничных рынках, в&nbsp;том числе путем приобретения,
                  установки, замены, допуска в&nbsp;эксплуатацию приборов учета электрической энергии&nbsp;и (или) иного оборудования, а&nbsp;также нематериальных активов, которые необходимы для обеспечения коммерческого учета электрической энергии
                  (мощности), и&nbsp;последующей их&nbsp;эксплуатации, том числе посредством интеллектуальных систем учета электрической энергии (мощности):
                </p>
                <ul>
                  <li>
                    при отсутствии, выходе из&nbsp;строя, утрате, истечении срока эксплуатации или истечении интервала между поверками приборов учета электрической энергии&nbsp;и (или) иного оборудования, которые используются для коммерческого учета
                    электрической энергии (мощности), в&nbsp;том числе не&nbsp;принадлежащих сетевой организации (гарантирующему поставщику);
                  </li>
                  <li>в&nbsp;процессе технологического присоединения энергопринимающих устройств (объектов электросетевого хозяйства, объектов по&nbsp;производству электрической энергии (мощности).</li>
                </ul>
                <p>Сетевые организации осуществляют установку либо замену прибора учета в&nbsp;случаях, не&nbsp;связанных с&nbsp;технологическим присоединением энергопринимающих устройств потребителей электрической энергии, в&nbsp;срок:</p>
                <ul>
                  <li>до&nbsp;31&nbsp;декабря 2023&nbsp;г., если прибор учета отсутствовал или вышел из&nbsp;строя, истек срок его эксплуатации по&nbsp;состоянию на&nbsp;1&nbsp;апреля 2020&nbsp;г. или ранее.</li>
                  <li>не&nbsp;позднее 6&nbsp;месяцев в&nbsp;иных случаях</li>
                </ul>
                <p>с&nbsp;даты истечения интервала между поверками или срока эксплуатации прибора учета, если соответствующая дата (срок) установлена в&nbsp;договоре энергоснабжения (оказания услуг по&nbsp;передаче электрической энергии);</p>
                <p>
                  с&nbsp;даты получения обращения потребителя (производителя) электрической энергии, сетевой организации или иного владельца объектов электросетевого хозяйства об&nbsp;истечении интервала между поверками, срока эксплуатации,
                  а&nbsp;также об&nbsp;утрате, о&nbsp;выходе прибора учета из&nbsp;строя&nbsp;и (или) его неисправности.
                </p>
                <p>с&nbsp;даты выявления истечения срока поверки, срока эксплуатации, неисправности прибора учета в&nbsp;ходе проведения его проверки в&nbsp;установленном настоящим документом порядке;</p>
                <p>с&nbsp;даты признания прибора учета утраченным;</p>
                <p>с&nbsp;даты истечения интервала между поверками или срока эксплуатации прибора учета, если соответствующая дата (срок) установлена в&nbsp;договоре энергоснабжения (оказания услуг по&nbsp;передаче электрической энергии).</p>
                <p>
                  Сроки монтажа прибора учета электрической энергии в&nbsp;случае осуществления технологического присоединения энергопринимающих устройств потребителей определяются условиями договора об&nbsp;осуществлении технологического
                  присоединения.
                </p>
                <p>
                  В&nbsp;соответствии с&nbsp;законодательством&nbsp;РФ приборы учета электрической энергии устанавливаются приборы учета подлежат установке на&nbsp;границе балансовой принадлежности объектов электроэнергетики (энергопринимающих
                  устройств). При отсутствии технической возможности установки прибора учета электрической энергии на&nbsp;границе балансовой принадлежности прибор учета подлежит установке в&nbsp;месте, максимально к&nbsp;ней приближенном,
                  в&nbsp;котором имеется техническая возможность его установки.
                </p>
                <p>
                  Обязанность по&nbsp;обеспечению сохранности и&nbsp;целостности прибора учета&nbsp;и (или) иного оборудования, используемых для обеспечения коммерческого учета электрической энергии (мощности), а&nbsp;также пломб&nbsp;и (или) знаков
                  визуального контроля в&nbsp;случае, если такая обязанность предусмотрена договором, возлагается на&nbsp;собственника (владельца) энергопринимающих устройств, объектов по&nbsp;производству электрической энергии (мощности), объектов
                  электросетевого хозяйства (в&nbsp;отношении граждан&nbsp;— потребителей электрической энергии&nbsp;— собственника (владельца) земельного участка), в&nbsp;границах балансовой принадлежности которых (в&nbsp;отношении граждан&nbsp;—
                  потребителей электрической энергии&nbsp;— в&nbsp;границах земельного участка) установлены приборы учета&nbsp;и (или) иное оборудование, которое используется для обеспечения коммерческого учета электрической энергии (мощности).
                </p>
                <p>
                  Определение объема потребления (производства) электрической энергии (мощности) на&nbsp;розничных рынках, оказанных услуг по&nbsp;передаче электрической энергии, а&nbsp;также фактических потерь электрической энергии в&nbsp;объектах
                  электросетевого хозяйства осуществляется на&nbsp;основании:
                </p>
                <ul>
                  <li>
                    показаний приборов учета, в&nbsp;том числе включенных в&nbsp;состав измерительных комплексов, систем учета и&nbsp;приборов учета электрической энергии, присоединенных к&nbsp;интеллектуальным системам учета электрической энергии
                    (мощности), и&nbsp;интеллектуальных систем учета электрической энергии (мощности);
                  </li>
                  <li>
                    отсутствия актуальных показаний или непригодности к&nbsp;расчетам приборов учета, измерительных комплексов&nbsp;— на&nbsp;основании расчетных способов, которые определяются замещающей информацией или иными расчетными способами,
                    предусмотренными законодательством РФ.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Нормативные документы</span>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <ol>
                  <li>Федеральный закон от&nbsp;26.03.2003 №&nbsp;35-Ф3 «Об&nbsp;электроэнергетике»;</li>
                  <li>
                    Федеральный закон от&nbsp;23.11.2009 №&nbsp;261-ФЗ «Об&nbsp;энергосбережении и&nbsp;о&nbsp;повышении энергетической эффективности и&nbsp;о&nbsp;внесении изменений в&nbsp;отдельные законодательные акты Российской Федерации»;{" "}
                  </li>
                  <li>Федеральный закон от&nbsp;26.06.2008 №&nbsp;102-ФЗ «Об&nbsp;обеспечении единства измерений»;</li>
                  <li>
                    Постановление Правительства Российской Федерации от&nbsp;04.05.2012 №&nbsp;442 «О&nbsp;функционировании розничных рынков электрической энергии, полном&nbsp;и (или) частичном ограничении режима потребления электрической энергии»;
                  </li>
                  <li>
                    Постановление Правительства Российской Федерации от&nbsp;27.12.2004 №&nbsp;861 «Об&nbsp;утверждении правил недискриминационного доступа к&nbsp;услугам по&nbsp;передаче электрической энергии и&nbsp;оказания этих услуг, правил
                    недискриминационного доступа к&nbsp;услугам по&nbsp;оперативно-диспетчерскому управлению в&nbsp;электроэнергетике и&nbsp;оказания этих услуг, правил недискриминационного доступа к&nbsp;услугам администратора торговой системы
                    оптового рынка и&nbsp;оказания этих услуг и&nbsp;правил технологического присоединения энергопринимающих устройств потребителей электрической энергии, объектов по&nbsp;производству электрической энергии, а&nbsp;также объектов
                    электросетевого хозяйства, принадлежащих сетевым организациям и&nbsp;иным лицам, к&nbsp;электрическим сетям»;
                  </li>
                  <li>Постановление Правительства Российской Федерации от&nbsp;06.05.2011 №&nbsp;354 «О&nbsp;предоставлении коммунальных услуг собственникам и&nbsp;пользователям помещений в&nbsp;многоквартирных домах и&nbsp;жилых домов»;</li>
                  <li>Постановление Правительства РФ&nbsp;от&nbsp;19.06.2020 №&nbsp;890 «О&nbsp;порядке предоставления доступа к&nbsp;минимальному набору функций интеллектуальных систем учета электрической энергии (мощности)».</li>
                  <li>
                    Приказ Минэнерго России от&nbsp;07.04.2010 №&nbsp;149 «Об&nbsp;утверждении порядка заключения и&nbsp;существенных условий договора, регулирующего условия установки, замены&nbsp;и (или) эксплуатации приборов учета используемых
                    энергетических ресурсов»;
                  </li>
                  <li>Приказ Минэнерго России от&nbsp;15.04.2014 №&nbsp;186 «О&nbsp;Единых стандартах качества обслуживания сетевыми организациями потребителей услуг сетевых организаций».</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div
          className="accordion-row"
          onClick={(event) => {
            event.currentTarget.classList.toggle("open-accordion");
            event.currentTarget.querySelector(".accordion-row__up").classList.toggle("active");
            const drop = event.currentTarget.querySelector(".accordion-row__drop-down");
            if (drop.style.maxHeight == "") {
              drop.style.maxHeight = `${drop.scrollHeight}px`;
            } else {
              drop.style.maxHeight = "";
            }
          }}
        >
          <div className="accordion-row__up">
            <span className="accordion-row__text">Замена прибора учета электрической энергии</span>
          </div>
          <div className="accordion-row__drop-down">
            <div className="accordion-row__wrapper">
              <div className="text-area">
                <p>
                  В&nbsp;соответствии с&nbsp;требованиями Постановления Правительства РФ&nbsp;от&nbsp;04.05.2012 №&nbsp;442 «О&nbsp;функционировании розничных рынков электрической энергии, полном&nbsp;и (или) частичном ограничении режима потребления
                  электрической энергии», Постановления Правительства РФ&nbsp;от&nbsp;06.05.2011 №&nbsp;354 «О&nbsp;предоставлении коммунальных услуг собственникам и&nbsp;пользователям помещений в&nbsp;многоквартирных домах и&nbsp;жилых домов»
                  и&nbsp;Постановление Правительства РФ&nbsp;от&nbsp;19.06.2020 №&nbsp;890 «О&nbsp;порядке предоставления доступа к&nbsp;минимальному набору функций интеллектуальных систем учета электрической энергии (мощности)»
                  АО&nbsp;«Мособлэнерго» проводит мероприятия по&nbsp;замене ранее установленных&nbsp;и (или) установке новых интеллектуальных приборов учета электрической энергии в&nbsp;случае выхода из&nbsp;строя, утраты, истечения срока
                  эксплуатации или истечения интервала между поверками прибора учета электрической энергии в&nbsp;отношении непосредственно или опосредованно присоединенных к&nbsp;принадлежащим им&nbsp;на&nbsp;праве собственности или ином законном
                  основании объектам электросетевого хозяйства, энергопринимающих устройств потребителей электрической энергии (кроме приборов учета, установленных в&nbsp;многоквартирных домах).
                </p>
                <p>Установка новых приборов учета электрической энергии и&nbsp;допуск их&nbsp;в&nbsp;эксплуатацию проводится АО&nbsp;«Мособлэнерго» на&nbsp;БЕЗВОЗМЕЗДНОЙ основе.</p>
                <p>
                  Устанавливаемые интеллектуальные приборы учета электрической энергии самостоятельно транслируют данные о&nbsp;потреблении в&nbsp;режиме реального времени и&nbsp;избавляют потребителей от&nbsp;необходимости передавать показания
                  счетчика «вручную».
                </p>
                <p>
                  Ранее установленный прибор учета электрической энергии после установки нового не&nbsp;демонтируется, на&nbsp;свое усмотрение потребители могут использовать его в&nbsp;качестве контрольного или демонтировать его собственными силами.
                </p>
                <p>
                  В&nbsp;случае выхода из&nbsp;строя, утраты, истечения срока эксплуатации или истечения интервала между поверками прибора учета электрической энергии потребитель вправе обратиться в&nbsp;филиал АО&nbsp;«Мособлэнерго», в&nbsp;зоне
                  которого находится земельный участок, домовладение или иной объект, с&nbsp;заявлением о&nbsp;замене прибора учета электрической энергии.
                </p>
                <p>
                  Форма анкеты-заявки на&nbsp;замену прибора учёта размещена на&nbsp;официальном сайте АО&nbsp;«Мособлэнерго» в&nbsp;разделе «Портал Потребителя» (moetp.ru). Во&nbsp;вкладке «Документы» необходимо выбрать раздел «Типовые документы»
                  и&nbsp;перейти к&nbsp;разделу «Приборы учета».
                </p>
                <p>
                  Заявление о&nbsp;замене прибора учета электрической энергии можно подать любым удобным для потребителя способом: в&nbsp;электронном виде, направив по&nbsp;адресу mail@mosoblenergo.ru; в&nbsp;центрах обслуживания клиентов
                  АО&nbsp;«Мособлэнерго» (адреса ЦОК опубликованы на&nbsp;сайте mosoblenergo.ru/, вкладка «Потребителям»&nbsp;— раздел «Облуживание потребителей»&nbsp;— раздел «Офисы обслуживания потребителей»); направить почтой России или
                  по&nbsp;электронной почте по&nbsp;адресам филиалов и&nbsp;производственных отделений компании (контактная информация размещена на&nbsp;сайте mosoblenergo.ru/).
                </p>
                <p>
                  Потребителям многоквартирных домов, подключённых к&nbsp;сетям АО&nbsp;«Мособлэнерго», для замены прибора учета электрической энергии необходимо обратиться к&nbsp;гарантирующему поставщику электроэнергии. Его контактная информация
                  указывается на&nbsp;квитанциях оплаты электричества.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
