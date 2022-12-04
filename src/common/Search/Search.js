import React, { useState } from 'react'
import { UserProductAction } from '../../component/provider/ProductProvider'
import styles from './search.module.css'
const Search = ({filter}) => {

    const[value,setvalue]= useState('')
    const dispatch= UserProductAction()
    const changeHandler = (e)=>{
        dispatch({type:'filter',selectedOption:filter})
        dispatch({type:'search',event:e})
        setvalue(e.target.value)
    }
  return (
    <div className={styles.formControl}>
      <div>search for :</div>

        <input
        type={'text'}
        placeholder="search for ..."
        onChange={changeHandler}
        value={value}
        />
    </div>
  )
}

export default Search
