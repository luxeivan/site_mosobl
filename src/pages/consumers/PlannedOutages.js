import { motion } from "framer-motion";
import React from "react";
import TopImage from "../../components/TopImage";
import img1327b1c06a19e1362c9d6bc894981c97 from "../../img/1327b1c06a19e1362c9d6bc894981c97.jpg";

export default function PlannedOutages() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <TopImage image={img1327b1c06a19e1362c9d6bc894981c97} title={"Плановые отключения"} />
      <div className="page-grid__content" id="content">
        <div className="subscription-block">
          <div className="text-area">
            <p>Актуальную информацию о плановых отключениях можно получить в соцсетях компании:</p>
            <ul>
              <li>
                <a href="https://vk.com/mosoblenergo24" target="_blank" rel="nofollow">
                  https://vk.com/mosoblenergo24
                </a>
              </li>
              <li>
                <a href="https://ok.ru/mosoblenergo24" target="_blank" rel="nofollow">
                  https://ok.ru/mosoblenergo24
                </a>
              </li>
              <li>
                <a href="https://t.me/mosoblenergo24" target="_blank" rel="nofollow">
                  https://t.me/mosoblenergo24
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
