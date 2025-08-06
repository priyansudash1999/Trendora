import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title'

const CartTotal = () => {

  const {currency, deliverFee, getCartAmount} = useContext(ShopContext)

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'Cart'} text2={'Totals'}/>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Delivery Charge</p>
          <p>{currency}{getCartAmount() === 0 || getCartAmount() >= 1000 ? 0 : deliverFee}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() >= 1000 ? getCartAmount(): getCartAmount() + deliverFee}</b>
        </div>
      </div>

    </div>
  )
}

export default CartTotal