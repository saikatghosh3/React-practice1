import React from 'react'
import { useEffect, useState } from 'react'

const UseEffectwithcondition = () => {
 const[count, setCount ] = useState(0);
  const[total, setTotal] = useState(100);

  useEffect(()=>{
    console.log("After render!!");
  },[total]);

  return (
    <div className='new'>
      <h1>UseEffect with condition Hook</h1>
       <h2>Count:{count}</h2>
       <button onClick={() => setCount(count + 1)}>Update Count</button>


       <h2>Total:{total}</h2>
       <button onClick={() => setTotal(total + 1)}>Update total</button>
    </div>
  )
}

export default UseEffectwithcondition