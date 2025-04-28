import React from 'react'
import * as motion from 'motion/react-client'
import { easeInOut } from 'motion'

function Animation() {
  return (
   <motion.h1 className='text-2xl font-bold' initial={{x:'-100%'}} animate={{x:'0'}} transition={{duration:1}}>Sliding Text</motion.h1>
  )
}

export default Animation