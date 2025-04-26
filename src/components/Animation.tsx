import React from 'react'
import * as motion from 'motion/react-client'
import { easeInOut } from 'motion'

function Animation() {
  return (
   <motion.div className='w-40 h-60 rounded-2xl bg-amber-300' whileHover={{skewX:-10,skewY:-10}}>

   </motion.div>
  )
}

export default Animation