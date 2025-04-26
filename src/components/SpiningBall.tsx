import React from 'react'
import * as motion from 'motion/react-client'
import { easeInOut } from 'motion'
function SpiningBall() {
  return (
    <motion.div className='w-40 h-40 bg-amber-300 rounded-full'  animate={{y:[0,-100,0]}}  transition={{duration:3,repeat:Infinity, ease:"easeInOut"}}></motion.div>
  )
}

export default SpiningBall