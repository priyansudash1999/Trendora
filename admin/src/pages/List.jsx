import React, { useEffect, useState } from 'react'
import axios from "axios"
import {backendUrl, currency} from "../App.jsx"
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list, setList] = useState([])
  const fetchList = async() => {
    try {
      const res = await axios.get(backendUrl + '/api/product/list-of-products')
      // console.log(res.data);
      if(res.data.success){
        setList(res.data.products)
      }
      else{
        toast.error(res.data.message)
      }
      
    } catch (error) {
      console.error(error);
      toast.error(error.message)
    }
  }

  const deleteProduct = async(id) => {
    try {
      const res = await axios.post(backendUrl + '/api/product/remove', {id}, {headers: {token}})
      if(res.data.success){
        toast.success(res.data.message)
        await fetchList()
      }
      else{
        toast.error(res.data.message)
      }
      
    } catch (error) {
      console.error(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
   <>
    <p className='mb-2 '>All Products List</p>
    <div className='flex flex-col gap-2'>
      {/* list table */}
      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-200 text-sm'>
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className='text-center'>Action</b>
      </div>

      {/* products render */}
      {
        list.map((item, ind) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={ind}>
            <img className='w-15' src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={() => deleteProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
          </div>
        ))
      }
    </div>
   </>
  )
}

export default List