import React from 'react'
import {assets} from "../assets/assets.js"

const Navbar = () => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img src={assets.admin} alt="" className='w-30 mt-2 ml-0  mb-2'/>
      <button className='bg-gray-500 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar