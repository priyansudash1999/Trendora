import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex justify-between sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
        <div>
          <img src={assets.loggo} alt="" className='mb-5 w-32'/>
          <p className='w-full md:w-2/3 text-gray-600'>
            Stay connected with us for updates, offers, and more — your journey starts here.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-4'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Get in Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+909090909</li>
            <li>priyansu@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className='mt-4'>
        <hr className='text-gray-300 border-dotted' />
        <p className='py-5 text-sm text-center'>Copyright 2025@trendora.xyz - All right reserved</p>
      </div>
    </div>
  )
}

export default Footer