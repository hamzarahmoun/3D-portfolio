import React, { useState } from 'react'
import { logo, menu, close } from "../assets";

import { styles } from '../styles'
import { Link } from 'react-router-dom'
import { navLinks } from "../constants/index.js";


const Navbar = () => {
  const [active, setActive] = useState("'")
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link className='flex items-center gap-1' to='/' onClick={() => { setActive(""); window.scroll(0, 0) }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Hamza &nbsp;
            <span className='sm:block hidden'> | &nbsp; Rahmoun</span>  </p>
        </Link>
        <ul className='list-non hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-poniter`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>

            </li>

          ))}
        </ul>

        {/*............navbare mobile view ...........*/}

        <div className='flex sm:hidden flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-non flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[16px] font-medium cursor-poniter font-poppins`}
                  onClick={() => {
                    setActive(link.title)
                    setToggle(!toggle)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>

                </li>

              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar