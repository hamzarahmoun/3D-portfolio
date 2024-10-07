import { style } from 'framer-motion/client'
import React from 'react'
import { styles } from '../styles'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
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
    </section>
  )
}

export default Hero