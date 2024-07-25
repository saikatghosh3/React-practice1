import React from 'react'
import { useEffect, useState } from 'react'

const UseEffectwithcondition = () => {
 const[count, setCount ] = useState(0);
  const[total, setTotal] = useState(100);

  useEffect(()=>{
    console.log("After count  render!!");
  },[count]); // this is called dependency .

  useEffect(()=>{
    console.log("After total  render!!");
  },[total]);

  // first time it will load the both but after that it will only load the clicked portion.
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