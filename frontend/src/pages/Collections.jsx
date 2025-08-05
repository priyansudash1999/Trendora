import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from "../contexts/ShopContext"
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collections = () => {

  const {products, search, showSearch} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const[filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const[subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')
  
  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilters = () => {
    let productsCopy = products.slice()

    if(showSearch && search){
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter((item) => category.includes(item.category))
    }
    if(subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(filterProductsCopy.sort((a, b) => (a.price - b.price)))
        break;
      case 'high-low':
        setFilterProducts(filterProductsCopy.sort((a,b) => b.price - a.price))
        break;
      default:
        applyFilters()
        break;
    }
  }

  useEffect(() => {
    applyFilters()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filtered Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters <img src= {assets.dropdown_icon} className= {`h-3 mt-1 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" /></p>
        
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '': 'hidden'} sm:block`}>
          <p className='mb3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-500'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>
        
        {/* Sub categories filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '': 'hidden'} sm:block`}>
          <p className='mb3 text-sm font-medium'>Types</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-500'>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collections'}/>

          {/* Sorting the products */}
          <select onChange={(e) => setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relevant">Sort By:Relevant</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        {/* Display products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item, ind) => (
              <ProductItem key={ind} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collections