"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { Brain} from '@/components/brain';

const Contact = () => {
  return (
    <motion.div className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}}>
      <div>Portfoliio</div>
      {/* <Brain/> */}
</motion.div>
  )
}

export default Contact