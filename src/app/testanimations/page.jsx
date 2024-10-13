"use client"

import React from 'react'
import {motion} from 'framer-motion'

const TestPage = () => {
  const variants = {
    variant1:{
      x:+192, opacity:100,
      transition:{duration:2},
    }
  }


  return (
    <div className='flex h-full items-center justify-center'>
        <motion.div className="w-96 h-96 bg-red-500 rounded-lg " 
        initial={{x:-700, opacity:0}}
        variants={variants}
        animate="variant1"
        ></motion.div>
        <motion.div className="w-96 h-96 bg-red-500 rounded-lg " 
        initial={{x:+700, opacity:0}}
        animate={{x:-192, opacity:100}}
        transition={{duration:2}}
        ></motion.div>
        
    </div>
  )
}

export default TestPage;

{/* <div className='flex h-full items-center justify-center'>
<motion.div className="w-96 h-96 bg-red-500 rounded-lg " 
initial={{x:-700, opacity:0}}
animate={{x:+192, opacity:100}}
transition={{duration:2}}
></motion.div>
<motion.div className="w-96 h-96 bg-red-500 rounded-lg " 
initial={{x:+700, opacity:0}}
animate={{x:-192, opacity:100}}
transition={{duration:2}}
></motion.div>
</div> */}