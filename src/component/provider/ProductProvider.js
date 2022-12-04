import _ from 'lodash';
import React, { useContext, useReducer, useState } from 'react'
import { ProductData } from '../../db/Product';

 const productContext = React.createContext() //state
 const productContextDispach = React.createContext() //setState

//  const initialState= [
//         {title:'React js', price: '88$',id: 1, quantity:1},
//         {title:'vue js', price: '78$',id: 2, quantity:2},
//         {title:'node js', price: '68$',id: 3, quantity:3}
//         ];

 const reducer = (state,action)=>{
    switch (action.type) {
        case 'increment':{
            const index = state.findIndex(item=> item.id === action.id)
            const product = {...state[index]}
            product.quantity++
            const updateProduct = [...state]
            updateProduct[index] = product
            return updateProduct;
        }
        case 'decrement':{
            const index = state.findIndex(item=> item.id === action.id)
            const product = {...state[index]}
            if (product.quantity === 1) {
                const filterdProducts = state.filter((item)=> item.id !== action.id )
            return filterdProducts
            }else{
                product.quantity--
                const updateProduct = [...state]
                updateProduct[index] = product
                return updateProduct
            }
        }
        case 'edit':{
            const index = state.findIndex(item=> item.id === action.id)
            const product = {...state[index]}
            product.title = action.event.target.value
            const updateProduct = [...state]
            updateProduct[index] = product
            return updateProduct
        }
        case 'remove':
            const findProduct = state.filter((item)=> item.id !== action.id )
            return findProduct;
        case 'filter':{
            const value = action.selectedOption.value
            if (value === "") {
                return ProductData
            }
            const updateProduct = ProductData.filter((p)=> p.availableSizes.indexOf(value) >=0)
            return updateProduct}
        case 'sort':{
            const value = action.selectedOption.value
            const products = [...state]

            if (value === "lowest") {
                return _.orderBy(products,["price"],["asc"])
            }else{
                return _.orderBy(products,["price"],["desc"])
            }
        }
        case 'search':
            const value = action.event.target.value
            if (value === "") {
                return state;
            }else{
                const filterdProducts = state.filter((p)=>
                p.title.toLowerCase().includes(value.toLowerCase()))
                return filterdProducts
            }
        default:
          return  state;
    }
};
const ProductPrvider = ({children}) => {
    const [products,dispatch] = useReducer(reducer,ProductData);
  return (
    <productContext.Provider value={products}>
        <productContextDispach.Provider value={dispatch}>
             {children}
        </productContextDispach.Provider>
        </productContext.Provider>
  )
}

export default ProductPrvider

export const UserProduct = ()=> useContext(productContext)
export  const UserProductAction = ()=>{
  return useContext(productContextDispach) 
} 


