import React from 'react'
import { useEffect, useState } from 'react'

const UseEffect = () => {
// Example2
 const [count, setCount] = useState(0); 


// Example 1
useEffect(() =>{

  // alert("UseEffect Hook!");
  console.log("useEffect Hook")
})



  return (
    <div className='useEffect'>

    <h1>UseEffect Hook</h1>

 {/* Example 2 */}
    <h2> Count:{count}</h2>
    <button onClick={()=>setCount(count + 1)}> Update Count</button>
    </div>
  )
}

export default UseEffect