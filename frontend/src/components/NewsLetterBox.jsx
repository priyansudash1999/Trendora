import React from 'react'

const NewsLetterBox = () => {

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='text-center'>
      <p className='etxt-2xl font-medium text-gray-800'>Subscribe Now to get 20% Off</p>
      <p className='text-gray-400 mt-2'>Join our mailing list today and enjoy an exclusive 20% off your first purchase!</p>

      <form onSubmit={submitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none text-gray-600 placeholder:text-gray-400' type="email" placeholder='Enter your email' required/>
        <button className='bg-black text-white text-sm px-10 py-4 cursor-pointer' type='submit'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox