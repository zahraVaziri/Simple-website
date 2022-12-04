import React, { useContext } from 'react'
import { CountContext, CountContextDispach, UserAction, UserCount } from './CountPrvider'

const CounterOne = () => {
    const count = UserCount()
    const dispatch = UserAction()
    
  return (
    <div>
      <h2>count : {count}</h2>
      <button onClick={()=> dispatch({type: 'add',value:1})}>add</button>
      <button onClick={()=> dispatch({type: 'decrement',value:1})}>decrement</button>
      <button onClick={()=> dispatch({type: 'reset'})}>decrement</button>

    </div>
  )
}

export default CounterOne


// const CounterOne = () => {
//     const count = UserCount()
//     const {addFive ,addOne} = UserAction()
    
//   return (
//     <div>
//       <h2>count : {count}</h2>
//       <button onClick={addOne}>click</button>
//       <button onClick={addFive}>click</button>

//     </div>
//   )
// }