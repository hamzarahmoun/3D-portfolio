import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { services } from '../Constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import { p } from 'framer-motion/client'
const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <p>{title}</p>
    )
  }
  return (
    <>
      {/*......... AboutHeadline + AboutSubHeadline ........*/}

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>

      {/*......... About Paragraph........*/}

      <motion.p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        variants={fadeIn("", "", 0.1, 1)}>
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/*......... About Service Card ........*/}

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard index={index}
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default About