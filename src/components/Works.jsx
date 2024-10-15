import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {github} from '../Assets'
import {projects} from '../Constants'
import SectionWrapper from '../hoc/SectionWrapper'
import { textVariant } from '../utils/motion'

const Works = () => {
  return (
    <>
    
      {/*......... AboutHeadline + AboutSubHeadline ........*/}

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.heroHeadText}>Projects.</h2>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works,"")