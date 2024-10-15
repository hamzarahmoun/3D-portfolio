import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {github} from '../Assets'
import {projects} from '../Constants'
import SectionWrapper from '../hoc/SectionWrapper'
import { fadeIn, textVariant } from '../utils/motion'

const Works = () => {
  return (
    <>
      {/*......... AboutHeadline + AboutSubHeadline ........*/}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.heroHeadText}>Projects.</h2>
      </motion.div>
            {/*......... paragraph ........*/}

      <div className='w-full flex'>
        <motion.p 
        variants={fadeIn("","",0.1,1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works,"")