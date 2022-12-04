import React from 'react'
import { BiTrash } from "react-icons/bi";
import style from './Product.module.css'
const Product = ({onChange,onDecrement,onDeletes,onIncrement,product}) => {
  return (
    <div className={style.product}>
      <p>product : {product.title}</p>
      <p>price : {product.price}</p>
      <p>{product.children}</p>
      {/* <input className={style.input} type='text' onChange={onChange} value={product.title} /> */}
      <button className={`${style.button} ${product.quantity === 1 && style.remove}`}onClick={onDecrement}> {product.quantity > 1 ? '-' : <BiTrash/>}</button>
      <span className={style.value}>{product.quantity}</span>
      <button className={`${style.button} ${style.inc}`}onClick={onIncrement}>+</button>
      <button className={style.button} onClick={onDeletes}>delete</button>
    </div>
  )
}

export default Product
