import React from 'react'
import * as motion from 'motion/react-client'
import { easeInOut } from 'motion'
function Box() {
  return (
    <motion.div className='w-40 h-40 bg-amber-300' initial={{x:-100,}} animate={{x:100}}  transition={{duration:3,repeat:Infinity, ease:"easeInOut"}}></motion.div>
  )
}

export default Box