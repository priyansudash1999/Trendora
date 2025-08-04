import React, { useState } from 'react'
import {assets} from "../assets/assets.js"
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {

  const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src= {assets.loggo} alt="" className='w-48'/>
      <ul className='hidden sm:flex gap-4 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col gap-1 items-center'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/collections' className='flex flex-col gap-1 items-center'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/about' className='flex flex-col gap-1 items-center'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col gap-1 items-center'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src= {assets.search_icon} alt="" className='w-5 cursor-pointer'/>

        <div className='group relative'> 
          <img src= {assets.profile_icon} alt="" className='w-5 cursor-pointer'/>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>  
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src= {assets.cart_icon} alt="" className='w-5 min-w-5'/>
          <p className='absolute right-[-5px] bottom-[-5px] text-center bg-black leading-4 rounded-full aspect-square text-[8px] w-4 text-white'>0</p>
        </Link>

        <img onClick={() => setVisible(true)} src= {assets.menu_icon} alt="" className='w-5 cursor-pointer sm:hidden'/>
      </div>

      {/* Sidebar for smaller screen */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src= {assets.dropdown_icon} alt="" className='h-4 rotate-180'/>
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} to='/' className='py-2 pl-5 border'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-5 border'>Collections</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-5 border'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-5 border'>Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar