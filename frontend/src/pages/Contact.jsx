import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="" className='w-full max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>100, Athgarh <br /> <span className='text-black font-semibold'>Cuttack, Odisha, India</span><br />754029</p>
          <p className='text-gray-500'>Tel: (+91)909-0909 <br />Email: priyansu@trendora.xyz</p>
          <p className='font-semibold text-gray-500 text-xl'>Careers at Trendora</p>
          <p>Learn more about us</p>
          <button className='border border-black px-8 py-2 hover:bg-black hover:text-white hover:border-2 hover:border-white rounded-full'>Explore Jobs</button>
        </div>
      </div>
       <NewsLetterBox />
    </div>
  )
}

export default Contact