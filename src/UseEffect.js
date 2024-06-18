import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState('0');

    // useEffect(()=>{
    //     // akta anonymus function must thaka lagbe. we can fetch data and update the dom with it.
    //     console.log(useEffect);
    // })
   
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>{setCount((count)=> count +1); }}>  + </button>
       
    </div>
  )
}

export default UseEffect