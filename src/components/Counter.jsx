import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/countSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state. counterReducer.count)
  return (
   <>
   
  
     <div className="border rounded p-5 w-50 text-center ">
         <h1 style={{fontSize:'100px'}}>{count}</h1>
        <div className='d-flex align-items-center justify-content-around'>
          <button onClick={()=>dispatch(decrement())} className='btn btn-light rounded-0  '>Decrement</button>
          <button onClick={()=>dispatch(reset())} className='btn btn-light rounded-0  '> Reset </button>
          <button onClick={()=>dispatch(increment())} className='btn btn-light rounded-0 '>Increment</button>
        </div>
     </div>
   
   </>
  )
}

export default Counter