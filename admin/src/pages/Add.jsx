import React, { useState } from 'react'
import {assets} from "../assets/assets.js"
import axios from 'axios'
import { backendUrl } from '../App.jsx'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [img1, setImg1] = useState(false)
  const [img2, setImg2] = useState(false)
  const [img3, setImg3] = useState(false)
  const [img4, setImg4] = useState(false)

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [bestSeller, setBestSeller] = useState(false)
  const [sizes, setSizes] = useState([])

  const submitHandler = async(e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", desc)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestSeller", bestSeller)
      formData.append("sizes", JSON.stringify(sizes))
      img1 && formData.append("image1", img1)
      img2 && formData.append("image2", img2)
      img3 && formData.append("image3", img3)
      img4 && formData.append("image4", img4)

      const res = await axios.post(backendUrl + "/api/product/add", formData, {headers: {token}})
      // console.log(res.data);
      if(res.data.success){
        toast.success(res.data.message)
        setName('')
        setDesc('')
        setImg1(false)
        setImg2(false)
        setImg3(false)
        setImg4(false)
        setPrice('')
      }
      else{
        toast.error(res.data.message)
      }
    } catch (error) {
      // console.error(error); 
      toast.error(error.message)
    }
  }

  return (
    <form className='flex flex-col w-full items-start gap-3' onSubmit={submitHandler}>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="img1">
            <img className='w-20' src={!img1 ? assets.upload_area : URL.createObjectURL(img1)} alt="" />
            <input onChange={(e) => setImg1(e.target.files[0])} type="file" id='img1' hidden/>
          </label>
          <label htmlFor="img2">
            <img className='w-20' src={!img2 ? assets.upload_area : URL.createObjectURL(img2)} alt="" />
            <input onChange={(e) => setImg2(e.target.files[0])} type="file" id='img2' hidden/>
          </label>
          <label htmlFor="img3">
            <img className='w-20' src={!img3 ? assets.upload_area : URL.createObjectURL(img3)} alt="" />
            <input onChange={(e) => setImg3(e.target.files[0])} type="file" id='img3' hidden/>
          </label>
          <label htmlFor="img4">
            <img className='w-20' src={!img4 ? assets.upload_area : URL.createObjectURL(img4)} alt="" />
            <input onChange={(e) => setImg4(e.target.files[0])} type="file" id='img4' hidden/>
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2 '>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Type here' className='w-full max-w-[500px] px=3 py-2 border' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2 '>Product Description</p>
        <textarea onChange={(e) => setDesc(e.target.value)} value={desc} type="text" placeholder='Product Content...' className='w-full max-w-[500px] px=3 py-2 border' required/>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) =>  setCategory(e.target.value)} className='mt-2 w-full px-3 py-2'>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product Subcategory</p>
          <select onChange={(e) =>  setSubCategory(e.target.value)} className='mt-2 w-full px-3 py-2'>
            <option value="topwear">Topwear</option>
            <option value="bottomwear">Bottomwear</option>
            <option value="winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e) =>  setPrice(e.target.value)} value={price} type="number" placeholder='100' className='w-full px-3 py-2 sm:w-[125px]'/>
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div onClick={() =>  setSizes(prev => prev.includes('S') ? prev.filter(item => item !== 'S') : [...prev, 'S'])}>
            <p className={` ${sizes.includes('S') ? 'bg-amber-400' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>S</p>
          </div>

          <div onClick={() =>  setSizes(prev => prev.includes('M') ? prev.filter(item => item !== 'M') : [...prev, 'M'])}>
            <p className={` ${sizes.includes('M') ? 'bg-amber-400' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>M</p>
          </div>

          <div onClick={() =>  setSizes(prev => prev.includes('L') ? prev.filter(item => item !== 'L') : [...prev, 'L'])}>
            <p className={` ${sizes.includes('L') ? 'bg-amber-400' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>L</p>
          </div>

          <div onClick={() =>  setSizes(prev => prev.includes('XL') ? prev.filter(item => item !== 'XL') : [...prev, 'XL'])}>
            <p className={` ${sizes.includes('XL') ? 'bg-amber-400' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input type="checkbox" id='bestSeller' onChange={() => setBestSeller(prev => !prev)}/>
        <label className='cursor-pointer' htmlFor="bestSeller">Add to Best Seller</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white cursor-pointer'>ADD</button>
    </form>
  )
}

export default Add