import React from 'react'
import Product from '../component/Product/Product'
import {UserProduct , UserProductAction } from '../component/provider/ProductProvider'

const ProductList = () => {
 const products = UserProduct()
 const dispatch = UserProductAction()
  const renderProducts = ()=>{
    if (products.length === 0) {
        return <p>there is no product in cart</p>
    }
    return products.map((item)=>{
      return <Product product={item} key={item.id}
        onChange={(e)=>dispatch({type:'edit',id:item.id,event:e})}
        onDeletes={()=>dispatch({type:'remove',id:item.id})}
        onIncrement={()=>dispatch({type:'increment',id:item.id})}
        onDecrement={()=>dispatch({type:'decrement',id:item.id})}/>
    })
  }
  return (
    <div>
      {!products.length && <h2>go to shopping</h2>}
      {renderProducts()}
    </div>
  )
}

export default ProductList



