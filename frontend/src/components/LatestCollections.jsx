import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from "../contexts/ShopContext"
import Title from "./Title"
import ProductItem from './ProductItem'

const LatestCollections = () => {

  const {products} = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])
  
  useEffect(() => {
    setLatestProducts(products.slice(0, 40))
  }, [])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'Latest'} text2={'Collections'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our newest arrivals, curated to bring you the freshest trends and timeless essentials.</p>
      </div>

      {/* Render Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grids-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, ind) => (
            <ProductItem  key={ind} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollections