import React from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { services } from '../Constants/index'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'
// import SectionWrapper from '../hoc/SectionWrapper'
const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
        variants={fadeIn("right","spring",0.5 * index , 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
          options={{max:45,scale:1,speed:450}}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} 
            className='w-16 h-16 object-contain'
            />
            <p 
            className='text-white text-[20px] font-bold text-center'
            >{title}</p>

          </div>

        </motion.div>

      </Tilt>
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

// export default SectionWrapper
// {About, "about"}