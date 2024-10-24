import React from "react";
import { motion } from "framer-motion";
import TopImage from "../../components/TopImage";
import img4c2c362e8d8fa557788c556795d32fae from "../../img/photo_5343684875758200971_y.jpg";

export default function InformationOnBonds() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <TopImage
                image={img4c2c362e8d8fa557788c556795d32fae}
                title={"ИНВЕСТОРАМ"}
            />
            <div className="page-grid__content" id="content">
                <div className="text-area border-bottom" style={{ margin: "0 auto", maxWidth: 1600 }}>
                   <h1>123</h1>
                </div>
            </div>
        </motion.div>
    );
}
