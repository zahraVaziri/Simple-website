import React, { useReducer } from 'react'

const initialState = {
    firstReducer:0,
    
}
const reducer = (state,action)=>{
    switch (action.type) {
        case 'addOne':
            return {...state,firstReducer: state.firstReducer+action.value}
            case 'decrement':
            return {...state,firstReducer: state.firstReducer-action.value}
            // case 'addOne2':
            // return {...state,secundReducer: state.secundReducer+action.value}
            // case 'decrement2':
            // return {...state,secundReducer: state.secundReducer-action.value}
            case 'reset':
            return initialState
        default:
          return  state;
    }
}

const CountReducer = () => {
   const[count,dispatch]= useReducer(reducer,initialState)
      const[count2,dispatch2]= useReducer(reducer,initialState)

    // const addOne = ()=>{
    //     setCount(prevState => prevState +1)
    // }
    // const addFive = ()=>{
    //     setCount(prevState => prevState +5)
    // }
    // const decrement = ()=>{
    //     setCount(prevState => prevState -1)
    // }
  return (
    <div>
      <h2>count 1: {count.firstReducer}</h2>
      <h2>count 2: {count2.firstReducer}</h2>
      <button onClick={()=>dispatch({type:'addOne',value:1})}>addOne</button>
      <button onClick={()=>dispatch({type:'reset'})}>reser</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
      <button onClick={()=>dispatch2({type:'addOne',value:1})}>addOne2</button>
      <button onClick={()=>dispatch2({type:'decrement',value:1})}>decrement2</button>
    </div>
  )
}

export default CountReducer
