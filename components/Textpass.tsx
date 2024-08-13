import React from 'react'
import { VelocityScroll } from './ui/scroll-based-velocity'

const Textpass = () => {
  return (
    <div >
          <VelocityScroll
      text="3D and animations"
      default_velocity={5}
      className="font-display opacity-30 text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
    </div>
  )
}

export default Textpass