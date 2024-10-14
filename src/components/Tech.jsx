import React from 'react'
import {BallCanvas} from './Canvas'
import SectionWrapper from '../Hoc/SectionWrapper'
import {technologies} from '../Constants'
import { div } from 'framer-motion/client'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");