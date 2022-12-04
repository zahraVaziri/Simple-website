

import React, { useContext, useReducer, useState } from 'react'


 const CountContext = React.createContext()
 const CountContextDispach = React.createContext()

 
 const initialState = 0
const reducer = (state,action)=>{
    switch (action.type) {
        case 'add':
            return state + action.value
        case 'decrement':
            return state - action.value
        case 'reset':
            return initialState
        default:
          return  state;
    }
}

const CountPrvider = ({children}) => {
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={count}>
        <CountContextDispach.Provider value={dispatch}>
             {children}
        </CountContextDispach.Provider>
        </CountContext.Provider>
  )
}

export default CountPrvider

export const UserCount = ()=> useContext(CountContext)
export  const UserAction = ()=>{
   return useContext(CountContextDispach) 
  
} 






// import React, { useContext, useState } from 'react'


//  const CountContext = React.createContext()
//  const CountContextDispach = React.createContext()

// const CountPrvider = ({children}) => {
//     const [count,setcount] = useState(0)
//   return (
//     <CountContext.Provider value={count}>
//         <CountContextDispach.Provider value={setcount}>
//              {children}
//         </CountContextDispach.Provider>
//         </CountContext.Provider>
//   )
// }

// export default CountPrvider

// export const UserCount = ()=> useContext(CountContext)
// export  const UserAction = ()=>{
//    const setCount= useContext(CountContextDispach) 
//    const addOne = ()=>{
//         setCount(preState => preState + 1)
//     }
//     const addFive = ()=>{
//         setCount(preState => preState + 5)
//     }
//     return{addFive,addOne}
// } 