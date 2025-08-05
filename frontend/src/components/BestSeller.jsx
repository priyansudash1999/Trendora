import React, {useContext, useEffect, useState } from 'react'
import {ShopContext} from "../contexts/ShopContext"
import Title from "./Title"
import ProductItem from './ProductItem'

const BestSeller = () => {

  const {products} = useContext(ShopContext)
  // console.log(products);
  
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter((item) => (
      item.bestseller 
    ))
    setBestSeller(bestProduct.slice(0, 10))
    // console.log(bestProduct);
    
  }, [])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'Best'} text2 = {'Sellers'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Explore the most-loved picks that everyone’s talking about — our top-selling favorites just for you.</p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grids-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((item, ind)=> (
          <ProductItem key={ind} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))}
      </div>
    </div>
  )
}

export default BestSeller