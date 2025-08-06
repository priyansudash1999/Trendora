import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../contexts/ShopContext'

const PlaceOrder = () => {

  const [paymentMethod, setPaymentMethod] = useState('COD')
  const {navigate} = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 min-h-[80vh] border-t'>
      {/* Left side */}
      <div className='flex flex-col gap-3 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 w-full'/>
          <input type="text" placeholder='Last Name' className='border border-gray-300 rounded py-1.5 w-full'/>
        </div>
        <input type="email" placeholder='Enter your email' className='border border-gray-300 rounded py-1.5 w-full'/>
        <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 '/>
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 w-full'/>
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 w-full'/>
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='zip code' className='border border-gray-300 rounded py-1.5 w-full'/>
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 w-full'/>
        </div>
        
        <input type="number" placeholder='Phone Number' className='border border-gray-300 rounded py-1.5 w-full'/>
      </div>

      {/* right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'}/>
          {/* payment options */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setPaymentMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className= {`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'stripe' ? 'bg-green-300' : '' }`}></p>
              <img src= {assets.stripe_logo} alt="" className='h-5 mx-4' />
            </div>
             <div onClick={() => setPaymentMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className= {`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-green-300' : '' }`}></p>
              <img src= {assets.razorpay_logo} alt="" className='h-5 mx-4' />
            </div>
             <div onClick={() => setPaymentMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className= {`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-green-300' : '' }`}></p>
              <p className='text-gray-500 text-sm '>Cash On Delivery</p>
            </div>
          </div>
          
          <div className='w-full text-end mt-8 '>
            <button onClick={() => navigate('/order')} className='bg-black text-white px-16 py-2 rounded-lg text-sm'>Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder