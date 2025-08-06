import React, { useContext, useEffect, useState } from 'react'
// import { products } from '../assets/assets'
import { ShopContext } from '../contexts/ShopContext'
import Title from "../components/Title"
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {

  const {products, currency, cartItems, updateQuantity} = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const temporaryData = []
    for(const datas in  cartItems){
      for(const data in cartItems[datas]){
        if(cartItems[datas][data] > 0){
          temporaryData.push({
            _id: datas,
            size: data,
            quantity: cartItems[datas][data]
          })
        }
      }

      // console.log(temporaryData);
      setCartData(temporaryData)
      
    }
  }, [cartItems])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'> 
        <Title text1={'Your'} text2={'Cart'}/>
      </div>
      <div className=''>
        {
          cartData.map((item, ind) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              <div key={ind} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-2'>
                <div className='flex items-start gap-4'>
                  <img src= {productData.image[0]} alt="" className='w-16 sm:w-20'/>
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 bg-slate-200 border'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-12 px-1 sm:px-2 py-1' type="number" min={1} max={10} defaultValue={item.quantity}/>
                <img src={assets.bin_icon} alt="" className='w-4 mr-4 sm:w-5 cursor-pointer' onClick={() => updateQuantity(item._id, item.size, 0)}/>
              </div>
            )
        })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
        </div>
      </div>
    </div>
  )
}

export default Cart