import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../contexts/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  // console.log(productId);
  const{products, currency} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'> 

        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.5%] w-full'>
            {
              productData.image.map((item, ind) => (
                <img src= {item} key={ind} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' onClick={() => setImage(item)}/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-full h-auto' />
          </div>
        </div>

        {/* Products Info */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon}alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(1222)</p>
            </div>
            <p className='mt-5 text-2xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-2 text-gray-600 md:w-4/5'>{productData.description}</p>

            <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item, ind) => (
                    <button key={ind} className={`border px-4 py-2 bg-gray-100 ${item === size ? 'bg-orange-400' : ''}`} onClick={() => setSize(item)}>{item}</button>
                  ))
                }
              </div>
            </div>

            <button className='bg-black text-white py-3 px-5 rounded-lg active:bg-gray-600'>Add To Cart</button>

            <hr className='mt-8 sm:w-4/5 text-gray-300' />
            <div className='text-sn text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original</p>
                <p>COD option Available</p>
                <p>Easy return upto 10 days</p>
            </div>
        </div>
      </div>

      {/* Desctiption and review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(1222)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-600'>
          <p className=''>Discover all the details you need before making a purchase.
                          From materials and features to sizing and specs, we break it down clearly.
                          See what real customers are saying in verified reviews.
                          Shop smarter with honest insights and helpful feedback. </p>
          <p className=''>Get in-depth product insights and honest customer reviews — everything you need before you buy.</p>
        </div>
      </div>

      {/* Related products */}
      {/* <RelatedProducts category={productData.category} subCategory={productData.subCategory}/> */}
    </div>
  ) : 
  <div className='opacity-0'>

  </div>
}

export default Product