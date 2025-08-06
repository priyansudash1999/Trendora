import React from 'react'
import Title from "../components/Title"
import { assets } from '../assets/assets'
import NewsLetterBox from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10'>
        <img src={assets.about_img} alt="" className='w-full max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:W-2/4 text-gray-600'>
          <p className=''>We’re passionate about bringing you carefully curated products that blend design, comfort, and value.</p>
          <p>What started as a small idea has grown into a trusted destination for shoppers who expect more. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p className=''>Our mission is to deliver exceptional products that inspire confidence and joy.We aim to create a seamless shopping experience built on trust, quality, and customer satisfaction.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'> 
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Every product goes through strict checks to ensure it meets our high standards of craftsmanship, durability, and performance.</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience: </b>
          <p className='text-gray-600'>We make shopping simple, fast, and stress-free. With easy navigation, secure payments, and quick delivery, everything is designed for your comfort.</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services: </b>
          <p className='text-gray-600'>Your satisfaction is our priority.Our friendly and responsive support team is always here to help — whether you have a question, need assistance, or just want to share feedback..</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>

  )
}

export default About