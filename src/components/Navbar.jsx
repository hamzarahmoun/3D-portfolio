import React, { useState } from 'react'
import { Assets } from '../Assets/index.js'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import { navLinks } from '../Constants/constants.js'; // Ensure you import navLinks

const Navbar = () => {
  const [active, setActive] = useState("'")
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link className='flex items-center gap-1' to='/' onClick={() => { setActive(""); window.scroll(0, 0) }}>
          <img src={Assets.logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Adreian
            <span className='sm:block hidden'> | javascript Mastery</span>  </p>
        </Link>
        <ul className='list-non hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar