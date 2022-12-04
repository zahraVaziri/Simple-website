import React, { useState } from 'react'
import Select from 'react-select'
import Search from '../../common/Search/Search'
import SelectComponent from '../../common/select/select'
import { UserProductAction } from '../provider/ProductProvider'
import styles from './Filter.module.css'
const Filter = () => {
    const dispatch = UserProductAction()
    const [value, setValue]= useState('')
    const [sort, setSort]= useState('')
    const changeHandler = (selectedOption)=>{
        setValue(selectedOption)
        dispatch({type:'filter',selectedOption})
        dispatch({type:'sort',selectedOption:sort})
    }
    const sortHandler = (selectedOption)=>{
        setSort(selectedOption)
        dispatch({type:'sort',selectedOption})
    }
    const options =[
        {value:"", label:"All"},
        {value:"Xs", label:"Xs"},
        {value:"S", label:"S"},
        {value:"M", label:"M"},
        {value:"X", label:"X"},
        {value:"XL", label:"XL"},
        {value:"XXL", label:"XXL"}
    ]
    const sortOption =[
        {value:"highest", label:"highest"},
        {value:"lowest", label:"lowest"}
    ]
  return (
  <>
  <p>filter products based on:</p>
  <Search filter={value}/>
    <div className={styles.filter}>
      
      
       
      <SelectComponent
      title="filter by"
      value={value}
      onChange={changeHandler}
      options={options}
      />
      <SelectComponent
      title="sort by"
      value={sort}
      onChange={sortHandler}
      options={sortOption}
      />
      </div>
   </>
  )
}

export default Filter
