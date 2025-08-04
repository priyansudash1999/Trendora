import React from 'react'
import { assets } from '../assets/assets'

const CompanyPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-600'>
      <div className=''>
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
      <div className=''>
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>7 Days return policy</p>
        <p className='text-gray-400'>7 days free return policy</p>
      </div>
      <div className=''>
        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default CompanyPolicy