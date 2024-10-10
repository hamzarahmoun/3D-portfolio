import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import ComputersCanvas from './Canvas/Computers'
import { motion } from "framer-motion";

const Hero = () => {
 
  return (
    <section className='relative w-full h-[850px] mx-auto'>
      {/*......... vertical line + HeroText ........*/}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/*............verticale line ......*/}
        <div className='flex flex-col justify-center items-center mt-5'>
          {/*............point......*/}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          {/*............line......*/}
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        {/*............HeroText ......*/}
        <div>
          {/*.........HeroText Headlien  ........*/}
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Hamza</span></h1>
          {/*.........HeroText Sub-Headlien  ........*/}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop 3d visual, user
            <br className='sm:block hidden' /> interface and web application
          </p>
        </div>
      </div>
      {/*......... Canva ........*/}
      <ComputersCanvas />
      {/*......... scroll bottom ........*/}
      <div className='absolute w-full mt-[-20] flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div 
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{y:[0,24,0]}}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              />
            
          </div>
        </a>

      </div>
    </section>
  )
}

export default Hero