import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from "../contexts/ShopContext"

const RelatedProducts = ({category, subCategory}) => {

  const {product} = useContext(ShopContext)
  const [related, setRelated] = useState([])

  useEffect(() => {
    if(product.length > 0){
      let productsCopy = product.slice()

      productsCopy = productsCopy.filter((item) => category === item.category)
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)

      console.log(productsCopy.slice(0, 5));
      
    }
  }, [product])

  return (
    <div>

    </div>
  )
}

export default RelatedProducts