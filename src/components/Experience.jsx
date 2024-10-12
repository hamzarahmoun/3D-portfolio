import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../Constants'
import SectionWrapper from '../Hoc/SectionWrapper'
import { textVariant } from '../utils/motion'
const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText} >What i have done so far</p>
        <p className={styles.sectionHeadText}>Work Experience</p>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Experience, "work")