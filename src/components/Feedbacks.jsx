import React from 'react'
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionWrapper from '../hoc/SectionWrapper'
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../Constants";

const Feedbacks = () => {
  const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
    return (
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-black-200 p-10 rounded-2xl xs:w-[310px] w-full'
      >
        <p className='text-white font-black-100 text-[48px]'>"</p>
        <div className='mt-1'>
          <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
          <div className='mt-7 flex -justify-between items-center gap-1'>
            <div className='flex-1 flex flex-col'>
              <p
              className='text-white font-medium text-[16px]'
              > <span className='blue-text-gradient'>@</span>{name}</p>
              <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>
            </div>

            <img src={image} alt={`feedback-by-${name}`} 
            className='w-10 h-10 rounded-full object-contain'
            />
          </div>
        </div>
      </motion.div>
    )
  }
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      {/*....  SUb = Headline ....*/}

      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[360px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What Other Say</p>
          <h2 className={styles.heroHeadText}>Testomonials.</h2>
        </motion.div>
      </div>

      {/*....  SUb = Headline ....*/}
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testomonial, index) => (
          <FeedbackCard
            key={testomonial.name}
            index={index}
            {...testomonial}
          />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks, "")
