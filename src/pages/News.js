import React from 'react'
import {motion} from 'framer-motion'

export default function News() {
  return (
    <motion.div className="page-grid__content" id="content"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration: .5}}
    >
        <h1 className="inner-post__title">Новости компании</h1>
        <p>
            Здесь будут новости компании
        </p>
        </motion.div>
  )
}
