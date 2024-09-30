"use client"
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  
  return (
    <motion.div className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}}>
      {/* Container */}
      <div>
        {/* Text container */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-60 overflow-scroll'>
          {/* Biograpy container */}
          <div>BIOGRAPHY</div>
          {/* Skills container */}
          <div>SKILLS</div>
          {/* Experience container */}
          <div>EXPERIENCE</div>
        </div>
        {/* SVG container */}
        <div className="hidden"></div>
      </div>
</motion.div>
  )
}

export default About